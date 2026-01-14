import React from 'react';
import { motion } from 'framer-motion';
import { 
  Cloud, 
  Code, 
  Database, 
  Shield, 
  Server, 
  Globe,
  Smartphone,
  Settings,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { Link } from 'react-router-dom';

export function ServicesPage() {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Hosting Solutions',
      description: 'Reliable, scalable cloud hosting with enterprise-grade infrastructure.',
      features: [
        '99.9% Uptime Guarantee',
        'SSD Storage',
        'Auto Backups',
        'CDN Integration',
        'SSL Certificates',
        '24/7 Monitoring'
      ],
      pricing: 'Starting from ₹999/month'
    },
    {
      icon: Code,
      title: 'Custom Web Development',
      description: 'Tailored web applications built with modern technologies.',
      features: [
        'Responsive Design',
        'Modern Frameworks',
        'API Integration',
        'Database Design',
        'SEO Optimization',
        'Performance Optimization'
      ],
      pricing: 'Starting from ₹25,000'
    },
    {
      icon: Smartphone,
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications.',
      features: [
        'iOS & Android',
        'React Native',
        'Flutter Development',
        'App Store Deployment',
        'Push Notifications',
        'Offline Functionality'
      ],
      pricing: 'Starting from ₹50,000'
    },
    {
      icon: Database,
      title: 'Database Management',
      description: 'Professional database design, optimization, and management.',
      features: [
        'MySQL & PostgreSQL',
        'MongoDB',
        'Database Optimization',
        'Backup Solutions',
        'Migration Services',
        'Performance Tuning'
      ],
      pricing: 'Starting from ₹15,000'
    },
    {
      icon: Shield,
      title: 'Security Solutions',
      description: 'Comprehensive security measures for your digital assets.',
      features: [
        'Security Audits',
        'Penetration Testing',
        'DDoS Protection',
        'Firewall Configuration',
        'Malware Scanning',
        'Compliance Support'
      ],
      pricing: 'Starting from ₹20,000'
    },
    {
      icon: Settings,
      title: 'DevOps & Maintenance',
      description: 'Continuous integration, deployment, and system maintenance.',
      features: [
        'CI/CD Pipelines',
        'Server Management',
        'Monitoring & Alerts',
        'Performance Optimization',
        'Regular Updates',
        'Technical Support'
      ],
      pricing: 'Starting from ₹10,000/month'
    }
  ];

  const hostingPlans = [
    {
      name: 'Starter',
      price: '₹999',
      period: '/month',
      features: [
        '1 Website',
        '10 GB SSD Storage',
        '100 GB Bandwidth',
        'Free SSL Certificate',
        'Email Support',
        'Daily Backups'
      ],
      popular: false
    },
    {
      name: 'Professional',
      price: '₹2,499',
      period: '/month',
      features: [
        '5 Websites',
        '50 GB SSD Storage',
        '500 GB Bandwidth',
        'Free SSL Certificate',
        'Priority Support',
        'Daily Backups',
        'CDN Integration'
      ],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '₹4,999',
      period: '/month',
      features: [
        'Unlimited Websites',
        '200 GB SSD Storage',
        'Unlimited Bandwidth',
        'Free SSL Certificate',
        '24/7 Phone Support',
        'Hourly Backups',
        'CDN Integration',
        'DDoS Protection'
      ],
      popular: false
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
            <h1 className="text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-200">
              Comprehensive technology solutions designed to accelerate your business growth and digital transformation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow"
              >
                <service.icon className="h-12 w-12 text-purple-600 mb-6" />
                <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm">
                      <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <div className="border-t pt-6">
                  <p className="text-teal-600 font-semibold mb-4">{service.pricing}</p>
                  <Link
                    to="/contact"
                    className="w-full bg-teal-600 hover:bg-teal-700 text-white py-2 px-4 rounded-lg transition-colors flex items-center justify-center"
                  >
                    Get Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hosting Plans */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Cloud Hosting Plans</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose the perfect hosting plan for your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {hostingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-white rounded-xl p-8 shadow-lg ${
                  plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-teal-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <div className="flex items-baseline justify-center">
                    <span className="text-4xl font-bold text-teal-600">{plan.price}</span>
                    <span className="text-gray-500 ml-1">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`w-full py-3 px-6 rounded-lg font-semibold transition-colors flex items-center justify-center ${
                    plan.popular
                      ? 'bg-teal-600 hover:bg-teal-700 text-white'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                  }`}
                >
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-teal-600 to-cyan-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl font-bold mb-4">Need a Custom Solution?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Every business is unique. Let Bitla Software create a tailored solution that perfectly fits your requirements.
            </p>
            <Link
              to="/contact"
              className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-lg font-semibold transition-colors inline-flex items-center"
            >
              Discuss Your Project <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}