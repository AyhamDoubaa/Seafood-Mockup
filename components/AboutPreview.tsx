'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Award, Clock, Users } from 'lucide-react'

const highlights = [
  {
    icon: Award,
    title: 'Award Winning',
    description: 'Recognized for culinary excellence',
  },
  {
    icon: Users,
    title: 'Expert Team',
    description: 'Skilled chefs with global experience',
  },
  {
    icon: Clock,
    title: 'Fresh Daily',
    description: 'Sourced from local fisheries each morning',
  },
]

export default function AboutPreview() {
  return (
    <section className="section-padding bg-white relative overflow-hidden">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-ocean-950/20">
              <Image
                src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2574&auto=format&fit=crop"
                alt="Restaurant interior"
                fill
                className="object-cover"
              />
            </div>
            
            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-8 -right-8 md:right-8 w-48 md:w-64 p-6 bg-white rounded-2xl 
                       shadow-xl shadow-ocean-950/10 border border-sand-200"
            >
              <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=400&auto=format&fit=crop"
                  alt="Chef at work"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-sm text-ocean-700 font-medium">
                "Every dish tells a story of the sea"
              </p>
              <p className="text-xs text-ocean-500 mt-1">— Chef Marcus Rivera</p>
            </motion.div>

            {/* Experience badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="absolute -top-6 -left-6 md:left-8 w-28 h-28 rounded-full 
                       bg-gradient-to-br from-gold-400 to-gold-600 flex flex-col items-center 
                       justify-center text-ocean-950 shadow-lg shadow-gold-500/30"
            >
              <span className="text-3xl font-bold">15+</span>
              <span className="text-xs font-medium">Years</span>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-teal-600 font-medium tracking-wider uppercase text-sm mb-4 block">
              Our Story
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-ocean-950 mb-6">
              A Passion for Seafood Excellence
            </h2>
            <div className="decorative-line mb-6" />
            
            <p className="text-ocean-700/80 text-lg leading-relaxed mb-6">
              Founded in 2009, OceanCrest has been serving the finest seafood in Marina Bay. 
              Our journey began with a simple belief: that every dish should celebrate the 
              ocean's bounty while honoring traditional cooking techniques.
            </p>
            
            <p className="text-ocean-700/70 leading-relaxed mb-10">
              Today, we continue that legacy with Chef Marcus Rivera at the helm, bringing 
              together fresh, sustainably-sourced ingredients with innovative culinary artistry. 
              Every plate that leaves our kitchen is a testament to our commitment to quality.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="text-center sm:text-left"
                >
                  <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center 
                                mb-3 mx-auto sm:mx-0">
                    <item.icon className="w-6 h-6 text-teal-600" />
                  </div>
                  <h4 className="font-semibold text-ocean-950 mb-1">{item.title}</h4>
                  <p className="text-sm text-ocean-600/60">{item.description}</p>
                </motion.div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-ocean-700 font-semibold 
                       hover:text-teal-600 transition-colors group"
            >
              Learn More About Us
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

