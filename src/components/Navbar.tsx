
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { number: '01.', name: 'About', url: '#about' },
  { number: '02.', name: 'Experience', url: '#experience' },
  { number: '03.', name: 'Projects', url: '#projects' },
  { number: '04.', name: 'Contact', url: '#contact' }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header 
      className={`fixed w-full z-50 px-5 md:px-10 transition-all duration-300 ${
        isScrolled ? 'py-3 bg-navy/80 backdrop-blur shadow-lg' : 'py-5'
      }`}
    >
      <nav className="flex items-center justify-between relative">
        <a href="#" className="text-primary font-mono text-2xl">
          A
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-8">
          {navLinks.map(({ number, name, url }) => (
            <a key={name} href={url} className="nav-link">
              <span className="nav-number">{number}</span>
              {name}
            </a>
          ))}
          <Button asChild className="ml-4 bg-transparent text-primary hover:bg-primary/10 border border-primary rounded">
            <a 
              href="/resume.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="font-mono text-sm"
            >
              Resume
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-primary z-30"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu */}
        <div 
          className={`
            fixed top-0 right-0 bottom-0 bg-navy-light w-3/4 z-20
            flex flex-col justify-center items-center
            transform transition-transform duration-300 ease-in-out
            ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          `}
        >
          <nav className="flex flex-col items-center space-y-8">
            {navLinks.map(({ number, name, url }) => (
              <a 
                key={name} 
                href={url} 
                className="nav-link text-base"
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="nav-number block text-center mb-1">{number}</span>
                {name}
              </a>
            ))}
            <Button asChild className="mt-8 bg-transparent text-primary hover:bg-primary/10 border border-primary rounded">
              <a 
                href="/resume.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="font-mono text-sm"
                onClick={() => setIsMenuOpen(false)}
              >
                Resume
              </a>
            </Button>
          </nav>
        </div>
        
        {/* Overlay for mobile menu background */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 bg-black/50 z-10 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </nav>
    </header>
  );
};

export default Navbar;
