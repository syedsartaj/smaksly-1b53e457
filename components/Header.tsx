'use client'
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  siteName: string;
  logoSrc?: string;
}

const Header: React.FC<HeaderProps> = ({ siteName, logoSrc }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          {logoSrc ? (
            <Image src={logoSrc} alt={`${siteName} Logo`} width={40} height={40} />
          ) : (
            <span className="text-xl font-bold">{siteName}</span>
          )}
          <span className="hidden md:inline text-lg font-semibold">{siteName}</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          <Link href="/" className="hover:text-[#10b981]">
            Home
          </Link>
          <Link href="/about" className="hover:text-[#10b981]">
            About
          </Link>
          <Link href="/contact" className="hover:text-[#10b981]">
            Contact Us
          </Link>
          <button className="bg-[#10b981] text-white px-4 py-2 rounded hover:bg-[#06b6d4]">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white/80 backdrop-blur-md absolute top-16 left-0 right-0 py-4 space-y-4 border-t">
          <Link href="/" onClick={toggleMobileMenu} className="block px-4 py-2 hover:text-[#10b981]">
            Home
          </Link>
          <Link href="/about" onClick={toggleMobileMenu} className="block px-4 py-2 hover:text-[#10b981]">
            About
          </Link>
          <Link href="/contact" onClick={toggleMobileMenu} className="block px-4 py-2 hover:text-[#10b981]">
            Contact Us
          </Link>
          <button
            className="block w-full text-left bg-[#10b981] text-white px-4 py-2 rounded hover:bg-[#06b6d4]"
            onClick={toggleMobileMenu}
          >
            Get Started
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;