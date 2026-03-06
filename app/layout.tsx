import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: {
    default: 'TechBlog Pro',
    template: '%s | TechBlog Pro',
  },
  description: 'ertyuiop',
  icons: {
    icon: 'https://res.cloudinary.com/dsmdg0fyj/image/upload/v1768125131/smaksly-builder/695a26baa2542d441b53e457/ma6ds1kk3thwvevgrcgf.jpg',
    apple: 'https://res.cloudinary.com/dsmdg0fyj/image/upload/v1768125131/smaksly-builder/695a26baa2542d441b53e457/ma6ds1kk3thwvevgrcgf.jpg',
  },
  metadataBase: new URL('https://smaksly-1b53e457.vercel.app'),
  openGraph: {
    title: 'TechBlog Pro',
    description: 'ertyuiop',
    siteName: 'TechBlog Pro',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'TechBlog Pro',
    description: 'ertyuiop',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="min-h-screen bg-white antialiased">
        <Header siteName="TechBlog Pro" />
        {children}
        <Footer siteName="TechBlog Pro" />
      </body>
    </html>
  );
}
