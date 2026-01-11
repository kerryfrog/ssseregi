import React from 'react';

import { GetStaticProps } from 'next';

import { BlogGallery, IBlogGalleryProps } from '../blog/BlogGallery';
import { Meta } from '../layout/Meta';
import { IPaginationProps } from '../pagination/Pagination';
import { Main } from '../templates/Main';
import { AppConfig } from '../utils/AppConfig';
import { getAllPosts } from '../utils/Content';

const FengShuiStory = (props: IBlogGalleryProps) => (
  <Main
    meta={
      <Meta
        title="풍수지리 이야기"
        description="풍수지리에 대한 일반적인 이야기와 설명을 담은 글 목록입니다."
      />
    }
  >
    <h2 className="text-lg font-semibold text-gray-800 mb-6">
      풍수지리 이야기
    </h2>
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
  ]).filter((post) => post.category === 'feng-shui-story');
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

export default FengShuiStory;
