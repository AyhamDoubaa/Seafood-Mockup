'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Clock, MapPin, Phone, Info } from 'lucide-react'
import ReservationForm from '@/components/ReservationForm'

const benefits = [
  {
    icon: Clock,
    title: 'Instant Confirmation',
    description: 'Receive immediate confirmation via email',
  },
  {
    icon: MapPin,
    title: 'Prime Seating',
    description: 'Request your preferred table location',
  },
  {
    icon: Info,
    title: 'Special Occasions',
    description: 'Let us know and we\'ll make it memorable',
  },
]

export default function ReservationsPage() {
  return (
    <div className="min-h-screen bg-sand-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2574&auto=format&fit=crop"
            alt="Restaurant interior"
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
            Book Your Experience
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4"
          >
            Make a Reservation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-lg max-w-2xl mx-auto"
          >
            Reserve your table for an unforgettable coastal dining experience
          </motion.p>
        </div>
      </section>

      {/* Reservation Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Form */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <ReservationForm />
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-3xl p-6 md:p-8 shadow-lg shadow-ocean-950/5 mb-8"
              >
                <h3 className="text-lg font-serif font-semibold text-ocean-950 mb-6">
                  Why Reserve Online?
                </h3>
                <div className="space-y-6">
                  {benefits.map((benefit, index) => (
                    <div key={benefit.title} className="flex gap-4">
                      <div className="w-10 h-10 rounded-xl bg-teal-50 flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-5 h-5 text-teal-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-ocean-900 mb-1">{benefit.title}</h4>
                        <p className="text-sm text-ocean-600/70">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-gradient-to-br from-ocean-800 to-ocean-950 rounded-3xl p-6 md:p-8 
                         shadow-lg shadow-ocean-950/20 text-white"
              >
                <h3 className="text-lg font-serif font-semibold mb-6">
                  Prefer to Call?
                </h3>
                <div className="space-y-4 mb-6">
                  <a
                    href="tel:+1234567890"
                    className="flex items-center gap-3 text-white/80 hover:text-white transition-colors"
                  >
                    <Phone className="w-5 h-5 text-teal-400" />
                    (123) 456-7890
                  </a>
                  <div className="flex items-start gap-3 text-white/60">
                    <Clock className="w-5 h-5 text-teal-400 mt-0.5" />
                    <div>
                      <p>Mon-Thu: 11am - 10pm</p>
                      <p>Fri-Sat: 11am - 11pm</p>
                      <p>Sun: 12pm - 9pm</p>
                    </div>
                  </div>
                </div>

                {/* Decorative image */}
                <div className="relative aspect-video rounded-xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop"
                    alt="Fresh seafood"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-ocean-950/30" />
                </div>
              </motion.div>

              {/* Private Events */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mt-8 p-6 border-2 border-dashed border-sand-300 rounded-2xl text-center"
              >
                <h4 className="font-serif font-semibold text-ocean-900 mb-2">
                  Planning a Private Event?
                </h4>
                <p className="text-sm text-ocean-600/70 mb-4">
                  Our private dining rooms accommodate groups of 15-50 guests
                </p>
                <a
                  href="/contact"
                  className="text-sm font-semibold text-teal-600 hover:text-teal-700 transition-colors"
                >
                  Contact us for details →
                </a>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Policies Section */}
      <section className="py-16 bg-sand-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h3 className="text-xl font-serif font-semibold text-ocean-950 mb-4">
              Reservation Policies
            </h3>
            <div className="text-sm text-ocean-600/80 space-y-2">
              <p>
                • Reservations are held for 15 minutes past the scheduled time
              </p>
              <p>
                • Please notify us at least 24 hours in advance for cancellations
              </p>
              <p>
                • For parties of 8 or more, a credit card may be required to hold the reservation
              </p>
              <p>
                • Special dietary needs should be communicated in advance
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

