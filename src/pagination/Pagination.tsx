import React from 'react';

import Link from 'next/link';

import { convertUrlToLinkHref } from '../utils/Pagination';

export type IPaginationProps = {
  previous?: string;
  next?: string;
  current?: number; // Added for page number in title
};

const Pagination = (props: IPaginationProps) => (
  <div className="text-sm flex justify-between">
    {' '}
    {/* Keeping text-sm on parent div, applying larger text directly to links */}
    {props.previous && (
      <div>
        <Link href={convertUrlToLinkHref(props.previous)} as={props.previous}>
          <a className="text-base font-medium">← Newer Posts</a>
        </Link>
      </div>
    )}
    {props.next && (
      <div className="text-right ml-auto">
        <Link href={convertUrlToLinkHref(props.next)} as={props.next}>
          <a className="text-base font-medium">Older Posts →</a>
        </Link>
      </div>
    )}
  </div>
);

export { Pagination };
