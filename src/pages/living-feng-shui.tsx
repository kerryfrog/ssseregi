import React from 'react';

import { GetStaticProps } from 'next';

import { BlogGallery, IBlogGalleryProps } from '../blog/BlogGallery';
import { Meta } from '../layout/Meta';
import { IPaginationProps } from '../pagination/Pagination';
import { Main } from '../templates/Main';
import { AppConfig } from '../utils/AppConfig';
import { getAllPosts } from '../utils/Content';

const LivingFengShui = (props: IBlogGalleryProps) => (
  <Main
    meta={
      <Meta
        title="생활 풍수"
        description="일상생활에 적용할 수 있는 실용적인 풍수지리 팁 글 목록입니다."
      />
    }
  >
    <h2 className="text-lg font-semibold text-gray-800 mb-6">생활 풍수</h2>
    <BlogGallery posts={props.posts} pagination={props.pagination} />
  </Main>
);

export const getStaticProps: GetStaticProps<IBlogGalleryProps> = async () => {
  const posts = getAllPosts([
    'title',
    'date',
    'slug',
    'image',
    'description',
    'category',
  ]).filter((post) => post.category === 'living-feng-shui');
  const pagination: IPaginationProps = {};

  if (posts.length > AppConfig.pagination_size) {
    pagination.next = '/page2';
  }

  return {
    props: {
      posts: posts.slice(0, AppConfig.pagination_size),
      pagination,
    },
  };
};

export default LivingFengShui;
