import React from 'react';
import { motion } from 'framer-motion';
import { User, Mail, Calendar, Shield, LogOut, Settings } from 'lucide-react';
import { useStore } from '../lib/store';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

export function AccountPage() {
  const { user, setUser } = useStore();
  const navigate = useNavigate();

  if (!user) {
    navigate('/login');
    return null;
  }

  const handleLogout = () => {
    setUser(null);
    toast.success('Logged out successfully');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl font-bold text-gray-900 mb-8">My Account</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Profile Card */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg p-8">
                <div className="flex items-center space-x-6 mb-8">
                  <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center">
                    <User className="h-10 w-10 text-teal-600" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900">{user.name}</h2>
                    <p className="text-gray-600">{user.email}</p>
                    <p className="text-sm text-gray-500 mt-1">
                      Member since {new Date(user.memberSince).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Mail className="h-5 w-5 text-teal-600" />
                      <div>
                        <p className="font-medium">Email</p>
                        <p className="text-gray-600">{user.email}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="h-5 w-5 text-teal-600" />
                      <div>
                        <p className="font-medium">Member Since</p>
                        <p className="text-gray-600">
                          {new Date(user.memberSince).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <Shield className="h-5 w-5 text-teal-600" />
                      <div>
                        <p className="font-medium">Account Type</p>
                        <p className="text-gray-600">{user.isAdmin ? 'Administrator' : 'Standard User'}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Settings className="h-5 w-5 text-teal-600" />
                      <div>
                        <p className="font-medium">Status</p>
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Active
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Actions Sidebar */}
            <div className="space-y-6">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold mb-4">Account Actions</h3>
                <div className="space-y-3">
                  <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-3">
                    <Settings className="h-5 w-5 text-gray-600" />
                    <span>Account Settings</span>
                  </button>
                  <button className="w-full text-left px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors flex items-center space-x-3">
                    <Shield className="h-5 w-5 text-gray-600" />
                    <span>Security Settings</span>
                  </button>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-3 rounded-lg hover:bg-red-50 transition-colors flex items-center space-x-3 text-red-600"
                  >
                    <LogOut className="h-5 w-5" />
                    <span>Sign Out</span>
                  </button>
                </div>
              </div>

              <div className="bg-teal-50 rounded-xl p-6">
                <h3 className="text-lg font-semibold text-teal-900 mb-2">Need Help?</h3>
                <p className="text-teal-800 text-sm mb-4">
                  Our support team is here to assist you with any questions or issues.
                </p>
                <button className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-lg transition-colors">
                  Contact Support
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}