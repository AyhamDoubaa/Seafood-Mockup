'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Camera, Utensils, Wine, Home } from 'lucide-react'
import Lightbox from '@/components/Lightbox'

const categories = [
  { id: 'all', name: 'All', icon: Camera },
  { id: 'dishes', name: 'Dishes', icon: Utensils },
  { id: 'drinks', name: 'Drinks', icon: Wine },
  { id: 'interior', name: 'Interior', icon: Home },
]

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1553247407-23251ce81f59?q=80&w=2574&auto=format&fit=crop',
    title: 'Grilled Lobster Tail',
    category: 'dishes',
  },
  {
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2574&auto=format&fit=crop',
    title: 'Main Dining Room',
    category: 'interior',
  },
  {
    src: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=2574&auto=format&fit=crop',
    title: 'Seared Ahi Tuna',
    category: 'dishes',
  },
  {
    src: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=2574&auto=format&fit=crop',
    title: 'Signature Cocktail',
    category: 'drinks',
  },
  {
    src: 'https://images.unsplash.com/photo-1615141982883-c7ad0e69fd62?q=80&w=2574&auto=format&fit=crop',
    title: 'Fresh Oysters',
    category: 'dishes',
  },
  {
    src: 'https://images.unsplash.com/photo-1514933651103-005eec06c04b?q=80&w=2574&auto=format&fit=crop',
    title: 'Bar Seating',
    category: 'interior',
  },
  {
    src: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2574&auto=format&fit=crop',
    title: 'Chef\'s Platter',
    category: 'dishes',
  },
  {
    src: 'https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=2574&auto=format&fit=crop',
    title: 'Ocean View Terrace',
    category: 'interior',
  },
  {
    src: 'https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=2574&auto=format&fit=crop',
    title: 'Tropical Sangria',
    category: 'drinks',
  },
  {
    src: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=2574&auto=format&fit=crop',
    title: 'Seafood Selection',
    category: 'dishes',
  },
  {
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2574&auto=format&fit=crop',
    title: 'Private Dining',
    category: 'interior',
  },
  {
    src: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=2574&auto=format&fit=crop',
    title: 'Ocean Breeze Martini',
    category: 'drinks',
  },
  {
    src: 'https://images.unsplash.com/photo-1560717789-0ac7c58ac90a?q=80&w=2574&auto=format&fit=crop',
    title: 'Grilled Salmon',
    category: 'dishes',
  },
  {
    src: 'https://images.unsplash.com/photo-1578474846511-04ba529f0b88?q=80&w=2574&auto=format&fit=crop',
    title: 'Champagne Service',
    category: 'drinks',
  },
  {
    src: 'https://images.unsplash.com/photo-1559329007-40df8a9345d8?q=80&w=2574&auto=format&fit=crop',
    title: 'Waterfront Seating',
    category: 'interior',
  },
  {
    src: 'https://images.unsplash.com/photo-1565299543923-37dd37887442?q=80&w=2574&auto=format&fit=crop',
    title: 'Crab Legs Platter',
    category: 'dishes',
  },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [lightboxOpen, setLightboxOpen] = useState(false)
  const [lightboxIndex, setLightboxIndex] = useState(0)

  const filteredImages = activeCategory === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeCategory)

  const openLightbox = (index: number) => {
    setLightboxIndex(index)
    setLightboxOpen(true)
  }

  const closeLightbox = () => {
    setLightboxOpen(false)
  }

  const goToPrevious = () => {
    setLightboxIndex((prev) => (prev - 1 + filteredImages.length) % filteredImages.length)
  }

  const goToNext = () => {
    setLightboxIndex((prev) => (prev + 1) % filteredImages.length)
  }

  return (
    <div className="min-h-screen bg-sand-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=2574&auto=format&fit=crop"
            alt="Gallery hero"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-ocean-950/70 via-ocean-950/50 to-ocean-950/80" />
        </div>
        
        <div className="relative z-10 text-center px-4">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-teal-400 font-medium tracking-wider uppercase text-sm mb-4 block"
          >
            Visual Journey
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4"
          >
            Our Gallery
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-lg max-w-2xl mx-auto"
          >
            A glimpse into the OceanCrest experience—from our stunning dishes to our elegant spaces
          </motion.p>
        </div>
      </section>

      {/* Filter Section */}
      <section className="sticky top-20 md:top-24 z-30 bg-white/80 backdrop-blur-lg border-b border-sand-200 shadow-sm">
        <div className="container-custom py-4">
          <div className="flex justify-center gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full whitespace-nowrap 
                          transition-all duration-300 font-medium text-sm ${
                  activeCategory === category.id
                    ? 'bg-ocean-700 text-white shadow-lg shadow-ocean-700/30'
                    : 'bg-sand-100 text-ocean-700 hover:bg-sand-200'
                }`}
              >
                <category.icon className="w-4 h-4" />
                {category.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative aspect-square cursor-pointer overflow-hidden rounded-2xl 
                         shadow-lg shadow-ocean-950/10"
                onClick={() => openLightbox(index)}
              >
                <Image
                  src={image.src}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-ocean-950/80 via-ocean-950/20 
                              to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 translate-y-8 
                              opacity-0 group-hover:translate-y-0 group-hover:opacity-100 
                              transition-all duration-300">
                  <h3 className="text-white font-serif font-semibold text-lg mb-1">
                    {image.title}
                  </h3>
                  <p className="text-teal-300 text-sm capitalize">{image.category}</p>
                </div>

                {/* Zoom icon */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/20 
                              backdrop-blur-sm flex items-center justify-center opacity-0 
                              group-hover:opacity-100 transition-opacity duration-300">
                  <Camera className="w-5 h-5 text-white" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Empty state */}
          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <Camera className="w-16 h-16 text-ocean-300 mx-auto mb-4" />
              <p className="text-ocean-600">No images found in this category.</p>
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox
        images={filteredImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={closeLightbox}
        onPrevious={goToPrevious}
        onNext={goToNext}
      />
    </div>
  )
}

