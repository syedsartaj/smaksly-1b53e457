'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  siteName?: string;
}

export default function Header({ siteName = 'TechBlog Pro' }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <Image
            src="/logo.svg"
            alt={siteName}
            width={40}
            height={40}
            className="mr-2"
          />
          <span className="text-lg font-bold text-gray-900">{siteName}</span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          <Link href="/" className="text-gray-700 hover:text-primary">
            Home
          </Link>
          <Link href="/about" className="text-gray-700 hover:text-primary">
            About
          </Link>
          <Link href="/blogs" className="text-gray-700 hover:text-primary">
            Blogs
          </Link>
          <Link href="/blog/[slug]" className="text-gray-700 hover:text-primary">
            Blog Post
          </Link>
        </div>

        {/* Call-to-Action Button */}
        <Link href="/contact" className="hidden md:inline-block bg-primary text-white px-4 py-2 rounded hover:bg-secondary">
          Get Started
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMobileMenu}
          className="md:hidden text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="flex flex-col space-y-4 p-4">
            <Link href="/" className="text-gray-700 hover:text-primary" onClick={toggleMobileMenu}>
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-primary" onClick={toggleMobileMenu}>
              About
            </Link>
            <Link href="/blogs" className="text-gray-700 hover:text-primary" onClick={toggleMobileMenu}>
              Blogs
            </Link>
            <Link href="/blog/[slug]" className="text-gray-700 hover:text-primary" onClick={toggleMobileMenu}>
              Blog Post
            </Link>
            <Link href="/contact" className="bg-primary text-white px-4 py-2 rounded hover:bg-secondary" onClick={toggleMobileMenu}>
              Get Started
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}