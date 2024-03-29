import React from "react";
import Head from "next/head";

interface MetaProps {
  title?: string;
  description?: string;
  ogImage?: string;
  ogUrl?: string;
  siteName?: string;
  favicon?: string;
  twitterCard?: string;
  twitterSite?: string;
  lang?: string;
  isHomePage?: boolean;
}

const Meta = ({
  title = "言の葉つむぎ",
  description = "リレー小説投稿アプリ",
  ogImage = "/image.png",
  ogUrl = "https://kotonoha-tsumugi.vercel.app",
  siteName = "言の葉つむぎ",
  favicon = "/favicon.ico",
  twitterCard = "summary",
  twitterSite = "@your-default-twitter-handle",
  lang = "ja_JP",
  isHomePage = false,
}: MetaProps) => {
  const pageTitle = isHomePage ? siteName : `${title} - ${siteName}`; // 修正

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={description} />
      <meta property="og:type" content="article" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={ogUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content={lang} />

      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:site" content={twitterSite} />
      <meta name="twitter:image" content={ogImage} />

      <link rel="shortcut icon" href={favicon} />
      <link rel="icon" href={favicon} />
    </>
  );
};

export default Meta;
