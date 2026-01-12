import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="font-inter text-gray-800">
      {/* Hero Section */}
      <section className="relative w-full h-screen bg-gray-900 text-white flex items-center justify-center">
        <Image
          src="https://res.cloudinary.com/dsmdg0fyj/image/upload/v1768125131/smaksly-builder/695a26baa2542d441b53e457/ma6ds1kk3thwvevgrcgf.jpg"
          alt="Mangrove Honey"
          fill
          className="object-cover opacity-50"
          unoptimized
        />
        <div className="absolute z-10 text-center p-6">
          <h1 className="text-4xl md:text-6xl font-bold">Welcome to TechBlog Pro</h1>
          <p className="mt-4 text-lg md:text-xl">Your source for the latest in technology.</p>
          <button className="mt-6 bg-[#10b981] text-white py-3 px-6 rounded hover:bg-[#06b6d4] focus:outline-none focus:ring-4 focus:ring-[#06b6d4]">
            Get Started
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#10b981]">Features</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Feature One</h3>
              <p className="text-gray-600">Description of feature one that highlights its benefits and use cases.</p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Feature Two</h3>
              <p className="text-gray-600">Description of feature two that highlights its benefits and use cases.</p>
            </div>
            <div className="p-6 border rounded-lg shadow-sm hover:shadow-lg">
              <h3 className="text-xl font-semibold mb-2">Feature Three</h3>
              <p className="text-gray-600">Description of feature three that highlights its benefits and use cases.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-[#10b981]">Testimonials</h2>
          <div className="mt-8 space-y-8">
            <div className="p-6 bg-white border rounded-lg shadow-sm hover:shadow-lg">
              <p className="text-gray-600">"TechBlog Pro is the best tech blog I've ever followed. The insights are invaluable!"</p>
              <p className="mt-4 font-semibold">- Jane Doe</p>
            </div>
            <div className="p-6 bg-white border rounded-lg shadow-sm hover:shadow-lg">
              <p className="text-gray-600">"A must-read for anyone interested in staying ahead in the tech industry."</p>
              <p className="mt-4 font-semibold">- John Smith</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-12 bg-[#06b6d4] text-white text-center">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold">Join Us Today</h2>
          <p className="mt-4 text-lg">Become part of our growing community of tech enthusiasts.</p>
          <button className="mt-6 bg-white text-[#10b981] py-3 px-6 rounded hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-white">
            Sign Up Now
          </button>
        </div>
      </section>
    </main>
  );
}