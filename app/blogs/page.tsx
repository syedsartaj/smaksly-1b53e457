import { getBlogs } from '@/lib/api';
import type { Metadata } from 'next';
import BlogListingClient from './BlogListingClient';

export const revalidate = 60;

export default async function BlogListingPage() {
  const { blogs } = await getBlogs(1, 12);
  return <BlogListingClient blogs={blogs} />;
}
