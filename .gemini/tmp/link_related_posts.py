import os
import re
from collections import defaultdict

POSTS_DIR = '_posts'
RELATED_POSTS_HEADING = "## 함께 읽으면 좋은 글"

def parse_front_matter(content):
    """Parses front matter from markdown content."""
    front_matter = {}
    match = re.search(r'^---\s*\n(.*?)\n---\s*\n', content, re.DOTALL)
    if not match:
        return None, content

    front_matter_str = match.group(1)
    body = content[match.end():]
    
    for line in front_matter_str.split('\n'):
        if ':' in line:
            key, value = line.split(':', 1)
            front_matter[key.strip()] = value.strip().strip("'\"")
            
    return front_matter, body

def get_all_posts():
    """Gathers information about all posts."""
    posts = []
    for filename in os.listdir(POSTS_DIR):
        if not filename.endswith('.md'):
            continue
        
        filepath = os.path.join(POSTS_DIR, filename)
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        front_matter, body = parse_front_matter(content)
        
        if front_matter and 'title' in front_matter and 'slug' in front_matter:
            posts.append({
                'filepath': filepath,
                'filename': filename,
                'title': front_matter['title'],
                'slug': front_matter['slug'],
                'category': front_matter.get('category'),
                'content': body
            })
    return posts

def find_related_posts(current_post, all_posts, max_links=3):
    """Finds related posts, primarily by category."""
    related = []
    if not current_post['category']:
        return related
        
    for post in all_posts:
        if post['slug'] == current_post['slug']:
            continue
        
        if post['category'] == current_post['category']:
            related.append(post)
            
    # Simple sort to keep it consistent, could be improved with more advanced scoring
    return sorted(related, key=lambda p: p['title'])[:max_links]

def main():
    all_posts = get_all_posts()
    
    if not all_posts:
        print("No posts found to process.")
        return

    print(f"Found {len(all_posts)} posts. Analyzing and adding links...")

    for post_to_update in all_posts:
        print(f"Processing '{post_to_update['title']}'...")
        
        related_posts = find_related_posts(post_to_update, all_posts)
        
        if not related_posts:
            print("  -> No related posts found.")
            continue
            
        # Create the markdown for the related links
        links_markdown = f"\n\n{RELATED_POSTS_HEADING}\n"
        for related in related_posts:
            # Assumes the URL structure is /posts/[slug]
            url = f"/posts/{related['slug']}"
            links_markdown += f"- [{related['title']}]({url})\n"
            
        # Read the original full content of the file to update
        with open(post_to_update['filepath'], 'r', encoding='utf-8') as f:
            full_content = f.read()
            
        # Check if the "Related Posts" section already exists
        if RELATED_POSTS_HEADING in full_content:
            print("  -> 'Related Posts' section already exists. Skipping.")
            continue
        
        # Append the new section to the end of the file
        with open(post_to_update['filepath'], 'w', encoding='utf-8') as f:
            f.write(full_content.strip() + links_markdown)
        
        print(f"  -> Added {len(related_posts)} related links.")

    print("\nFinished processing all posts.")

if __name__ == "__main__":
    main()
