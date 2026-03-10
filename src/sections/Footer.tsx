import { Facebook, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const footerLinks = {
    company: [
      { label: 'О компании', href: '/about' },
      { label: 'Услуги', href: '/services' },
      { label: 'Проекты', href: '/projects' },
      { label: 'Новости', href: '/news' },
      { label: 'Карьера', href: '/careers' },
    ],
    legal: [
      { label: 'Политика в области прав человека', href: '#' },
      { label: 'Предупреждение о мошенничестве', href: '#' },
      { label: 'Политика конфиденциальности', href: '#' },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Youtube, href: '#', label: 'YouTube' },
  ];

  return (
    <footer className="bg-[#1a1a1a] text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company info */}
          <div className="lg:col-span-2">
            <Link to="/" className="text-3xl font-bold mb-6 block">
              СТРОЙ<span className="text-blue-500">ПРОФИ</span>
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              СтройПрофи — ведущая строительная компания России с 25-летним опытом.
              Мы строим будущее, создавая надёжные и инновационные решения для наших
              клиентов.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-blue-500" />
                <span>Москва, ул. Строителей, 25, офис 301</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-blue-500" />
                <a href="tel:+74951234567" className="hover:text-blue-500 transition-colors">
                  +7 (495) 123-45-67
                </a>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-blue-500" />
                <a href="mailto:info@stroyprofi.ru" className="hover:text-blue-500 transition-colors">
                  info@stroyprofi.ru
                </a>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Навигация</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Юридическая информация</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.href}
                    className="text-gray-400 hover:text-blue-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-4">
            <div className="text-gray-500 text-sm text-center lg:text-left">
              © 2026 СтройПрофи. Все права защищены.
              <br />
              СтройПрофи — работодатель, обеспечивающий равные возможности.
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-500 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
