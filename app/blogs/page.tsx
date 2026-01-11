import Image from 'next/image';
import Link from 'next/link';

const blogs = [
  {
    _id: '1',
    title: 'Getting Started with Next.js',
    slug: 'getting-started-nextjs',
    excerpt: 'Learn how to build modern web applications with Next.js...',
    featuredImage: '/placeholder.svg',
    publishedAt: new Date().toISOString(),
    authorName: 'Admin',
    readingTime: 5,
    tags: ['nextjs', 'react'],
  },
  {
    _id: '2',
    title: 'Understanding React Hooks',
    slug: 'understanding-react-hooks',
    excerpt: 'An in-depth look at using hooks in your React applications...',
    featuredImage: '/placeholder.svg',
    publishedAt: new Date().toISOString(),
    authorName: 'Jane Doe',
    readingTime: 8,
    tags: ['react', 'hooks'],
  },
  // Add 4 more mock blog posts
];

export default function Blogs() {
  return (
    <main className="p-6 font-inter">
      <section className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-6 text-gray-900">Latest Blog Posts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article key={blog._id} className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              <Link href={`/blog/${blog.slug}`} aria-label={`Read more about ${blog.title}`}>
                <div className="relative w-full h-48">
                  <Image
                    src={blog.featuredImage}
                    alt={`${blog.title} featured image`}
                    layout="fill"
                    objectFit="cover"
                    unoptimized
                  />
                </div>
                <div className="p-4">
                  <h2 className="text-xl font-semibold text-gray-800">{blog.title}</h2>
                  <p className="text-sm text-gray-600">{blog.excerpt}</p>
                  <div className="mt-3 flex items-center text-gray-500 text-sm">
                    <span>By {blog.authorName}</span>
                    <span className="mx-2">•</span>
                    <time dateTime={blog.publishedAt}>{new Date(blog.publishedAt).toLocaleDateString()}</time>
                    <span className="mx-2">•</span>
                    <span>{blog.readingTime} min read</span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button className="px-4 py-2 bg-teal-500 text-white rounded hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-300" aria-label="Load more blog posts">
            Load More
          </button>
        </div>
      </section>
    </main>
  );
}