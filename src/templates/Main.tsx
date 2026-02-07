'use client';

import React, { ReactNode, useState } from 'react';

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
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="antialiased w-full text-gray-700 font-sans bg-gray-50 flex flex-col min-h-screen">
      {props.meta}

      {/* Header Section */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 py-4 flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-auto flex items-center justify-between mb-4 md:mb-0">
            <div className="text-center md:text-left">
              <Link href="/">
                <a className="flex items-center">
                  <img
                    src="/assets/images/logo.png"
                    alt="블로그 로고"
                    className="h-10 w-auto mr-3"
                  />{' '}
                  {/* Adjust height (h-10) and margin as needed */}
                  <span className="font-bold text-3xl text-gray-900 leading-tight hover:text-blue-600 transition-colors font-serif tracking-tight">
                    {AppConfig.site_name}
                  </span>
                </a>
              </Link>
              <div className="text-sm text-gray-500 mt-1 hidden md:block">
                {AppConfig.description}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                type="button"
                className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                aria-label="toggle menu"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                  {isMenuOpen ? (
                    <path
                      fillRule="evenodd"
                      d="M18.278 16.864a1 1 0 01-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 01-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 011.414-1.414l4.829 4.828 4.828-4.828a1 1 0 111.414 1.414l-4.828 4.828 4.828 4.829z"
                    />
                  ) : (
                    <path
                      fillRule="evenodd"
                      d="M4 5h16a1 1 0 010 2H4a1 1 0 110-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2zm0 6h16a1 1 0 010 2H4a1 1 0 010-2z"
                    />
                  )}
                </svg>
              </button>
            </div>
          </div>

          <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block`}>
            <Navbar>
              <li className="md:mr-6 mb-2 md:mb-0">
                <Link href="/">
                  <a className={router.pathname === '/' ? 'selected' : ''}>
                    Home
                  </a>
                </Link>
              </li>
              <li className="md:mr-6 mb-2 md:mb-0">
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
              <li className="md:mr-6 mb-2 md:mb-0">
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
              <li className="md:mr-6 mb-2 md:mb-0">
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
              <li className="md:mr-6 mb-2 md:mb-0">
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

      {/* Banner Section 수정: 통이미지 대신 텍스트 히어로 섹션 적용 */}
      {router.pathname === '/' && (
        <div className="relative w-full overflow-hidden bg-slate-900 py-12 md:py-20">
          {/* 배경 이미지에 블러/어둡게 처리하여 텍스트 강조 */}
          <div className="absolute inset-0 z-0">
            <img
              src="/assets/images/background.jpg"
              alt="배경 이미지"
              className="w-full h-full object-cover opacity-40 blur-[2px]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-slate-900/60" />
          </div>

          {/* 텍스트 콘텐츠 영역 */}
          <div className="relative z-10 max-w-screen-md mx-auto px-6 text-center">
            <div className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-wider text-blue-400 uppercase border border-blue-400/30 rounded-full bg-blue-400/10">
              풍수지리 전문: 서도사의 풍수지리
            </div>
            <h1 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
              {AppConfig.site_name}
            </h1>
            <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed max-w-lg mx-auto">
              자연은 스스로 말하지 않지만, 그 안에 머무는 사람에게는 끊임없이
              기운을 전달합니다. <br className="hidden md:block" />
              비우고 채우는 풍수의 지혜를 통해 일상의 조화를 되찾아보세요.{' '}
              <br className="hidden md:block" />
              서도사가 들려주는 땅과 공간에 얽힌 따뜻한 이야기들이 당신의 인생을
              더욱 풍요롭고 긍정적인 방향으로 안내할 것입니다.
            </p>
          </div>
        </div>
      )}

      {/* Main Content 영역의 너비를 조정하여 3열 레이아웃이 여유 있게 들어가도록 합니다 */}
      <main className="flex-grow w-full py-10">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
          {/* 흰색 박스 배경을 제거하거나, 내부 BlogGallery에서 처리하도록 수정 */}
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
