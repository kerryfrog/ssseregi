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
    {/* Recent Posts 헤더 영역 추가 */}
    <div className="flex justify-between items-center mb-8">
      <h2 className="text-2xl font-bold text-gray-900">Recent Posts</h2>
    </div>

    {/* 격자형 레이아웃 구성: 모바일 1열, 태블릿 2열, 데스크톱 3열 */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {props.posts.map((elt) => (
        <Link href="/posts/[slug]" as={`/posts/${elt.slug}`} key={elt.slug}>
          <a className="group block h-full">
            <div className="flex flex-col h-full transition-all duration-300">
              {/* 이미지 상단 배치 및 카테고리 태그 (이미지 위 오버레이) */}
              <div className="relative aspect-video rounded-2xl overflow-hidden mb-4 shadow-sm group-hover:shadow-md">
                <img
                  src={elt.image || '/assets/images/posts/random-img.jpg'}
                  alt={elt.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* 카테고리 태그 (데이터에 category가 있다고 가정) */}
                <div className="absolute top-3 left-3">
                  <span className="bg-white/90 backdrop-blur-sm text-[10px] font-bold px-2.5 py-1 rounded-full text-gray-800 uppercase tracking-wider shadow-sm">
                    {elt.category || 'FENG SHUI'}
                  </span>
                </div>
              </div>

              {/* 텍스트 영역 */}
              <div className="flex flex-col flex-grow px-1">
                <div className="text-xs font-semibold text-gray-400 mb-2 uppercase tracking-wide">
                  {format(new Date(elt.date), 'MMM d, yyyy')}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 leading-snug group-hover:text-blue-600 transition-colors line-clamp-2">
                  {elt.title}
                </h3>
                <p className="text-gray-500 text-sm line-clamp-2 mb-4 leading-relaxed">
                  {elt.description}
                </p>

                {/* Read Article 링크 추가 */}
                <div className="mt-auto flex items-center text-blue-600 font-bold text-sm">
                  Read article{' '}
                  <span className="ml-1 transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </div>
            </div>
          </a>
        </Link>
      ))}
    </div>

    <div className="mt-12">
      <Pagination
        previous={props.pagination.previous}
        next={props.pagination.next}
      />
    </div>
  </>
);

export { BlogGallery };
