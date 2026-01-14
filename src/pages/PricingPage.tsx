import React from 'react';
import { motion } from 'framer-motion';
import { 
  Server, 
  Monitor, 
  Cpu, 
  HardDrive, 
  Zap, 
  Shield, 
  CheckCircle,
  ShoppingCart,
  Star,
  Wifi,
  Database,
  Globe
} from 'lucide-react';
import { useStore } from '../lib/store';
import toast from 'react-hot-toast';

export function PricingPage() {
  const { addToCart, user } = useStore();

  const handleAddToCart = (productId: string, productName: string) => {
    if (!user) {
      toast.error('Please login to add items to cart');
      return;
    }
    addToCart(productId);
    toast.success(`${productName} added to cart!`);
  };

  const vpsPlans = [
    {
      id: 'vps-starter',
      name: 'VPS Starter',
      os: 'Ubuntu 22.04 LTS',
      icon: Server,
      price: 50,
      popular: false,
      specs: {
        cpu: 1,
        ram: 2,
        storage: 50,
        bandwidth: '1TB',
        ip: '1 IPv4'
      },
      features: [
        'Ubuntu 22.04 LTS',
        'Full Root Access',
        'SSD Storage',
        '99.9% Uptime',
        'DDoS Protection',
        '24/7 Support'
      ]
    },
    {
      id: 'vps-professional',
      name: 'VPS Professional',
      os: 'Ubuntu 24.04 LTS',
      icon: Server,
      price: 150,
      popular: true,
      specs: {
        cpu: 4,
        ram: 8,
        storage: 200,
        bandwidth: '5TB',
        ip: '1 IPv4'
      },
      features: [
        'Ubuntu 24.04 LTS',
        'Full Root Access',
        'NVMe SSD Storage',
        '99.99% Uptime',
        'Advanced DDoS Protection',
        'Priority Support',
        'Free Backups'
      ]
    },
    {
      id: 'vps-enterprise',
      name: 'VPS Enterprise',
      os: 'Ubuntu 24.04 LTS',
      icon: Server,
      price: 400,
      popular: false,
      specs: {
        cpu: 8,
        ram: 32,
        storage: 500,
        bandwidth: '10TB',
        ip: '2 IPv4'
      },
      features: [
        'Ubuntu 24.04 LTS',
        'Full Root Access',
        'NVMe SSD Storage',
        '99.99% Uptime',
        'Enterprise DDoS Protection',
        'Dedicated Support',
        'Hourly Backups',
        'Load Balancer Ready'
      ]
    }
  ];

  const windowsPlans = [
    {
      id: 'windows-basic',
      name: 'Windows Basic',
      os: 'Windows Server 2019',
      icon: Monitor,
      price: 80,
      popular: false,
      specs: {
        cpu: 2,
        ram: 4,
        storage: 100,
        bandwidth: '2TB',
        ip: '1 IPv4'
      },
      features: [
        'Windows Server 2019',
        'Remote Desktop Access',
        'SSD Storage',
        '99.9% Uptime',
        'DDoS Protection',
        '24/7 Support',
        'Windows Updates'
      ]
    },
    {
      id: 'windows-pro',
      name: 'Windows Pro',
      os: 'Windows Server 2022',
      icon: Monitor,
      price: 200,
      popular: true,
      specs: {
        cpu: 6,
        ram: 16,
        storage: 300,
        bandwidth: '7TB',
        ip: '1 IPv4'
      },
      features: [
        'Windows Server 2022',
        'Remote Desktop Access',
        'NVMe SSD Storage',
        '99.99% Uptime',
        'Advanced DDoS Protection',
        'Priority Support',
        'Automated Backups',
        'IIS Web Server'
      ]
    },
    {
      id: 'windows-enterprise',
      name: 'Windows Enterprise',
      os: 'Windows Server 2022',
      icon: Monitor,
      price: 600,
      popular: false,
      specs: {
        cpu: 12,
        ram: 64,
        storage: 1000,
        bandwidth: '15TB',
        ip: '3 IPv4'
      },
      features: [
        'Windows Server 2022',
        'Remote Desktop Access',
        'NVMe SSD Storage',
        '99.99% Uptime',
        'Enterprise DDoS Protection',
        'Dedicated Support',
        'Real-time Backups',
        'Active Directory',
        'SQL Server Ready'
      ]
    }
  ];

  const dedicatedPlans = [
    {
      id: 'dedicated-performance',
      name: 'Dedicated Performance',
      os: 'Choice of OS',
      icon: Database,
      price: 800,
      popular: false,
      specs: {
        cpu: 16,
        ram: 64,
        storage: 2000,
        bandwidth: '20TB',
        ip: '5 IPv4'
      },
      features: [
        'Intel Xeon Processors',
        'Choice of OS',
        'Hardware RAID',
        '100% Uptime SLA',
        'Enterprise DDoS Protection',
        'Dedicated Support Manager',
        'Hardware Replacement',
        'Custom Configurations'
      ]
    },
    {
      id: 'dedicated-enterprise',
      name: 'Dedicated Enterprise',
      os: 'Choice of OS',
      icon: Database,
      price: 1500,
      popular: true,
      specs: {
        cpu: 32,
        ram: 128,
        storage: 4000,
        bandwidth: 'Unlimited',
        ip: '10 IPv4'
      },
      features: [
        'Latest Intel Xeon Processors',
        'Choice of OS',
        'Hardware RAID 10',
        '100% Uptime SLA',
        'Premium DDoS Protection',
        '24/7 Dedicated Support',
        'Instant Hardware Replacement',
        'Custom Configurations',
        'Private Network'
      ]
    },
    {
      id: 'dedicated-ultimate',
      name: 'Dedicated Ultimate',
      os: 'Choice of OS',
      icon: Database,
      price: 3000,
      popular: false,
      specs: {
        cpu: 64,
        ram: 256,
        storage: 8000,
        bandwidth: 'Unlimited',
        ip: '20 IPv4'
      },
      features: [
        'Dual Intel Xeon Processors',
        'Choice of OS',
        'NVMe RAID 10',
        '100% Uptime SLA',
        'Ultimate DDoS Protection',
        'White-glove Support',
        'Instant Hardware Replacement',
        'Fully Customizable',
        'Private Network',
        'Compliance Ready'
      ]
    }
  ];

  const cloudPlans = [
    {
      id: 'cloud-startup',
      name: 'Cloud Startup',
      os: 'Multi-OS Support',
      icon: Globe,
      price: 300,
      popular: false,
      specs: {
        cpu: 8,
        ram: 16,
        storage: 500,
        bandwidth: '10TB',
        ip: 'Load Balanced'
      },
      features: [
        'Auto-scaling Infrastructure',
        'Multi-OS Support',
        'Container Ready',
        '99.99% Uptime',
        'Global CDN',
        'API Management',
        'Monitoring Dashboard',
        'DevOps Tools'
      ]
    },
    {
      id: 'cloud-business',
      name: 'Cloud Business',
      os: 'Multi-OS Support',
      icon: Globe,
      price: 800,
      popular: true,
      specs: {
        cpu: 16,
        ram: 64,
        storage: 2000,
        bandwidth: '50TB',
        ip: 'Load Balanced'
      },
      features: [
        'Auto-scaling Infrastructure',
        'Multi-OS Support',
        'Kubernetes Ready',
        '99.99% Uptime',
        'Global CDN',
        'Advanced API Management',
        'Real-time Monitoring',
        'CI/CD Pipeline',
        'Database as a Service'
      ]
    },
    {
      id: 'cloud-enterprise',
      name: 'Cloud Enterprise',
      os: 'Multi-OS Support',
      icon: Globe,
      price: 2000,
      popular: false,
      specs: {
        cpu: 32,
        ram: 128,
        storage: 5000,
        bandwidth: 'Unlimited',
        ip: 'Load Balanced'
      },
      features: [
        'Auto-scaling Infrastructure',
        'Multi-OS Support',
        'Enterprise Kubernetes',
        '100% Uptime SLA',
        'Global Multi-CDN',
        'Enterprise API Gateway',
        'Advanced Analytics',
        'Custom CI/CD Pipeline',
        'Managed Databases',
        'Compliance Suite'
      ]
    }
  ];

  const customPlans = [
    {
      id: 'custom-development',
      name: 'Custom Development',
      os: 'Project Based',
      icon: Cpu,
      price: 5000,
      popular: false,
      specs: {
        cpu: 'Custom',
        ram: 'Custom',
        storage: 'Custom',
        bandwidth: 'Custom',
        ip: 'Custom'
      },
      features: [
        'Custom Software Development',
        'Full-stack Solutions',
        'Mobile App Development',
        'API Development',
        'Database Design',
        'DevOps Setup',
        'Ongoing Maintenance',
        'Technical Consulting'
      ]
    },
    {
      id: 'enterprise-solution',
      name: 'Enterprise Solution',
      os: 'Fully Managed',
      icon: Cpu,
      price: 10000,
      popular: true,
      specs: {
        cpu: 'Unlimited',
        ram: 'Unlimited',
        storage: 'Unlimited',
        bandwidth: 'Unlimited',
        ip: 'Custom Network'
      },
      features: [
        'Complete Infrastructure Management',
        'Custom Software Solutions',
        'Dedicated Development Team',
        '24/7 White-glove Support',
        'Compliance & Security',
        'Disaster Recovery',
        'Performance Optimization',
        'Strategic Consulting',
        'Training & Documentation'
      ]
    }
  ];

  const PlanCard = ({ plan, category }: { plan: any, category: string }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`relative bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 ${
        plan.popular ? 'ring-2 ring-purple-500 scale-105' : ''
      }`}
    >
      {plan.popular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
            <Star className="h-4 w-4 mr-1" />
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center mb-8">
        <plan.icon className="h-16 w-16 text-teal-600 mx-auto mb-4" />
        <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
        <p className="text-gray-600 mb-4">{plan.os}</p>
        <div className="flex items-baseline justify-center mb-6">
          <span className="text-5xl font-bold text-teal-600">${plan.price}</span>
          <span className="text-gray-500 ml-2">/month</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-8 p-4 bg-gray-50 rounded-xl">
        <div className="text-center">
          <Cpu className="h-6 w-6 text-teal-600 mx-auto mb-1" />
          <p className="text-sm font-semibold">{plan.specs.cpu} CPU</p>
        </div>
        <div className="text-center">
          <Zap className="h-6 w-6 text-teal-600 mx-auto mb-1" />
          <p className="text-sm font-semibold">{plan.specs.ram} GB RAM</p>
        </div>
        <div className="text-center">
          <HardDrive className="h-6 w-6 text-teal-600 mx-auto mb-1" />
          <p className="text-sm font-semibold">{plan.specs.storage} GB</p>
        </div>
        <div className="text-center">
          <Wifi className="h-6 w-6 text-teal-600 mx-auto mb-1" />
          <p className="text-sm font-semibold">{plan.specs.bandwidth}</p>
        </div>
      </div>

      <ul className="space-y-3 mb-8">
        {plan.features.map((feature: string, idx: number) => (
          <li key={idx} className="flex items-center text-sm">
            <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
            {feature}
          </li>
        ))}
      </ul>

      <button
        onClick={() => handleAddToCart(plan.id, plan.name)}
        className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center ${
          plan.popular
            ? 'bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white shadow-lg'
            : 'bg-gray-100 hover:bg-teal-50 text-gray-900 hover:text-teal-600 border-2 border-transparent hover:border-teal-200'
        }`}
      >
        <ShoppingCart className="h-5 w-5 mr-2" />
        Add to Cart
      </button>
    </motion.div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-purple-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-teal-900 via-cyan-900 to-blue-900 text-white py-20 overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-teal-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/2 w-72 h-72 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-6xl font-bold mb-6">
              Enterprise-Grade
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-cyan-400"> Hosting Solutions</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              From VPS to dedicated servers, find the perfect hosting solution for your business needs.
              Starting at just $50/month with enterprise features.
            </p>
            <div className="flex items-center justify-center space-x-8 text-sm">
              <div className="flex items-center">
                <Shield className="h-5 w-5 mr-2 text-green-400" />
                99.99% Uptime SLA
              </div>
              <div className="flex items-center">
                <Zap className="h-5 w-5 mr-2 text-yellow-400" />
                NVMe SSD Storage
              </div>
              <div className="flex items-center">
                <Globe className="h-5 w-5 mr-2 text-blue-400" />
                Global Network
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VPS Linux Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Linux VPS Hosting</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              High-performance Linux VPS with Ubuntu 22.04 and 24.04 LTS. Perfect for developers and businesses.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {vpsPlans.map((plan) => (
              <PlanCard key={plan.id} plan={plan} category="vps" />
            ))}
          </div>
        </div>
      </section>

      {/* Windows VPS Plans */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Windows VPS Hosting</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Reliable Windows Server hosting with Remote Desktop access. Windows Server 2019 to 2022 available.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {windowsPlans.map((plan) => (
              <PlanCard key={plan.id} plan={plan} category="windows" />
            ))}
          </div>
        </div>
      </section>

      {/* Dedicated Servers */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Dedicated Servers</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Bare metal servers with full hardware control. Enterprise-grade performance and reliability.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {dedicatedPlans.map((plan) => (
              <PlanCard key={plan.id} plan={plan} category="dedicated" />
            ))}
          </div>
        </div>
      </section>

      {/* Cloud Solutions */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Cloud Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Scalable cloud infrastructure with auto-scaling, load balancing, and enterprise features.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {cloudPlans.map((plan) => (
              <PlanCard key={plan.id} plan={plan} category="cloud" />
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="py-20 bg-gradient-to-br from-teal-900 to-cyan-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Custom Solutions</h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Tailored solutions for enterprise clients. From custom development to fully managed infrastructure.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {customPlans.map((plan) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className={`relative bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20 hover:bg-white/20 transition-all duration-300 ${
                  plan.popular ? 'ring-2 ring-purple-400 scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-teal-400 to-cyan-400 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      Recommended
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <plan.icon className="h-16 w-16 text-teal-400 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-gray-300 mb-4">{plan.os}</p>
                  <div className="flex items-baseline justify-center mb-6">
                    <span className="text-5xl font-bold text-teal-400">${plan.price}</span>
                    <span className="text-gray-300 ml-2">/month</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-center text-sm text-gray-200">
                      <CheckCircle className="h-5 w-5 text-green-400 mr-3 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>

                <button
                  onClick={() => handleAddToCart(plan.id, plan.name)}
                  className="w-full py-4 px-6 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center bg-gradient-to-r from-teal-500 to-cyan-500 hover:from-teal-600 hover:to-cyan-600 text-white shadow-lg"
                >
                  <ShoppingCart className="h-5 w-5 mr-2" />
                  Get Started
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Bitla Software?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Enterprise-grade features included with every plan
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Shield,
                title: 'DDoS Protection',
                description: 'Advanced protection against all types of attacks'
              },
              {
                icon: Zap,
                title: 'NVMe SSD Storage',
                description: 'Lightning-fast storage for optimal performance'
              },
              {
                icon: Globe,
                title: 'Global Network',
                description: 'Worldwide presence for low latency'
              },
              {
                icon: Database,
                title: '24/7 Monitoring',
                description: 'Proactive monitoring and instant alerts'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center p-6 rounded-xl hover:bg-teal-50 transition-colors"
              >
                <feature.icon className="h-12 w-12 text-teal-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}