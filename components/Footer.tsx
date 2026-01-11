import Image from 'next/image';
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
            <Image
              src="/placeholder.svg"
              alt={`${siteName} Logo`}
              width={50}
              height={50}
              className="mb-4"
            />
            <p className="text-sm">
              {siteName} is your go-to source for the latest in tech news and tutorials.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
            <ul className="space-y-2">
              <li>
                <Link href="/">
                  <a className="hover:text-primary">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/about">
                  <a className="hover:text-primary">About</a>
                </Link>
              </li>
              <li>
                <Link href="/blogs">
                  <a className="hover:text-primary">Blogs</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact Info */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Contact Info</h2>
            <ul className="space-y-2">
              <li className="flex items-center">
                <MapPin className="mr-2" />
                <span>123 Tech Street, San Francisco, CA</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2" />
                <span>info@techblogpro.com</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter Signup */}
          <div>
            <h2 className="text-lg font-semibold mb-4">Newsletter</h2>
            <form>
              <div className="flex flex-col space-y-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="p-2 rounded bg-zinc-800 border border-zinc-700"
                  aria-label="Email address"
                />
                <button
                  type="submit"
                  className="p-2 bg-primary text-white rounded hover:bg-secondary"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-800 py-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm">
            &copy; {currentYear} {siteName}. All rights reserved.
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy">
              <a className="hover:text-primary">Privacy Policy</a>
            </Link>
            <Link href="/terms">
              <a className="hover:text-primary">Terms</a>
            </Link>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" aria-label="Facebook" className="hover:text-primary">
              <Facebook />
            </a>
            <a href="#" aria-label="Twitter" className="hover:text-primary">
              <Twitter />
            </a>
            <a href="#" aria-label="LinkedIn" className="hover:text-primary">
              <Linkedin />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-primary">
              <Instagram />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}