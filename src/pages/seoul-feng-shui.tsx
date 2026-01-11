import React from 'react';

import { GetStaticProps } from 'next';

import { BlogGallery, IBlogGalleryProps } from '../blog/BlogGallery';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import { getAllPosts } from '../utils/Content';

const SeoulFengShui = (props: IBlogGalleryProps) => (
  <Main
    meta={
      <Meta
        title="서울 풍수"
        description="서울의 각 구에 대한 풍수지리 분석 글 목록입니다."
      />
    }
  >
    <h2 className="text-lg font-semibold text-gray-800 mb-6">서울 풍수</h2>
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
  ]).filter((post) => post.category === 'seoul-feng-shui');
  return {
    props: {
      posts,
      pagination: {},
    },
  };
};

export default SeoulFengShui;
