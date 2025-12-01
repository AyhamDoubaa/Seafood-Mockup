'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { Award, Heart, Leaf, Ship, Users, Utensils, MapPin, Clock } from 'lucide-react'

const values = [
  {
    icon: Leaf,
    title: 'Sustainable Sourcing',
    description: 'We partner with local fisheries committed to sustainable practices, ensuring every catch supports ocean health.',
  },
  {
    icon: Heart,
    title: 'Passion for Quality',
    description: 'From the moment ingredients arrive to the final plating, every step is guided by our commitment to excellence.',
  },
  {
    icon: Users,
    title: 'Community First',
    description: 'We believe in supporting our local community, from sourcing ingredients to hiring local talent.',
  },
  {
    icon: Utensils,
    title: 'Culinary Innovation',
    description: 'While honoring traditional techniques, we continuously explore new flavors and presentations.',
  },
]

const milestones = [
  { year: '2009', event: 'OceanCrest opens its doors in Marina Bay' },
  { year: '2012', event: 'First Michelin recommendation' },
  { year: '2015', event: 'Chef Marcus Rivera joins as Executive Chef' },
  { year: '2018', event: 'Awarded "Best Seafood Restaurant" by Bay Dining Awards' },
  { year: '2021', event: 'Expanded with private dining rooms' },
  { year: '2024', event: 'Celebrating 15 years of excellence' },
]

const team = [
  {
    name: 'Marcus Rivera',
    role: 'Executive Chef',
    image: 'https://images.unsplash.com/photo-1577219491135-ce391730fb2c?q=80&w=400&auto=format&fit=crop',
    bio: '20+ years of culinary excellence across three continents',
  },
  {
    name: 'Elena Vasquez',
    role: 'Sous Chef',
    image: 'https://images.unsplash.com/photo-1583394293214-28ez12d09574?q=80&w=400&auto=format&fit=crop',
    bio: 'Specializing in Mediterranean seafood preparations',
  },
  {
    name: 'James Chen',
    role: 'Pastry Chef',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop',
    bio: 'Creating desserts that celebrate coastal flavors',
  },
  {
    name: 'Sophie Laurent',
    role: 'Sommelier',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400&auto=format&fit=crop',
    bio: 'Expert in pairing wines with seafood dishes',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-sand-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2574&auto=format&fit=crop"
            alt="Restaurant ambiance"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ocean-950/70 via-ocean-950/50 to-ocean-950/80" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-teal-400 font-medium tracking-wider uppercase text-sm mb-4 block"
          >
            Our Story
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6"
          >
            A Legacy of Ocean Flavors
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-lg leading-relaxed"
          >
            For over 15 years, OceanCrest has been Marina Bay's premier destination for 
            exceptional seafood. Our journey began with a simple passion—to bring the 
            freshest catches from sea to table.
          </motion.p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-teal-600 font-medium tracking-wider uppercase text-sm mb-4 block">
                The Beginning
              </span>
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-ocean-950 mb-6">
                Where It All Started
              </h2>
              <div className="decorative-line mb-6" />
              
              <div className="space-y-4 text-ocean-700/80 leading-relaxed">
                <p>
                  OceanCrest was born from a dream shared by lifelong friends who grew up on 
                  the shores of Marina Bay. Having witnessed the decline of traditional fishing 
                  communities, they envisioned a restaurant that would celebrate the ocean's 
                  bounty while supporting sustainable practices.
                </p>
                <p>
                  In 2009, that dream became reality. Starting with just 12 tables and a 
                  commitment to serve only the freshest catch, OceanCrest quickly earned a 
                  reputation for exceptional quality. Word spread, and soon food lovers from 
                  across the region were making the journey to our doorstep.
                </p>
                <p>
                  Today, we remain true to our founding principles. Every morning, our team 
                  meets the fishing boats at the dock, selecting only the finest specimens 
                  for our kitchen. It's this dedication to freshness that sets us apart.
                </p>
              </div>
            </motion.div>

            {/* Images */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=800&auto=format&fit=crop"
                      alt="Restaurant interior"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop"
                      alt="Fresh seafood preparation"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=800&auto=format&fit=crop"
                      alt="Signature dish"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop"
                      alt="Dining experience"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="absolute -bottom-6 -left-6 w-32 h-32 rounded-full bg-gradient-to-br 
                         from-gold-400 to-gold-600 flex flex-col items-center justify-center 
                         text-ocean-950 shadow-xl shadow-gold-500/30"
              >
                <span className="text-4xl font-bold">15+</span>
                <span className="text-xs font-medium text-center">Years of Excellence</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="section-padding bg-ocean-950 text-white relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-teal-500 blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-gold-500 blur-[120px]" />
        </div>

        <div className="container-custom relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-teal-400 font-medium tracking-wider uppercase text-sm mb-4 block">
              Our Philosophy
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold mb-6">
              The OceanCrest Way
            </h2>
            <div className="decorative-line mx-auto mb-6" />
            <p className="text-white/70 max-w-2xl mx-auto text-lg">
              Every decision we make is guided by our core values—from the fish we select 
              to the way we treat our guests.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center 
                              justify-center mx-auto mb-6 group-hover:bg-gold-500 transition-colors">
                  <value.icon className="w-8 h-8 text-gold-400" />
                </div>
                <h3 className="text-xl font-serif font-semibold mb-3">{value.title}</h3>
                <p className="text-white/60 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Chef & Team Section */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-teal-600 font-medium tracking-wider uppercase text-sm mb-4 block">
              Meet the Team
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-ocean-950 mb-6">
              The Culinary Artists
            </h2>
            <div className="decorative-line mx-auto mb-6" />
            <p className="text-ocean-700/70 max-w-2xl mx-auto text-lg">
              Our talented team brings decades of combined experience and a shared passion 
              for creating memorable dining experiences.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-4 shadow-lg
                              shadow-ocean-950/10">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/80 via-transparent 
                                to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-ocean-950 mb-1">
                  {member.name}
                </h3>
                <p className="text-teal-600 font-medium text-sm mb-2">{member.role}</p>
                <p className="text-ocean-600/60 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-sand-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-teal-600 font-medium tracking-wider uppercase text-sm mb-4 block">
              Our Journey
            </span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-ocean-950 mb-6">
              Milestones
            </h2>
            <div className="decorative-line mx-auto" />
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 items-start mb-8 last:mb-0"
              >
                <div className="w-20 flex-shrink-0">
                  <span className="text-2xl font-bold text-gold-600">{milestone.year}</span>
                </div>
                <div className="relative flex-1 pb-8 border-l-2 border-teal-200 pl-6">
                  <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-teal-500 
                                border-4 border-sand-100" />
                  <p className="text-ocean-800">{milestone.event}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-ocean-800 to-ocean-950 text-white">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Ship className="w-16 h-16 text-gold-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
              Ready to Experience OceanCrest?
            </h2>
            <p className="text-white/70 max-w-xl mx-auto mb-10 text-lg">
              Join us for an unforgettable dining experience. Reserve your table today and 
              discover why we've been Marina Bay's favorite for over 15 years.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/reservations" className="btn-primary">
                Make a Reservation
              </Link>
              <Link href="/menu" className="btn-secondary">
                View Our Menu
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

