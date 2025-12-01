'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { Calendar, Clock, MapPin } from 'lucide-react'

export default function CTASection() {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=2574&auto=format&fit=crop')`,
          }}
        />
        <div className="absolute inset-0 bg-ocean-950/85" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-1/4 w-72 h-72 rounded-full bg-teal-500/10 blur-[100px]" />
        <div className="absolute bottom-10 right-1/4 w-96 h-96 rounded-full bg-gold-500/10 blur-[100px]" />
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="text-gold-400 font-medium tracking-wider uppercase text-sm mb-4 block">
            Join Us Tonight
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-white mb-6">
            Ready for an Unforgettable 
            <span className="text-gradient block mt-2">Dining Experience?</span>
          </h2>
          <p className="text-white/70 text-lg mb-10 leading-relaxed">
            Reserve your table today and let us take you on a culinary journey through 
            the finest flavors of the sea. Special occasions, romantic dinners, or 
            casual gatherings—we make every moment memorable.
          </p>

          {/* Quick Info */}
          <div className="flex flex-wrap justify-center gap-6 mb-10">
            <div className="flex items-center gap-2 text-white/60">
              <Calendar className="w-5 h-5 text-teal-400" />
              <span>Open 7 days a week</span>
            </div>
            <div className="flex items-center gap-2 text-white/60">
              <Clock className="w-5 h-5 text-teal-400" />
              <span>11 AM - 11 PM</span>
            </div>
            <div className="flex items-center gap-2 text-white/60">
              <MapPin className="w-5 h-5 text-teal-400" />
              <span>Marina Bay</span>
            </div>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/reservations" className="btn-primary">
              Reserve a Table
            </Link>
            <Link href="tel:+1234567890" className="btn-secondary">
              Call (123) 456-7890
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

