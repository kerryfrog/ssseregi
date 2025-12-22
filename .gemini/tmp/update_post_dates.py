import os
import re
from datetime import datetime, timedelta
import random

POSTS_DIR = '_posts'
TODAY = datetime(2025, 12, 22)
MIN_DATE = datetime(2023, 1, 1)

def get_all_post_paths():
    """Returns a list of all markdown file paths in the _posts directory."""
    post_paths = []
    for root, _, files in os.walk(POSTS_DIR):
        for file in files:
            if file.endswith('.md'):
                post_paths.append(os.path.join(root, file))
    return post_paths

def extract_date_from_front_matter(content):
    """Extracts the date from the front matter of a markdown file."""
    # First, try to find the full 'date: ...' line
    date_line_match = re.search(r"^(date:\s*.*?)$", content, re.MULTILINE)
    if date_line_match:
        date_line = date_line_match.group(1)
        # Then, extract just the date string from that line
        date_str_match = re.search(r"(\d{4}-\d{2}-\d{2})", date_line)
        if date_str_match:
            return date_str_match.group(1)
    return None

def extract_date_from_filename(filename):
    """Extracts the date from the filename (e.g., 2023-12-17-title.md)."""
    match = re.match(r'(\d{4}-\d{2}-\d{2})', os.path.basename(filename))
    if match:
        return match.group(1)
    return None

def generate_random_past_date(existing_dates):
    """Generates a random unique past date before TODAY and after MIN_DATE."""
    while True:
        days_diff = (TODAY - MIN_DATE).days - 1 # -1 to ensure it's strictly before TODAY
        if days_diff < 0: # Handle case where MIN_DATE is already after TODAY
            raise ValueError("MIN_DATE must be before TODAY for random date generation.")
        random_days = random.randint(0, days_diff)
        new_date = MIN_DATE + timedelta(days=random_days)
        new_date_str = new_date.strftime('%Y-%m-%d')
        if new_date_str not in existing_dates:
            return new_date_str

def main():
    post_paths = get_all_post_paths()
    future_posts_found = False

    # First pass: Collect all existing dates to avoid collisions
    all_existing_dates = set()
    for post_path in post_paths:
        # From filename
        filename_date = extract_date_from_filename(post_path)
        if filename_date:
            all_existing_dates.add(filename_date)
        # From front matter
        with open(post_path, 'r', encoding='utf-8') as f:
            content = f.read()
        front_matter_date = extract_date_from_front_matter(content)
        if front_matter_date:
            all_existing_dates.add(front_matter_date)
    
    print(f"DEBUG: All existing dates collected: {len(all_existing_dates)} unique dates.")

    # Second pass: Process files and update dates
    for post_path_index, original_post_path in enumerate(post_paths):
        current_post_path = original_post_path # Use current_post_path to handle renames
        
        with open(current_post_path, 'r', encoding='utf-8') as f:
            content = f.read()

        front_matter_date_str = extract_date_from_front_matter(content)
        filename_date_str = extract_date_from_filename(current_post_path)

        if not front_matter_date_str:
            print(f"Warning: No date found in front matter for {current_post_path}. Skipping date check.")
            continue

        front_matter_date = datetime.strptime(front_matter_date_str, '%Y-%m-%d')

        if front_matter_date >= TODAY:
            future_posts_found = True
            print(f"Found future-dated post: {current_post_path} (Date: {front_matter_date_str})")

            # Generate a new unique past date
            try:
                new_date_str = generate_random_past_date(all_existing_dates)
            except ValueError as e:
                print(f"Error generating random past date for {current_post_path}: {e}")
                continue # Skip this post if date generation fails
                
            all_existing_dates.add(new_date_str) # Add new date to set to prevent re-use
            print(f"  -> Changing date to: {new_date_str}")

            # Replace date in front matter. Always format with single quotes for consistency.
            # Find the original 'date: ...' line
            original_date_line_match = re.search(r"^(date:\s*.*?)$", content, re.MULTILINE)
            if original_date_line_match:
                original_date_line = original_date_line_match.group(1)
                new_date_line = f"date: '{new_date_str}'"
                new_content = content.replace(original_date_line, new_date_line, 1) # Replace only the first occurrence
            else:
                print(f"Error: Could not find original date line for replacement in {current_post_path}. Skipping content update.")
                continue


            # Rename file if filename date also needs update and is future or different
            if filename_date_str and filename_date_str != new_date_str: # Only rename if different and filename_date_str is found
                old_filename = os.path.basename(current_post_path)
                new_filename = old_filename.replace(filename_date_str, new_date_str, 1)
                new_post_path = os.path.join(POSTS_DIR, new_filename)
                
                # Check if the new filename already exists (unlikely with unique date generation, but good to check)
                if os.path.exists(new_post_path) and new_post_path != current_post_path:
                    print(f"Error: Target filename {new_post_path} already exists. Skipping file rename for {current_post_path}.")
                else:
                    os.rename(current_post_path, new_post_path)
                    print(f"  -> Renamed file from {old_filename} to {new_filename}")
                    current_post_path = new_post_path # Update post_path for subsequent write
            elif not filename_date_str:
                print(f"Warning: No date found in filename for {current_post_path}. Skipping file rename.")
            
            with open(current_post_path, 'w', encoding='utf-8') as f:
                f.write(new_content)
            print(f"Updated date in {current_post_path}")
        # else:
        #     print(f"Post {current_post_path} (Date: {front_matter_date_str}) is already in the past. No change needed.")

    if not future_posts_found:
        print("No future-dated posts found in front matter. All dates are already in the past.")
    else:
        print("\nAll future-dated posts have been updated to past dates.")

if __name__ == "__main__":
    main()
