'use client';

import Image from 'next/image';
import Link from 'next/link';

interface BlogPost {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  featuredImage: string;
  publishedAt: string;
  authorName: string;
  readingTime: number;
  tags: string[];
  category?: { name: string; slug: string };
}

interface BlogListingProps {
  blogs: BlogPost[];
  blogBasePath?: string;
}

export default function Blogs({ blogs = [], blogBasePath = '/blog' }: BlogListingProps) {
  return (
    <main className="p-6 space-y-8">
      <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {blogs.map((blog) => (
          <article key={blog._id} className="border rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <Link href={`${blogBasePath}/${blog.slug}`} className="block">
              <Image
                src={blog.featuredImage}
                width={600}
                height={400}
                className="w-full h-48 object-cover rounded-t-lg"
                alt={blog.title}
                unoptimized
              />
              <div className="p-4 space-y-2">
                <h2 className="text-xl font-semibold">{blog.title}</h2>
                <p className="text-gray-600">{blog.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>By {blog.authorName}</span>
                  <span>{blog.readingTime} min read</span>
                </div>
                <div className="text-xs text-gray-400">{new Date(blog.publishedAt).toLocaleDateString()}</div>
              </div>
            </Link>
          </article>
        ))}
      </section>

      <div className="flex justify-center">
        <button className="px-4 py-2 text-white bg-green-500 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300">
          Load More
        </button>
      </div>
    </main>
  );
}