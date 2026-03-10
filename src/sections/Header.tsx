import { useState, useEffect } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'О компании', href: '/about' },
    { label: 'Услуги', href: '/services' },
    { label: 'Проекты', href: '/projects' },
    { label: 'Новости', href: '/news' },
    { label: 'Карьера', href: '/careers' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full">
        {/* Top bar */}
        <div className={`${isScrolled ? 'hidden' : 'block'} bg-[#1a1a1a] text-white py-2`}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
            <Link to="/subcontractors" className="text-sm hover:text-blue-400 transition-colors">
              Стать субподрядчиком
            </Link>
            <div className="flex items-center gap-4">
              <a href="tel:+74951234567" className="text-sm flex items-center gap-2 hover:text-blue-400 transition-colors">
                <Phone className="w-4 h-4" />
                +7 (495) 123-45-67
              </a>
            </div>
          </div>
        </div>

        {/* Main navigation */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2">
              <div className={`text-2xl lg:text-3xl font-bold tracking-tight ${
                isScrolled ? 'text-[#1a1a1a]' : 'text-white'
              }`}>
                СТРОЙ<span className="text-blue-500">ПРОФИ</span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className={`text-sm font-medium transition-colors ${
                    isScrolled ? 'text-gray-800' : 'text-white'
                  } ${isActive(link.href) ? 'text-blue-500' : ''} hover:text-blue-500`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <Link to="/labor">
                <Button
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6"
                >
                  Вакансии
                </Button>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
              ) : (
                <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-white'}`} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white shadow-lg">
            <nav className="flex flex-col py-4">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  to={link.href}
                  className="px-4 py-3 text-gray-800 hover:bg-gray-100 hover:text-blue-500 transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="px-4 py-3">
                <Link to="/labor">
                  <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                    Вакансии
                  </Button>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
