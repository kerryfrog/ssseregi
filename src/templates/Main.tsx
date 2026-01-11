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
    <div className="antialiased w-full text-gray-700 font-sans bg-gray-50 flex flex-col min-h-screen">
      {props.meta}

      {/* Header Section */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-4 flex flex-col md:flex-row items-center justify-between">
          <div className="mb-4 md:mb-0 text-center md:text-left">
            <div className="font-bold text-2xl text-gray-900 leading-tight hover:text-blue-600 transition-colors">
              <Link href="/">
                <a>{AppConfig.site_name}</a>
              </Link>
            </div>
            <div className="text-sm text-gray-500 mt-1 hidden md:block">
              {AppConfig.description}
            </div>
          </div>

          <nav>
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
          </nav>
        </div>
      </header>

      {/* Banner Section */}
      {router.pathname === '/' && (
        <div className="w-full bg-white block">
          <img
            src="/assets/images/banner.png"
            alt="배너"
            className="w-full h-auto block"
          />
        </div>
      )}

      {/* Main Content */}
      <main className="flex-grow w-full py-10">
        <div className="max-w-screen-md mx-auto px-4 sm:px-6 bg-white p-6 md:p-10 rounded-xl shadow-sm border border-gray-100">
          {props.children}
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-gray-300 py-12 border-t border-gray-800 mt-auto">
        <div className="max-w-screen-md mx-auto px-4 sm:px-6 text-center">
          <div className="flex justify-center space-x-6 mb-6 font-medium text-sm">
            <Link href="/about/">
              <a className="hover:text-white transition-colors">소개</a>
            </Link>
            <span>|</span>
            <Link href="/contact/">
              <a className="hover:text-white transition-colors">연락처</a>
            </Link>
            <span>|</span>
            <Link href="/privacy/">
              <a className="hover:text-white transition-colors">
                개인정보처리방침
              </a>
            </Link>
          </div>
          <div className="text-sm text-gray-500">
            © Copyright {new Date().getFullYear()} {AppConfig.title}. Powered
            with{' '}
            <span role="img" aria-label="Love">
              ♥
            </span>{' '}
            by{' '}
            <a
              href="https://creativedesignsguru.com"
              className="hover:text-white transition-colors"
            >
              CreativeDesignsGuru
            </a>
          </div>
        </div>
      </footer>
      <style jsx>
        {`
          .selected {
            @apply text-blue-600 font-semibold;
          }
        `}
      </style>
    </div>
  );
};

export { Main };
