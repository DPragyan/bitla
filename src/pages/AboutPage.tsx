import React from 'react';
import { motion } from 'framer-motion';
import { Code, Users, Award, Target, Heart, Zap } from 'lucide-react';

export function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Our Mission',
      description: 'To empower businesses with innovative technology solutions that drive growth and success in the digital age.'
    },
    {
      icon: Heart,
      title: 'Our Values',
      description: 'Integrity, innovation, and customer satisfaction are at the core of everything we do.'
    },
    {
      icon: Zap,
      title: 'Our Approach',
      description: 'We combine cutting-edge technology with industry best practices to deliver exceptional results.'
    }
  ];

  const team = [
    {
      name: 'Arjun Sarkar',
      role: 'CEO & Founder',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Akshay',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Rani Desai',
      role: 'Lead Developer',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    },
    {
      name: 'Kheera Desai',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80'
    }
  ];

  return (
    <div className="min-h-screen">
      <section className="py-20 bg-gradient-to-br from-teal-900 via-cyan-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <Code className="h-16 w-16 mx-auto mb-6 text-teal-400" />
            <h1 className="text-5xl font-bold mb-6">About Bitla Software</h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We are a leading provider of cloud hosting and custom software development services,
              dedicated to helping businesses thrive in the digital era. With over 5 years of experience,
              we've helped hundreds of clients transform their vision into reality.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-gray-50 to-teal-50 hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-4 text-gray-900">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-gray-50 to-purple-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Story</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founded in 2019, Bitla Software has grown from a small startup to a trusted
              technology partner for businesses worldwide.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-start space-x-6"
              >
                <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                  2019
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">The Beginning</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Started with a vision to provide reliable cloud hosting and custom software solutions
                    to businesses of all sizes.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-start space-x-6"
              >
                <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                  2021
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Rapid Growth</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Expanded our team and services, serving over 200 clients and achieving
                    99.99% uptime across all our hosting services.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="flex items-start space-x-6"
              >
                <div className="flex-shrink-0 w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-500 rounded-2xl flex items-center justify-center text-white text-2xl font-bold">
                  2024
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">Industry Leader</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Now serving 500+ clients globally with cutting-edge cloud solutions and
                    custom software development services.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our experienced team of professionals is dedicated to delivering exceptional results.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="text-center"
              >
                <div className="relative mb-6 group">
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden shadow-xl group-hover:shadow-2xl transition-shadow">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-teal-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-full" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <p className="text-teal-600 font-medium">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-br from-teal-900 via-cyan-900 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Users className="h-16 w-16 mx-auto mb-6 text-teal-400" />
            <h2 className="text-4xl font-bold mb-6">Join Our Growing Team</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We're always looking for talented individuals to join our team.
              If you're passionate about technology and innovation, we'd love to hear from you.
            </p>
            <a
              href="mailto:careers@bitla.software"
              className="inline-block bg-white text-teal-600 hover:bg-gray-100 px-8 py-4 rounded-full font-semibold transition-colors"
            >
              View Open Positions
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
