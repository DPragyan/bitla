import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle, 
  FileText,
  HelpCircle,
  Shield,
  Zap,
  Users
} from 'lucide-react';

export function SupportPage() {
  const supportOptions = [
    {
      icon: Phone,
      title: '24/7 Phone Support',
      description: 'Speak directly with our technical experts',
      contact: '+91 8786564738',
      availability: 'Available 24/7'
    },
    {
      icon: Mail,
      title: 'Email Support',
      description: 'Get detailed assistance via email',
      contact: 'admin@bitla.software',
      availability: 'Response within 2 hours'
    },
    {
      icon: MessageCircle,
      title: 'Live Chat',
      description: 'Instant help through our live chat system',
      contact: 'Available on website',
      availability: 'Mon-Fri 9 AM - 6 PM'
    }
  ];

  const faqItems = [
    {
      question: 'What is your uptime guarantee?',
      answer: 'We provide a 99.9% uptime guarantee for all our hosting services. In case of any downtime beyond this threshold, we offer service credits as compensation.'
    },
    {
      question: 'Do you provide free SSL certificates?',
      answer: 'Yes, all our hosting plans include free SSL certificates to ensure your website is secure and trusted by visitors.'
    },
    {
      question: 'Can I upgrade my hosting plan anytime?',
      answer: 'Absolutely! You can upgrade your hosting plan at any time through your control panel or by contacting our support team.'
    },
    {
      question: 'Do you offer website migration services?',
      answer: 'Yes, we provide free website migration services for new customers. Our technical team will handle the entire migration process.'
    },
    {
      question: 'What programming languages do you support for custom development?',
      answer: 'We work with various technologies including PHP, Python, Node.js, React, Angular, Vue.js, and many more based on your project requirements.'
    },
    {
      question: 'Do you provide ongoing maintenance and support?',
      answer: 'Yes, we offer comprehensive maintenance packages that include regular updates, security patches, backups, and technical support.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-900 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-5xl font-bold mb-6">Support & Help</h1>
            <p className="text-xl text-gray-200">
              We're here to help you succeed. Get the support you need, when you need it.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <p className="text-xl text-gray-600">
              BITLA SOFTWARE PRIVATE LIMITED
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-teal-50 p-6 rounded-xl text-center"
            >
              <MapPin className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Address</h3>
              <p className="text-gray-600 text-sm">
                2nd Floor, 2 D/C, Back side of opposite park,<br />
                gandhi nagar, Jammu,<br />
                Jammu and Kashmir, 180004
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-teal-50 p-6 rounded-xl text-center"
            >
              <Phone className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Phone</h3>
              <p className="text-gray-600">+91 8786564738</p>
              <p className="text-sm text-gray-500 mt-1">Available 24/7</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-teal-50 p-6 rounded-xl text-center"
            >
              <Mail className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-600">admin@bitla.software</p>
              <p className="text-sm text-gray-500 mt-1">Response within 2 hours</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-teal-50 p-6 rounded-xl text-center"
            >
              <FileText className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">GSTIN</h3>
              <p className="text-gray-600">01AADCB2334A1ZR</p>
              <p className="text-sm text-gray-500 mt-1">Registered Company</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Get Support</h2>
            <p className="text-xl text-gray-600">
              Multiple ways to reach our expert support team
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {supportOptions.map((option, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg text-center"
              >
                <option.icon className="h-16 w-16 text-teal-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold mb-3">{option.title}</h3>
                <p className="text-gray-600 mb-4">{option.description}</p>
                <p className="font-semibold text-teal-600 mb-2">{option.contact}</p>
                <p className="text-sm text-gray-500">{option.availability}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Support?</h2>
            <p className="text-xl text-gray-600">
              Experience the difference with our premium support services
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center"
            >
              <Clock className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">24/7 Availability</h3>
              <p className="text-gray-600">Round-the-clock support whenever you need assistance.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-center"
            >
              <Users className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Expert Team</h3>
              <p className="text-gray-600">Experienced professionals with deep technical knowledge.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center"
            >
              <Zap className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Quick Response</h3>
              <p className="text-gray-600">Fast response times to minimize your downtime.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-center"
            >
              <Shield className="h-12 w-12 text-teal-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Proactive Monitoring</h3>
              <p className="text-gray-600">We monitor your services to prevent issues before they occur.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600">
              Find answers to common questions about our services
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-6">
            {faqItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-lg"
              >
                <div className="flex items-start space-x-4">
                  <HelpCircle className="h-6 w-6 text-teal-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-semibold mb-2">{item.question}</h3>
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Emergency Support */}
      <section className="py-20 bg-red-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-red-900 mb-4">Emergency Support</h2>
            <p className="text-lg text-red-700 mb-6">
              Experiencing a critical issue? Our emergency support team is available 24/7.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+918786564738"
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Emergency Line
              </a>
              <a
                href="mailto:emergency@bitla.software"
                className="border-2 border-red-600 hover:bg-red-600 hover:text-white text-red-600 px-8 py-4 rounded-lg font-semibold transition-colors flex items-center justify-center"
              >
                <Mail className="mr-2 h-5 w-5" />
                Emergency Email
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}