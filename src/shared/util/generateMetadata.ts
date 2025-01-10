import { type Metadata } from 'next';

interface IMetadata {
  pageTitle: string;
  description: string;
  canonicalPath: string;
  type?: 'website' | 'article';
  keywords?: string[];
}

export async function generateMetadata({
  pageTitle,
  description,
  canonicalPath,
  type = 'website',
  keywords = [],
}: IMetadata): Promise<Metadata> {
  const siteTitle = 'Suitmedia Frontend Test';
  const fullTitle = `${pageTitle} | ${siteTitle}`;
  const baseUrl =
    `https://${process.env.NEXT_PUBLIC_SITE_URL}` || 'https://suitmedia.ahmad-faiz.my.id';

  return {
    metadataBase: new URL(baseUrl),
    title: fullTitle,
    description,
    keywords: keywords.join(', '),
    icons: {
      icon: '/favicon.ico',
    },
    authors: [
      {
        name: 'Ahmad Faiz Agustianto',
        url: baseUrl,
      },
    ],
    openGraph: {
      title: fullTitle,
      description,
      url: `${baseUrl}${canonicalPath}`,
      siteName: siteTitle,
      locale: 'id_ID',
      alternateLocale: 'en_US',
      type,
      images: [
        {
          url: '/opengraph-image.png',
          width: 1200,
          height: 630,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: ['/twitter-image.png'],
    },
    alternates: {
      canonical: `${baseUrl}${canonicalPath}`,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
  };
}
