import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Blogs({ blogs = [] }) {
  const [categoryFilter, setCategoryFilter] = useState('');

  return (
    <main className="p-6 space-y-8">
      <section aria-label="Blog Listing">
        <h1 className="text-3xl font-bold text-gray-900">Blog Posts</h1>
        <div className="flex space-x-4 mt-4">
          {/* Category/Tag Filters Placeholder */}
          <select
            className="p-2 border border-gray-300 rounded-md"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            <option value="">All Categories</option>
            {/* Map over unique tags from blogs to create options */}
            {[...new Set(blogs.flatMap(blog => blog.tags))].map(tag => (
              <option key={tag} value={tag}>{tag}</option>
            ))}
          </select>
        </div>
        <div className="grid gap-8 mt-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {blogs
            .filter(blog => !categoryFilter || blog.tags.includes(categoryFilter))
            .map((blog) => (
              <article key={blog._id} className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-shadow">
                <Link href={`/blog/${blog.slug}`}>
                  <a className="block">
                    <Image
                      src={blog.featuredImage || '/placeholder.svg'}
                      alt={blog.title}
                      width={600}
                      height={400}
                      className="rounded-t-lg object-cover w-full h-48"
                      unoptimized
                    />
                    <div className="p-4">
                      <h2 className="text-xl font-semibold text-gray-800">{blog.title}</h2>
                      <p className="mt-2 text-gray-600">{blog.excerpt}</p>
                      <div className="flex items-center justify-between mt-4 text-sm text-gray-500">
                        <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
                        <span>{blog.readingTime} min read</span>
                      </div>
                      <div className="mt-2 text-sm text-gray-500">By {blog.authorName}</div>
                    </div>
                  </a>
                </Link>
              </article>
            ))}
        </div>
      </section>
      {/* Pagination/Load More Placeholder */}
      <div className="flex justify-center mt-8">
        <button
          className="px-4 py-2 text-white bg-teal-500 hover:bg-teal-600 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-400"
          aria-label="Load more posts"
        >
          Load More
        </button>
      </div>
    </main>
  );
}