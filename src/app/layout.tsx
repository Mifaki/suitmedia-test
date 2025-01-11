import { AntdRegistry } from '@ant-design/nextjs-registry';
import type { Metadata } from 'next';
import { ConfigProvider } from 'antd';
import ClientLayout from '@/shared/components/client-layout';
import { fontVariable } from '@/shared/util/fonts';
import { generateMetadata as baseGenerateMetadata } from '@/shared/util/generateMetadata';
import './globals.css';

export async function generateMetadata(): Promise<Metadata> {
  return baseGenerateMetadata({
    pageTitle: 'Home',
    description: "Ahmad Faiz's Suitmedia Frontend Test",
    canonicalPath: '/',
    keywords: ['Suitmedia Frontend Test Home'],
  });
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${fontVariable} antialiased`}>
        <AntdRegistry>
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: '#F96500',
                colorBgElevated: '#F96500',
              },
            }}
          >
            <ClientLayout>{children}</ClientLayout>
          </ConfigProvider>
        </AntdRegistry>
      </body>
    </html>
  );
}
