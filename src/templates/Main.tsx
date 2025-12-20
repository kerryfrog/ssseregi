'use client';

import React, { ReactNode } from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';

import { Navbar } from '../navigation/Navbar';
import { AppConfig } from '../utils/AppConfig';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {
  const router = useRouter();

  return (
    <div className="antialiased w-full text-gray-700 px-3 md:px-0">
      {props.meta}

      <div className="max-w-screen-md mx-auto">
        <div className="border-b border-gray-300">
          <div className="pt-16 pb-8">
            <div className="font-semibold text-3xl text-gray-900">
              {AppConfig.title}
            </div>
            <div className="text-xl">{AppConfig.description}</div>
          </div>
          <div>
            <Navbar>
              <li className="mr-6">
                <Link href="/">
                  <a className={router.pathname === '/' ? 'selected' : ''}>
                    Home
                  </a>
                </Link>
              </li>
              <li className="mr-6">
                <Link href="/feng-shui-story">
                  <a
                    className={
                      router.pathname === '/feng-shui-story' ? 'selected' : ''
                    }
                  >
                    풍수지리 이야기
                  </a>
                </Link>
              </li>
              <li className="mr-6">
                <Link href="/seoul-feng-shui">
                  <a
                    className={
                      router.pathname === '/seoul-feng-shui' ? 'selected' : ''
                    }
                  >
                    서울 풍수
                  </a>
                </Link>
              </li>
              <li className="mr-6">
                <Link href="/living-feng-shui">
                  <a
                    className={
                      router.pathname === '/living-feng-shui' ? 'selected' : ''
                    }
                  >
                    생활 풍수
                  </a>
                </Link>
              </li>
              <li className="mr-6">
                <Link href="/about/">
                  <a className={router.pathname === '/about' ? 'selected' : ''}>
                    About
                  </a>
                </Link>
              </li>
            </Navbar>
          </div>
        </div>

        <div className="text-xl py-5">{props.children}</div>

        <div className="border-t border-gray-300 text-center py-8 text-sm">
          <div className="mb-3 flex justify-center space-x-4">
            <Link href="/about/">
              <a className="hover:text-gray-900">소개</a>
            </Link>
            <span>|</span>
            <Link href="/contact/">
              <a className="hover:text-gray-900">연락처</a>
            </Link>
            <span>|</span>
            <Link href="/privacy/">
              <a className="hover:text-gray-900">개인정보처리방침</a>
            </Link>
          </div>
          © Copyright {new Date().getFullYear()} {AppConfig.title}. Powered with{' '}
          <span role="img" aria-label="Love">
            ♥
          </span>{' '}
          by <a href="https://creativedesignsguru.com">CreativeDesignsGuru</a>
        </div>
      </div>
      <style jsx>
        {`
          .selected {
            @apply bg-gray-200 rounded-md px-2 py-1;
          }
        `}
      </style>
    </div>
  );
};

export { Main };
