'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { UtensilsCrossed, Fish, Flame, Wine, IceCream, Salad } from 'lucide-react'

const menuCategories = [
  {
    icon: Salad,
    name: 'Starters',
    description: 'Fresh appetizers to begin your journey',
    count: '12 items',
    color: 'from-emerald-400 to-teal-500',
  },
  {
    icon: Fish,
    name: 'Mains',
    description: 'Signature seafood entrees',
    count: '18 items',
    color: 'from-ocean-400 to-ocean-600',
  },
  {
    icon: Flame,
    name: 'From the Grill',
    description: 'Perfectly charred selections',
    count: '10 items',
    color: 'from-orange-400 to-red-500',
  },
  {
    icon: UtensilsCrossed,
    name: 'Sides',
    description: 'Complementary accompaniments',
    count: '8 items',
    color: 'from-amber-400 to-gold-500',
  },
  {
    icon: Wine,
    name: 'Drinks',
    description: 'Curated beverages & cocktails',
    count: '15 items',
    color: 'from-purple-400 to-indigo-500',
  },
  {
    icon: IceCream,
    name: 'Desserts',
    description: 'Sweet finales to your meal',
    count: '9 items',
    color: 'from-pink-400 to-rose-500',
  },
]

export default function MenuPreview() {
  return (
    <section className="section-padding bg-sand-100 relative overflow-hidden">
      {/* Decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230b3f6d' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

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
            Explore
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-ocean-950 mb-6">
            Our Menu Categories
          </h2>
          <div className="decorative-line mx-auto mb-6" />
          <p className="text-ocean-700/70 max-w-2xl mx-auto text-lg">
            From ocean-fresh appetizers to decadent desserts, explore our carefully 
            curated menu designed to delight your palate.
          </p>
        </motion.div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuCategories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href="/menu"
                className="block p-6 bg-white rounded-2xl shadow-lg shadow-ocean-950/5
                         hover:shadow-xl hover:shadow-ocean-950/10 transition-all duration-500
                         hover:-translate-y-2 group"
              >
                <div className="flex items-start gap-4">
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${category.color}
                                flex items-center justify-center shadow-lg flex-shrink-0
                                group-hover:scale-110 transition-transform duration-300`}>
                    <category.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-serif font-semibold text-ocean-950 mb-1
                                 group-hover:text-teal-700 transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-ocean-600/60 text-sm mb-2">
                      {category.description}
                    </p>
                    <span className="text-xs font-medium text-teal-600 bg-teal-50 
                                   px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </div>
                </div>
              </Link>
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
          <Link href="/menu" className="btn-outline">
            View Complete Menu
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

