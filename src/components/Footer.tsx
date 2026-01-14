import { Code, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Code className="h-8 w-8 text-teal-400" />
              <span className="text-xl font-bold">Bitla Software</span>
            </div>
            <p className="text-gray-300 mb-4">
              Leading provider of cloud hosting solutions and custom software development services.
              Empowering businesses with cutting-edge technology solutions.
            </p>
            <div className="space-y-2 text-sm text-gray-400">
              <p><strong>GSTIN:</strong> 01AADCB2334A1ZR</p>
              <p><strong>Company:</strong> BITLA SOFTWARE PRIVATE LIMITED</p>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-gray-300 hover:text-teal-400">About Us</Link></li>
              <li><Link to="/services" className="text-gray-300 hover:text-teal-400">Services</Link></li>
              <li><Link to="/pricing" className="text-gray-300 hover:text-teal-400">Pricing</Link></li>
              <li><Link to="/support" className="text-gray-300 hover:text-teal-400">Support</Link></li>
              <li><Link to="/contact" className="text-gray-300 hover:text-teal-400">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-2">
                <MapPin className="h-5 w-5 text-teal-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  2nd Floor, 2 D/C, Back side of opposite park,<br />
                  gandhi nagar, Jammu,<br />
                  Jammu and Kashmir, 180004
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-teal-400" />
                <p className="text-gray-300">+91 8786564738</p>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-teal-400" />
                <p className="text-gray-300">admin@bitla.software</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 BITLA SOFTWARE PRIVATE LIMITED. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}