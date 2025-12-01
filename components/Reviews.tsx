'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'

const reviews = [
  {
    id: 1,
    name: 'Sarah Mitchell',
    role: 'Food Critic, Bay Times',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    text: 'OceanCrest delivers an exceptional dining experience. The lobster was perfectly cooked, and the attention to detail in every dish is remarkable. A true gem for seafood lovers.',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'Executive Chef, Marina Hotels',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    text: 'As a fellow chef, I appreciate the craftsmanship here. The freshness of their seafood is unmatched, and their grilling technique brings out incredible flavors. Highly recommended!',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Lifestyle Blogger',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    text: 'From the moment we walked in, we were treated like royalty. The ambiance is stunning, the service impeccable, and the oysters were the best I\'ve ever had. Already planning our next visit!',
  },
  {
    id: 4,
    name: 'David Thompson',
    role: 'Wine Sommelier',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop',
    rating: 5,
    text: 'Their wine pairing suggestions were spot-on with each course. The sommelier clearly knows their craft, and the overall dining experience was elevated to new heights.',
  },
]

export default function Reviews() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length)
  }

  const prev = () => {
    setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length)
  }

  return (
    <section className="section-padding bg-ocean-950 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-teal-500 blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gold-500 blur-[100px]" />
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
          <span className="text-teal-400 font-medium tracking-wider uppercase text-sm mb-4 block">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
            What Our Guests Say
          </h2>
          <div className="decorative-line mx-auto" />
        </motion.div>

        {/* Reviews Carousel */}
        <div className="max-w-4xl mx-auto relative">
          {/* Quote Icon */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 z-10">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 
                          flex items-center justify-center shadow-lg shadow-gold-500/30">
              <Quote className="w-8 h-8 text-ocean-950" />
            </div>
          </div>

          {/* Review Cards */}
          <div className="relative overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
                className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-white/10"
              >
                {/* Stars */}
                <div className="flex justify-center gap-1 mb-8">
                  {Array.from({ length: reviews[currentIndex].rating }).map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-gold-400 fill-gold-400" />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg md:text-xl text-white/90 text-center leading-relaxed mb-10">
                  &quot;{reviews[currentIndex].text}&quot;
                </blockquote>

                {/* Author */}
                <div className="flex flex-col items-center">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden mb-4 
                                ring-4 ring-teal-500/30">
                    <Image
                      src={reviews[currentIndex].image}
                      alt={reviews[currentIndex].name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h4 className="text-lg font-semibold text-white">
                    {reviews[currentIndex].name}
                  </h4>
                  <p className="text-teal-400 text-sm">
                    {reviews[currentIndex].role}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-10">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center
                       text-white/60 hover:text-white hover:border-white/40 transition-colors"
              aria-label="Previous review"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-gold-400 w-8'
                      : 'bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center
                       text-white/60 hover:text-white hover:border-white/40 transition-colors"
              aria-label="Next review"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

