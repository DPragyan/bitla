import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Code, Menu, X, ShoppingCart, User, LogOut } from 'lucide-react';
import { useStore } from '../lib/store';
import toast from 'react-hot-toast';

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, setUser, cart } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    setUser(null);
    toast.success('Logged out successfully');
    navigate('/');
  };

  const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2 group">
            <Code className={`h-8 w-8 ${isScrolled ? 'text-teal-600' : 'text-white'} group-hover:rotate-180 transition-all duration-500`} />
            <span className={`text-xl font-bold ${isScrolled ? 'text-gray-900' : 'text-white'}`}>
              Bitla Software
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={`hover:text-teal-600 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
              Home
            </Link>
            <Link to="/about" className={`hover:text-teal-600 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
              About
            </Link>
            <Link to="/services" className={`hover:text-teal-600 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
              Services
            </Link>
            <Link to="/pricing" className={`hover:text-teal-600 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
              Pricing
            </Link>
            <Link to="/support" className={`hover:text-teal-600 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
              Support
            </Link>
            <Link to="/contact" className={`hover:text-teal-600 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
              Contact
            </Link>

            <Link to="/cart" className="relative">
              <ShoppingCart className={`h-6 w-6 ${isScrolled ? 'text-gray-700' : 'text-white'} hover:text-teal-600 transition-colors`} />
              {cartItemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-teal-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItemCount}
                </span>
              )}
            </Link>

            {user ? (
              <div className="flex items-center space-x-4">
                <Link to="/account" className={`flex items-center space-x-2 hover:text-teal-600 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}>
                  <User className="h-5 w-5" />
                  <span>{user.name}</span>
                </Link>
                <button
                  onClick={handleLogout}
                  className={`flex items-center space-x-2 hover:text-red-600 transition-colors ${isScrolled ? 'text-gray-700' : 'text-white'}`}
                >
                  <LogOut className="h-5 w-5" />
                </button>
              </div>
            ) : (
              <Link
                to="/login"
                className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-full font-semibold transition-colors"
              >
                Get Started
              </Link>
            )}
          </div>

          <button
            className={`md:hidden ${isScrolled ? 'text-gray-900' : 'text-white'}`}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              <Link to="/" className="text-gray-700 hover:text-teal-600 transition-colors" onClick={() => setIsOpen(false)}>
                Home
              </Link>
              <Link to="/about" className="text-gray-700 hover:text-teal-600 transition-colors" onClick={() => setIsOpen(false)}>
                About
              </Link>
              <Link to="/services" className="text-gray-700 hover:text-teal-600 transition-colors" onClick={() => setIsOpen(false)}>
                Services
              </Link>
              <Link to="/pricing" className="text-gray-700 hover:text-teal-600 transition-colors" onClick={() => setIsOpen(false)}>
                Pricing
              </Link>
              <Link to="/support" className="text-gray-700 hover:text-teal-600 transition-colors" onClick={() => setIsOpen(false)}>
                Support
              </Link>
              <Link to="/contact" className="text-gray-700 hover:text-teal-600 transition-colors" onClick={() => setIsOpen(false)}>
                Contact
              </Link>
              <Link to="/cart" className="text-gray-700 hover:text-teal-600 transition-colors flex items-center" onClick={() => setIsOpen(false)}>
                <ShoppingCart className="h-5 w-5 mr-2" />
                Cart {cartItemCount > 0 && `(${cartItemCount})`}
              </Link>
              {user ? (
                <>
                  <Link to="/account" className="text-gray-700 hover:text-teal-600 transition-colors" onClick={() => setIsOpen(false)}>
                    My Account
                  </Link>
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsOpen(false);
                    }}
                    className="text-red-600 hover:text-red-700 transition-colors text-left"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/login"
                  className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-full font-semibold transition-colors text-center"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </Link>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
