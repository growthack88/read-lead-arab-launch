import React from "react";
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
  twitterCard?: string;
  // Legacy prop aliases for backward compatibility
  image?: string;
  url?: string;
  type?: string;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  ogTitle,
  ogDescription,
  ogImage,
  ogType,
  canonicalUrl,
  twitterCard = "summary_large_image",
  // Legacy aliases
  image,
  url,
  type,
}) => {
  const resolvedOgImage = ogImage ?? image ?? "https://land.readtolead.store/assets/home-og.jpg";
  const resolvedOgType = ogType ?? type ?? "website";
  const resolvedCanonicalUrl = canonicalUrl ?? url;
  const resolvedOgTitle = ogTitle ?? title;
  const resolvedOgDescription = ogDescription ?? description;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content="Read to Lead, كتب, كيتات تعليمية, تطوير الذات, التسويق, الإنتاجية, ريادة أعمال" />
      <meta name="author" content="Read to Lead" />

      {/* Open Graph */}
      <meta property="og:title" content={resolvedOgTitle} />
      <meta property="og:description" content={resolvedOgDescription} />
      <meta property="og:image" content={resolvedOgImage} />
      <meta property="og:type" content={resolvedOgType} />
      <meta property="og:locale" content="ar_AR" />
      {resolvedCanonicalUrl && <meta property="og:url" content={resolvedCanonicalUrl} />}

      {/* Twitter Card */}
      <meta name="twitter:card" content={twitterCard} />
      <meta name="twitter:title" content={resolvedOgTitle} />
      <meta name="twitter:description" content={resolvedOgDescription} />
      <meta name="twitter:image" content={resolvedOgImage} />

      {/* Canonical */}
      {resolvedCanonicalUrl && <link rel="canonical" href={resolvedCanonicalUrl} />}
    </Helmet>
  );
};

export default SEO;
