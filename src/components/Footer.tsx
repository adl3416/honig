import { Link } from 'react-router-dom';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-honey-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg">VH</span>
              </div>
              <span className="ml-3 text-xl font-bold">Velberter Honig</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Traditioneller deutscher Honig aus der Region Velbert. 
              Seit Generationen produzieren wir hochwertigen Honig nach 
              bewährten Methoden für höchste Qualität und Geschmack.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-honey-400 transition-colors duration-200"
                aria-label="Facebook"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-honey-400 transition-colors duration-200"
                aria-label="Instagram"
              >
                <Instagram className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-honey-400 mr-3" />
                <div>
                  <p className="text-sm text-gray-300">Musterstraße 123</p>
                  <p className="text-sm text-gray-300">42551 Velbert</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-honey-400 mr-3" />
                <p className="text-sm text-gray-300">+49 (0) 2051 123456</p>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-honey-400 mr-3" />
                <p className="text-sm text-gray-300">info@velberterhonig.de</p>
              </div>
            </div>
          </div>

          {/* Legal Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Rechtliches</h3>
            <div className="space-y-2">
              <Link
                to="/impressum"
                className="block text-sm text-gray-300 hover:text-honey-400 transition-colors duration-200"
              >
                Impressum
              </Link>
              <Link
                to="/datenschutz"
                className="block text-sm text-gray-300 hover:text-honey-400 transition-colors duration-200"
              >
                Datenschutz
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Velberter Honig. Alle Rechte vorbehalten.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
