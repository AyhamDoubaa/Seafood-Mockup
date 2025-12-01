'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Flame, Leaf, Star } from 'lucide-react'

const featuredDishes = [
  {
    id: 1,
    name: 'Grilled Lobster Tail',
    description: 'Butter-poached Maine lobster with garlic herb butter and seasonal vegetables',
    price: '$68',
    image: 'https://images.unsplash.com/photo-1553247407-23251ce81f59?q=80&w=2574&auto=format&fit=crop',
    badge: 'Chef\'s Choice',
    icon: Star,
  },
  {
    id: 2,
    name: 'Seared Ahi Tuna',
    description: 'Sesame-crusted yellowfin tuna with wasabi aioli and pickled ginger',
    price: '$42',
    image: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=2574&auto=format&fit=crop',
    badge: 'Signature',
    icon: Flame,
  },
  {
    id: 3,
    name: 'Oyster Platter',
    description: 'Fresh selection of East & West coast oysters with mignonette and cocktail sauce',
    price: '$36',
    image: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?q=80&w=2574&auto=format&fit=crop',
    badge: 'Fresh Daily',
    icon: Leaf,
  },
]

export default function FeaturedDishes() {
  return (
    <section className="section-padding bg-sand-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-radial from-teal-100/30 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/3 bg-gradient-radial from-gold-100/20 to-transparent pointer-events-none" />

      <div className="container-custom relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-teal-600 font-medium tracking-wider uppercase text-sm mb-4 block">
            Our Specialties
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-ocean-950 mb-6">
            Featured Dishes
          </h2>
          <div className="decorative-line mx-auto mb-6" />
          <p className="text-ocean-700/70 max-w-2xl mx-auto text-lg">
            Handpicked favorites from our kitchen, prepared with the freshest catches 
            and finest ingredients from local suppliers.
          </p>
        </motion.div>

        {/* Dishes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredDishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="card group"
            >
              {/* Image */}
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/60 to-transparent" />
                
                {/* Badge */}
                <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 
                              bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-ocean-800">
                  <dish.icon className="w-4 h-4 text-gold-500" />
                  {dish.badge}
                </div>

                {/* Price */}
                <div className="absolute bottom-4 right-4 px-4 py-2 bg-gold-500 rounded-full 
                              text-ocean-950 font-bold text-lg">
                  {dish.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-serif font-semibold text-ocean-950 mb-3 
                             group-hover:text-teal-700 transition-colors">
                  {dish.name}
                </h3>
                <p className="text-ocean-600/70 leading-relaxed">
                  {dish.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/menu"
            className="inline-flex items-center gap-2 text-ocean-700 font-semibold 
                     hover:text-teal-600 transition-colors group"
          >
            View Full Menu
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

