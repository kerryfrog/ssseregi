import React from 'react';

import Head from 'next/head';
import { useRouter } from 'next/router';

import { AppConfig } from '../utils/AppConfig';
import { addTrailingSlash } from '../utils/Url';

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

  // props.canonical이 있으면 그것을 쓰고, 없으면 현재 경로를 기반으로 자동 생성
  const canonicalUrl =
    props.canonical ||
    `${baseUrl}${router.basePath}${addTrailingSlash(router.asPath)}`;

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
              content={`${AppConfig.url}${router.basePath}${props.post.image}`}
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
            "url": "${AppConfig.url}${router.basePath}${addTrailingSlash(
                  router.asPath
                )}",
            "publisher": {
              "@type": "Organization",
              "logo": {
                "@type": "ImageObject",
                "url": "${AppConfig.url}${
                  router.basePath
                }/assets/images/logo.png"
              },
              "name": "${AppConfig.author}"
            },
            "headline": "${props.title} | ${AppConfig.site_name}",
            "image": ["${AppConfig.url}${router.basePath}${props.post.image}"],
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
              "@id": "${AppConfig.url}${router.basePath}${addTrailingSlash(
                  router.asPath
                )}"
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
