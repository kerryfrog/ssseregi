import React from 'react';

import { format } from 'date-fns';
import { GetStaticPaths, GetStaticProps } from 'next';
import Link from 'next/link';

import { Content } from '../../content/Content';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
import { getAllPosts, getPostBySlug, PostItems } from '../../utils/Content';
import { markdownToHtml } from '../../utils/Markdown';

type IPostUrl = {
  slug: string;
};

type IPostProps = {
  title: string;
  description: string;
  date: string;
  modified_date: string | null;
  image: string;
  content: string;
  previousPost: PostItems | null;
  nextPost: PostItems | null;
};

const DisplayPost = (props: IPostProps) => (
  <Main
    meta={
      <Meta
        title={props.title}
        description={props.description}
        post={{
          image: props.image,
          date: props.date,
          modified_date: props.modified_date,
        }}
      />
    }
  >
    <h1 className="text-center font-bold text-3xl text-gray-900">
      {props.title}
    </h1>
    <div className="text-center text-sm mb-8">
      {format(new Date(props.date), 'LLLL d, yyyy')}
    </div>

    <Content>
      <div
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: props.content }}
      />
    </Content>

    <div className="mt-8 flex justify-between">
      {props.previousPost && (
        <Link href={`/posts/${props.previousPost.slug}`}>
          <a className="text-lg font-bold text-blue-600 hover:underline">
            &larr; 이전 글: {props.previousPost.title}
          </a>
        </Link>
      )}
      {props.nextPost && (
        <Link href={`/posts/${props.nextPost.slug}`}>
          <a className="text-lg font-bold text-blue-600 hover:underline">
            다음 글: {props.nextPost.title} &rarr;
          </a>
        </Link>
      )}
    </div>
  </Main>
);

export const getStaticPaths: GetStaticPaths<IPostUrl> = async () => {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((post) => ({
      params: {
        slug: post.slug,
      },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<IPostProps, IPostUrl> = async ({
  params,
}) => {
  const post = getPostBySlug(params!.slug, [
    'title',
    'description',
    'date',
    'modified_date',
    'image',
    'content',
    'slug',
  ]);
  const content = await markdownToHtml(post.content || '');
  const allPosts = getAllPosts(['slug', 'title', 'date']);
  const currentIndex = allPosts.findIndex((p) => p.slug === post.slug);

  const previousPost = allPosts[currentIndex + 1] || null;
  const nextPost = allPosts[currentIndex - 1] || null;

  return {
    props: {
      title: post.title,
      description: post.description,
      date: post.date,
      modified_date: post.modified_date || null,
      image: post.image,
      content,
      previousPost,
      nextPost,
    },
  };
};

export default DisplayPost;
