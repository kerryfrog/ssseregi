import React from 'react';

import { format } from 'date-fns';
import Link from 'next/link';

import { Pagination, IPaginationProps } from '../pagination/Pagination';
import { PostItems } from '../utils/Content';

export type IBlogGalleryProps = {
  posts: PostItems[];
  pagination: IPaginationProps;
};

const BlogGallery = (props: IBlogGalleryProps) => (
  <>
    <div className="flex flex-col gap-8">
      {props.posts.map((elt) => (
        <Link href="/posts/[slug]" as={`/posts/${elt.slug}`} key={elt.slug}>
          <a className="block transform hover:scale-105 transition-transform duration-300 ease-in-out">
            <div className="bg-white rounded-lg shadow-md overflow-hidden h-full grid grid-cols-3">
              <img
                src={elt.image || '/assets/images/posts/random-img.jpg'}
                alt={elt.title}
                className="h-full object-cover"
              />
              <div className="p-6 flex flex-col justify-center col-span-2">
                <h2 className="text-2xl font-bold mb-2">{elt.title}</h2>
                <p className="text-gray-700 mb-4">{elt.description}</p>
                <div className="text-sm text-gray-600">
                  {format(new Date(elt.date), 'LLL d, yyyy')}
                </div>
              </div>
            </div>
          </a>
        </Link>
      ))}
    </div>

    <Pagination
      previous={props.pagination.previous}
      next={props.pagination.next}
    />
  </>
);

export { BlogGallery };
