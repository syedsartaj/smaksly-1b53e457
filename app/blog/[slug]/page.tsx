import Image from 'next/image';

export default function BlogPost({ blog = {} }) {
  if (!blog._id) {
    return <main className="p-8 text-center">Blog post not found</main>;
  }

  return (
    <main className="max-w-4xl mx-auto p-4 space-y-8">
      <article>
        <h1 className="text-3xl font-bold text-gray-800">{blog.title}</h1>
        <div className="flex items-center space-x-4 mt-4">
          <Image
            src={blog.featuredImage || '/placeholder.svg'}
            alt={blog.title}
            width={600}
            height={400}
            className="rounded-md"
            unoptimized
          />
        </div>
        <div className="flex items-center space-x-4 mt-4 text-sm text-gray-500">
          <span>By {blog.authorName}</span>
          <span>{new Date(blog.publishedAt).toLocaleDateString()}</span>
          <span>{blog.readingTime} min read</span>
        </div>
        <div className="mt-6 prose max-w-none" dangerouslySetInnerHTML={{ __html: blog.body }} />
      </article>

      <section aria-label="Author Bio" className="bg-gray-100 p-4 rounded-md">
        <h2 className="text-xl font-semibold text-gray-700">About the Author</h2>
        <p className="text-gray-600 mt-2">{blog.authorBio}</p>
      </section>

      <section aria-label="Social Share" className="flex space-x-4">
        <button
          className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 focus:ring-2 focus:ring-teal-400"
        >
          Share on Twitter
        </button>
        <button
          className="px-4 py-2 bg-teal-500 text-white rounded-md hover:bg-teal-600 focus:ring-2 focus:ring-teal-400"
        >
          Share on Facebook
        </button>
      </section>

      <section aria-label="Related Posts" className="border-t border-gray-300 pt-8">
        <h2 className="text-xl font-semibold text-gray-700">Related Posts</h2>
        {/* Placeholder for related posts */}
        <div className="mt-4 grid gap-4 md:grid-cols-2">
          <article className="p-4 bg-white shadow-md rounded-md">Related post 1</article>
          <article className="p-4 bg-white shadow-md rounded-md">Related post 2</article>
        </div>
      </section>
    </main>
  );
}