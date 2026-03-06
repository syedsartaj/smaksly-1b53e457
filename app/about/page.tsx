import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="flex flex-col items-center p-6 space-y-12 bg-white text-gray-800 font-inter">
      <section className="w-full max-w-4xl text-center py-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About TechBlog Pro</h1>
        <p className="text-lg text-gray-600">
          Welcome to TechBlog Pro, your go-to source for the latest in technology news, insights, and tutorials. We are a team of passionate tech enthusiasts dedicated to bringing you the best content in the industry.
        </p>
      </section>

      <section className="w-full max-w-4xl py-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Mission</h2>
        <p className="text-lg text-gray-600">
          Our mission is to empower our readers with comprehensive and up-to-date technology information. We strive to make tech accessible and understandable for everyone, whether you're a seasoned professional or just starting out in the tech world.
        </p>
      </section>

      <section className="w-full max-w-4xl py-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Meet the Team</h2>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          <article className="flex flex-col items-center text-center">
            <Image src="/placeholder.svg" alt="Team Member" width={150} height={150} className="rounded-full" />
            <h3 className="mt-4 text-xl font-medium text-gray-900">John Doe</h3>
            <p className="text-gray-600">Chief Editor</p>
          </article>
          <article className="flex flex-col items-center text-center">
            <Image src="/placeholder.svg" alt="Team Member" width={150} height={150} className="rounded-full" />
            <h3 className="mt-4 text-xl font-medium text-gray-900">Jane Smith</h3>
            <p className="text-gray-600">Senior Writer</p>
          </article>
          <article className="flex flex-col items-center text-center">
            <Image src="/placeholder.svg" alt="Team Member" width={150} height={150} className="rounded-full" />
            <h3 className="mt-4 text-xl font-medium text-gray-900">Alex Johnson</h3>
            <p className="text-gray-600">Tech Analyst</p>
          </article>
        </div>
      </section>

      <section className="w-full max-w-4xl py-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Our Values</h2>
        <ul className="list-disc list-inside text-lg text-gray-600 space-y-2">
          <li>Integrity in reporting and content creation</li>
          <li>Commitment to providing value to our readers</li>
          <li>Passion for technology and innovation</li>
          <li>Diversity and inclusion in our community</li>
        </ul>
      </section>

      <section className="w-full max-w-4xl py-8">
        <h2 className="text-3xl font-semibold text-gray-900 mb-4">Contact Us</h2>
        <p className="text-lg text-gray-600">
          Have questions or feedback? Feel free to reach out to us via our <a href="/contact" className="text-[#10b981] hover:text-[#06b6d4]">contact page</a>.
        </p>
      </section>
    </main>
  );
}