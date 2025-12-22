import fs from 'fs';
import { join } from 'path';

import matter from 'gray-matter';

const postsDirectory = join(process.cwd(), '_posts');

export type PostItems = {
  [key: string]: string;
};

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export function getPostBySlug(slug: string, fields: string[] = []) {
  const postFiles = getPostSlugs();

  const matchingFile = postFiles.find((postFile) => {
    const fullPath = join(postsDirectory, postFile);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data } = matter(fileContents);
    return data.slug === slug;
  });

  if (!matchingFile) {
    return {};
  }

  const fullPath = join(postsDirectory, matchingFile);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);
  const items: PostItems = {};

  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = data.slug;
    } else if (field === 'content') {
      items[field] = content;
    } else if (data[field]) {
      if (field === 'date') {
        items[field] = data[field].toString();
      } else {
        items[field] = data[field];
      }
    }
  });

  return items;
}

export function getAllPosts(fields: string[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((filename) => {
      const fullPath = join(postsDirectory, filename);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      if (!data.slug) {
        return null;
      }

      const items: PostItems = {};
      fields.forEach((field) => {
        if (field === 'slug') {
          items[field] = data.slug;
        } else if (field === 'content') {
          items[field] = content;
        } else if (data[field]) {
          if (field === 'date') {
            items[field] = data[field].toString();
          } else {
            items[field] = data[field];
          }
        }
      });
      return items;
    })
    .filter((post): post is PostItems => post !== null) // Filter out the null (invalid) posts
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
