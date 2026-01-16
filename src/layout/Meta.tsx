import React from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';

import { AppConfig } from '../utils/AppConfig';

type IMetaProps = {
  title: string;
  description: string;
  canonical?: string;
  post?: {
    image: string;
    date: string;
    modified_date: string | null;
  };
};

const Meta = (props: IMetaProps) => {
  const router = useRouter();

  // AppConfig.url의 끝에 슬래시가 있을 수 있으므로 처리
  const baseUrl = AppConfig.url.endsWith('/')
    ? AppConfig.url.slice(0, -1)
    : AppConfig.url;

  // 현재 경로에서 쿼리 스트링을 제외하고 트레일링 슬래시를 제거합니다.
  const path = router.asPath.split('?')[0];
  const cleanPath = path === '/' ? '' : path?.replace(/\/$/, '');

  // props.canonical이 있으면 그것을 쓰고, 없으면 현재 경로를 기반으로 자동 생성
  const canonicalUrl =
    props.canonical || `${baseUrl}${router.basePath}${cleanPath}`;

  return (
    <>
      <Head>
        <meta charSet="UTF-8" key="charset" />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1"
          key="viewport"
        />
        <link
          rel="icon"
          href={`${router.basePath}/assets/images/favicon.ico`}
          key="favicon"
        />
        <title>{`${props.title} | ${AppConfig.site_name}`}</title>
        <meta
          name="description"
          content={
            props.description ? props.description : AppConfig.description
          }
          key="description"
        />
        <meta name="author" content={AppConfig.author} key="author" />
        {/* 수정된 부분: 무조건 canonical 태그를 생성합니다. */}
        <link rel="canonical" href={canonicalUrl} key="canonical" />
        <meta
          property="og:title"
          content={`${props.title} | ${AppConfig.site_name}`}
          key="og:title"
        />
        <meta
          property="og:description"
          content={
            props.description ? props.description : AppConfig.description
          }
          key="og:description"
        />
        <meta property="og:locale" content={AppConfig.locale} key="og:locale" />
        <meta
          property="og:site_name"
          content={AppConfig.site_name}
          key="og:site_name"
        />
        {props.post && (
          <>
            <meta property="og:type" content="article" key="og:type" />
            <meta
              property="og:image"
              content={`${baseUrl}${router.basePath}${props.post.image}`}
              key="og:image"
            />
            <meta
              name="twitter:card"
              content="summary_large_image"
              key="twitter:card"
            />
            <meta
              property="article:published_time"
              content={new Date(props.post.date).toISOString()}
              key="article:published_time"
            />
            {props.post.modified_date && (
              <meta
                property="article:modified_time"
                content={new Date(props.post.modified_date).toISOString()}
                key="article:modified_time"
              />
            )}
            <script
              type="application/ld+json"
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: `
          {
            "description": "${
              props.description ? props.description : AppConfig.description
            }",
            "author": {
              "@type": "Person",
              "name": "${AppConfig.author}"
            },
            "@type": "BlogPosting",
            "url": "${baseUrl}${router.basePath}${cleanPath}",
            "publisher": {
              "@type": "Organization",
              "logo": {
                "@type": "ImageObject",
                "url": "${baseUrl}${router.basePath}/assets/images/logo.png"
              },
              "name": "${AppConfig.author}"
            },
            "headline": "${props.title} | ${AppConfig.site_name}",
            "image": ["${baseUrl}${router.basePath}${props.post.image}"],
            "datePublished": "${new Date(props.post.date).toISOString()}",
            ${
              props.post.modified_date
                ? `"dateModified": "${new Date(
                    props.post.modified_date
                  ).toISOString()}",`
                : ''
            }
            "mainEntityOfPage": {
              "@type": "WebPage",
              "@id": "${baseUrl}${router.basePath}${cleanPath}"
            },
            "@context": "http://schema.org"
          }`,
              }}
              key="ldjson"
            />
          </>
        )}
      </Head>
    </>
  );
};

export { Meta };
