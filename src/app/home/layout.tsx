import { Suspense } from 'react';
import type { Metadata } from 'next';
import { generateMetadata as baseGenerateMetadata } from '@/shared/util/generateMetadata';

export async function generateMetadata(): Promise<Metadata> {
  return baseGenerateMetadata({
    pageTitle: 'Home',
    description: "Ahmad Faiz's Suitmedia Frontend Test",
    canonicalPath: '/',
    keywords: ['Suitmedia Frontend Test Home'],
  });
}

export default function HomeLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Suspense>
      <main>{children}</main>
    </Suspense>
  );
}
