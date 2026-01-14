import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, useAnimation } from 'framer-motion';
import { 
  Cloud, 
  Code, 
  Shield, 
  Zap, 
  Users, 
  Award,
  ArrowRight,
  Server,
  Database,
  Globe,
  Sparkles,
  Cpu,
  HardDrive,
  Wifi,
  Lock,
  Rocket,
  Star,
  ChevronDown
} from 'lucide-react';

// Advanced Bubble Animation System
const AdvancedBubbleSystem = () => {
  const [bubbles, setBubbles] = useState([]);

  useEffect(() => {
    const createBubble = () => ({
      id: Math.random(),
      x: Math.random() * 100,
      size: Math.random() * 80 + 20,
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 5,
      color: [
        'from-purple-400/30 to-blue-400/30',
        'from-blue-400/30 to-indigo-400/30',
        'from-indigo-400/30 to-purple-400/30',
        'from-teal-400/30 to-cyan-400/30',
        'from-cyan-400/30 to-blue-400/30',
        'from-blue-400/30 to-teal-400/30',
        'from-cyan-400/30 to-blue-400/30',
        'from-pink-400/30 to-purple-400/30',
        'from-emerald-400/30 to-cyan-400/30'
      ][Math.floor(Math.random() * 9)],
      glowColor: [
        'rgba(147, 51, 234, 0.3)',
        'rgba(59, 130, 246, 0.3)',
        'rgba(20, 184, 166, 0.3)',
        'rgba(6, 182, 212, 0.3)',
        'rgba(99, 102, 241, 0.3)',
        'rgba(6, 182, 212, 0.3)',
        'rgba(236, 72, 153, 0.3)',
        'rgba(16, 185, 129, 0.3)'
      ][Math.floor(Math.random() * 8)]
    });

    const initialBubbles = Array.from({ length: 25 }, createBubble);
    setBubbles(initialBubbles);

    const interval = setInterval(() => {
      setBubbles(prev => {
        const newBubbles = [...prev];
        if (newBubbles.length < 30) {
          newBubbles.push(createBubble());
        }
        return newBubbles;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {bubbles.map((bubble) => (
        <motion.div
          key={bubble.id}
          className={`absolute rounded-full bg-gradient-to-br ${bubble.color} backdrop-blur-sm border border-white/20`}
          style={{
            width: bubble.size,
            height: bubble.size,
            left: `${bubble.x}%`,
            top: '100%',
            filter: `drop-shadow(0 0 20px ${bubble.glowColor})`,
          }}
          animate={{
            y: [0, -window.innerHeight - 200],
            x: [0, Math.sin(bubble.id) * 100],
            scale: [0.8, 1.2, 0.8],
            opacity: [0, 0.8, 0],
            rotate: [0, 360],
          }}
          transition={{
            duration: bubble.duration,
            delay: bubble.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
      
      {/* Floating Tech Elements */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={`tech-${i}`}
          className="absolute text-purple-300/40 font-mono text-lg font-bold"
          style={{
            left: `${Math.random() * 90}%`,
            top: '100%',
          }}
          animate={{
            y: [0, -window.innerHeight - 100],
            x: [0, Math.sin(i) * 50],
            opacity: [0, 0.6, 0],
            rotate: [0, 360],
            scale: [0.5, 1, 0.5],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            delay: Math.random() * 8,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {['</>', '{}', '[]', '()', '&&', '||', '=>', '++', 'API', 'SQL', 'JS', 'CSS', 'HTML', 'PHP', 'NODE'][i]}
        </motion.div>
      ))}
    </div>
  );
};

// Glowing Particle System
const ParticleSystem = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-white rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            scale: [0, 1, 0],
            opacity: [0, 1, 0],
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            delay: Math.random() * 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Animated Counter Component
const AnimatedCounter = ({ end, duration = 2 }) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 }
    });

    let startTime;
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };
    requestAnimationFrame(animate);
  }, [end, duration, controls]);

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.5 }}
      animate={controls}
      className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
    >
      {count}
    </motion.span>
  );
};

export function HomePage() {
  const services = [
    {
      icon: Cloud,
      title: 'Cloud Infrastructure',
      description: 'Enterprise-grade cloud hosting with 99.99% uptime guarantee and global CDN.',
      features: ['Auto-scaling', 'Load Balancing', 'DDoS Protection'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Code,
      title: 'Custom Development',
      description: 'Full-stack web applications built with cutting-edge technologies.',
      features: ['React/Node.js', 'API Integration', 'Mobile Responsive'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Database,
      title: 'Database Solutions',
      description: 'Optimized database architecture and management for peak performance.',
      features: ['MySQL/PostgreSQL', 'MongoDB', 'Redis Caching'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Shield,
      title: 'Security & Compliance',
      description: 'Advanced security measures and compliance solutions for your business.',
      features: ['SSL/TLS', 'Penetration Testing', 'GDPR Compliance'],
      color: 'from-red-500 to-orange-500'
    }
  ];

  const stats = [
    { number: 500, label: 'Happy Clients', suffix: '+' },
    { number: 99, label: 'Uptime', suffix: '.99%' },
    { number: 24, label: 'Support', suffix: '/7' },
    { number: 5, label: 'Years Experience', suffix: '+' }
  ];

  const technologies = [
    { name: 'React', icon: '⚛️' },
    { name: 'Node.js', icon: '🟢' },
    { name: 'Python', icon: '🐍' },
    { name: 'Docker', icon: '🐳' },
    { name: 'AWS', icon: '☁️' },
    { name: 'MongoDB', icon: '🍃' },
    { name: 'PostgreSQL', icon: '🐘' },
    { name: 'Redis', icon: '🔴' }
  ];

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Hero Section with Advanced Animations */}
      <section className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
        <AdvancedBubbleSystem />
        <ParticleSystem />
        
        {/* Animated Background Grid */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(147, 51, 234, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(147, 51, 234, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }} />
        </div>

        {/* Glowing Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-40 right-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="container mx-auto px-4 relative z-10 flex items-center min-h-screen">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <motion.h1 
                className="text-6xl md:text-8xl font-bold mb-8 leading-tight"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(20, 184, 166, 0.5)",
                    "0 0 40px rgba(6, 182, 212, 0.8)",
                    "0 0 60px rgba(20, 184, 166, 0.5)",
                    "0 0 40px rgba(6, 182, 212, 0.8)",
                    "0 0 20px rgba(20, 184, 166, 0.5)"
                  ]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <span className="block">Transforming</span>
                <span className="block bg-gradient-to-r from-teal-400 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Digital Dreams
                </span>
                <span className="block text-5xl md:text-6xl">Into Reality</span>
              </motion.h1>
            </motion.div>

            <motion.p
              className="text-xl md:text-2xl mb-12 text-gray-300 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              Bitla Software delivers cutting-edge cloud hosting and custom software solutions
              that propel your business into the future. Experience the power of innovation.
            </motion.p>

            <motion.div 
              className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(20, 184, 166, 0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/services"
                  className="group bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center shadow-2xl"
                >
                  <Rocket className="mr-2 h-5 w-5" />
                  Explore Solutions
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </motion.div>
                </Link>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to="/contact"
                  className="border-2 border-white/30 hover:border-white hover:bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold transition-all flex items-center justify-center"
                >
                  <Sparkles className="mr-2 h-5 w-5" />
                  Start Your Project
                </Link>
              </motion.div>
            </motion.div>

            {/* Floating Technology Icons */}
            <motion.div 
              className="flex flex-wrap justify-center gap-4 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.9 }}
            >
              {technologies.map((tech, index) => (
                <motion.div
                  key={tech.name}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 flex items-center space-x-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: "rgba(255, 255, 255, 0.2)",
                    boxShadow: "0 10px 20px rgba(20, 184, 166, 0.3)"
                  }}
                >
                  <span className="text-2xl">{tech.icon}</span>
                  <span className="text-sm font-medium">{tech.name}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ChevronDown className="h-8 w-8 text-white/60" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section with Advanced Animations */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-32 h-32 rounded-full bg-gradient-to-br from-purple-100 to-blue-100 opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.1, 0.3, 0.1],
                rotate: [0, 180, 360],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                delay: Math.random() * 2,
                repeat: Infinity,
              }}
            />
          ))}
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                whileHover={{ scale: 1.05 }}
                className="text-center p-6 rounded-2xl bg-gradient-to-br from-white to-purple-50 shadow-lg hover:shadow-xl transition-all"
              >
                <div className="mb-4">
                  <AnimatedCounter end={stat.number} />
                  <span className="text-4xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">
                    {stat.suffix}
                  </span>
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section with 3D Cards */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Our <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Cutting-edge solutions powered by the latest technologies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  y: -10,
                  rotateY: 5,
                  boxShadow: "0 25px 50px rgba(0,0,0,0.15)"
                }}
                className="group bg-white rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 relative overflow-hidden"
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-3xl`} />
                
                {/* Icon with Animation */}
                <motion.div
                  className="relative z-10 mb-6"
                  animate={{ 
                    rotate: [0, 360],
                  }}
                  transition={{ 
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  whileHover={{ scale: 1.2 }}
                >
                  <div className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center shadow-lg`}>
                    <service.icon className="h-8 w-8 text-white" />
                  </div>
                </motion.div>
                
                <h3 className="text-2xl font-bold mb-4 text-gray-900 group-hover:text-teal-600 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <motion.li 
                      key={idx} 
                      className="flex items-center text-sm text-gray-500"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <motion.div 
                        className={`w-2 h-2 bg-gradient-to-r ${service.color} rounded-full mr-3`}
                        animate={{ scale: [1, 1.2, 1] }}
                        transition={{ duration: 2, repeat: Infinity, delay: idx * 0.2 }}
                      />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                <motion.button
                  className="w-full py-3 px-6 bg-gradient-to-r from-gray-100 to-gray-200 hover:from-teal-500 hover:to-cyan-500 text-gray-700 hover:text-white rounded-xl font-semibold transition-all duration-300 group-hover:shadow-lg"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Learn More
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us with Interactive Elements */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-5xl font-bold text-gray-900 mb-8">
                Why Choose
                <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent"> Bitla?</span>
              </h2>
              
              <div className="space-y-8">
                {[
                  { icon: Zap, title: "Lightning Performance", desc: "Optimized infrastructure for maximum speed" },
                  { icon: Shield, title: "Enterprise Security", desc: "Advanced protection for your valuable data" },
                  { icon: Users, title: "Expert Support", desc: "24/7 technical assistance from professionals" },
                  { icon: Award, title: "Proven Excellence", desc: "5+ years of delivering exceptional results" }
                ].map((item, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-start space-x-6 p-6 rounded-2xl hover:bg-gradient-to-r hover:from-teal-50 hover:to-cyan-50 transition-all duration-300 group cursor-pointer"
                    whileHover={{ x: 10, scale: 1.02 }}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                  >
                    <motion.div
                      className="flex-shrink-0"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                      whileHover={{ scale: 1.2 }}
                    >
                      <div className="w-14 h-14 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow">
                        <item.icon className="h-7 w-7 text-white" />
                      </div>
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-teal-600 transition-colors">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <motion.div
                className="relative z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                  alt="Team collaboration"
                  className="rounded-3xl shadow-2xl"
                />
              </motion.div>
              
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-teal-400 to-cyan-400 rounded-full opacity-20"
                animate={{
                  scale: [1, 1.3, 1],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                }}
              />
              <motion.div
                className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full opacity-20"
                animate={{
                  scale: [1.3, 1, 1.3],
                  rotate: [360, 0],
                }}
                transition={{
                  duration: 10,
                  repeat: Infinity,
                }}
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section with Particle Effects */}
      <section className="py-20 bg-gradient-to-br from-teal-900 via-cyan-900 to-blue-900 text-white relative overflow-hidden">
        <ParticleSystem />
        
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2 
              className="text-5xl font-bold mb-6"
              animate={{
                textShadow: [
                  "0 0 20px rgba(255,255,255,0.5)",
                  "0 0 40px rgba(255,255,255,0.8)",
                  "0 0 20px rgba(255,255,255,0.5)"
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              Ready to Transform Your Business?
            </motion.h2>
            <p className="text-xl mb-10 max-w-3xl mx-auto text-gray-300 leading-relaxed">
              Join hundreds of satisfied clients who trust Bitla Software for their digital transformation journey.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                to="/contact"
                className="inline-flex items-center bg-gradient-to-r from-white to-gray-100 text-teal-600 hover:text-teal-700 px-10 py-4 rounded-full font-bold text-lg transition-all shadow-2xl hover:shadow-3xl group"
              >
                <Star className="mr-3 h-6 w-6" />
                Start Your Project Today
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <ArrowRight className="ml-3 h-6 w-6" />
                </motion.div>
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}