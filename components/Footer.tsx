import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  siteName?: string;
}

export default function Footer({ siteName = 'TechBlog Pro' }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-zinc-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: Company Info */}
          <div>
            <h2 className="text-xl font-bold">{siteName}</h2>
            <p className="mt-4 text-sm">
              TechBlog Pro is your go-to source for the latest in tech news, reviews, and tutorials.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/blogs">Blogs</Link></li>
              <li><Link href="/blog/[slug]">Blog Post</Link></li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <ul className="mt-4 space-y-2">
              <li className="flex items-center space-x-2">
                <MapPin className="w-5 h-5" aria-hidden="true" />
                <span>123 Tech Street, San Francisco, CA</span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone className="w-5 h-5" aria-hidden="true" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="w-5 h-5" aria-hidden="true" />
                <span>contact@techblogpro.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter Signup */}
          <div>
            <h3 className="text-lg font-semibold">Newsletter Signup</h3>
            <p className="mt-4 text-sm">Stay updated with our latest news and articles.</p>
            <form className="mt-4">
              <input
                type="email"
                placeholder="Your email"
                aria-label="Email address"
                className="w-full p-2 bg-zinc-800 rounded text-white focus:outline-none"
              />
              <button
                type="submit"
                className="mt-2 w-full bg-green-600 hover:bg-green-700 text-white p-2 rounded"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-zinc-800 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-sm">&copy; {currentYear} {siteName}. All rights reserved.</p>
          <ul className="flex space-x-4">
            <li><Link href="/privacy">Privacy Policy</Link></li>
            <li><Link href="/terms">Terms</Link></li>
          </ul>
          <div className="flex space-x-4">
            <Link href="https://facebook.com" aria-label="Facebook"><Facebook className="w-5 h-5" /></Link>
            <Link href="https://twitter.com" aria-label="Twitter"><Twitter className="w-5 h-5" /></Link>
            <Link href="https://linkedin.com" aria-label="LinkedIn"><Linkedin className="w-5 h-5" /></Link>
            <Link href="https://instagram.com" aria-label="Instagram"><Instagram className="w-5 h-5" /></Link>
          </div>
        </div>
      </div>
    </footer>
  );
}