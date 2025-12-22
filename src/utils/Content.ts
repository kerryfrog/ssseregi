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

// src/utils/Content.ts

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

      // 정렬을 위해 원본 날짜 데이터(data.date)를 함께 반환합니다.
      return { items, rawDate: data.date };
    })
    .filter((post) => post !== null)
    // 날짜 객체로 변환하여 타임스탬프 기준으로 내림차순 정렬 (최신순)
    .sort((post1, post2) => {
      const date1 = new Date(post1!.rawDate).getTime();
      const date2 = new Date(post2!.rawDate).getTime();
      return date2 - date1;
    })
    // 정렬된 결과에서 최종 아이템 객체만 추출
    .map((post) => post!.items);

  return posts;
}
