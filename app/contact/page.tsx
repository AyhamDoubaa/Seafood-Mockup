'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { MapPin, Phone, Mail, Clock, ExternalLink, Navigation } from 'lucide-react'
import ContactForm from '@/components/ContactForm'

const contactInfo = [
  {
    icon: MapPin,
    title: 'Address',
    details: ['123 Coastal Drive', 'Marina Bay, CA 94000'],
    action: {
      label: 'Get Directions',
      href: 'https://maps.google.com/?q=123+Coastal+Drive+Marina+Bay+CA',
      icon: Navigation,
    },
  },
  {
    icon: Phone,
    title: 'Phone',
    details: ['(123) 456-7890', 'Reservations & General Inquiries'],
    action: {
      label: 'Call Now',
      href: 'tel:+1234567890',
      icon: ExternalLink,
    },
  },
  {
    icon: Mail,
    title: 'Email',
    details: ['hello@oceancrest.com', 'events@oceancrest.com'],
    action: {
      label: 'Send Email',
      href: 'mailto:hello@oceancrest.com',
      icon: ExternalLink,
    },
  },
]

const hours = [
  { day: 'Monday', time: '11:00 AM - 10:00 PM' },
  { day: 'Tuesday', time: '11:00 AM - 10:00 PM' },
  { day: 'Wednesday', time: '11:00 AM - 10:00 PM' },
  { day: 'Thursday', time: '11:00 AM - 10:00 PM' },
  { day: 'Friday', time: '11:00 AM - 11:00 PM' },
  { day: 'Saturday', time: '11:00 AM - 11:00 PM' },
  { day: 'Sunday', time: '12:00 PM - 9:00 PM' },
]

export default function ContactPage() {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' })

  return (
    <div className="min-h-screen bg-sand-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?q=80&w=2574&auto=format&fit=crop"
            alt="Contact us"
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
            Get in Touch
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-lg max-w-2xl mx-auto"
          >
            We'd love to hear from you. Reach out with any questions or to plan your visit.
          </motion.p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 -mt-20 relative z-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactInfo.map((info, index) => (
              <motion.div
                key={info.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-xl shadow-ocean-950/10 text-center
                         hover:shadow-2xl hover:shadow-ocean-950/15 transition-shadow duration-300"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 
                              flex items-center justify-center mx-auto mb-4">
                  <info.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-serif font-semibold text-ocean-950 mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1 mb-4">
                  {info.details.map((detail, i) => (
                    <p key={i} className="text-ocean-600/80">
                      {detail}
                    </p>
                  ))}
                </div>
                <a
                  href={info.action.href}
                  target={info.action.href.startsWith('http') ? '_blank' : undefined}
                  rel={info.action.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-teal-600 
                           hover:text-teal-700 transition-colors"
                >
                  {info.action.label}
                  <info.action.icon className="w-4 h-4" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Map & Form Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map & Hours */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Map */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl 
                            shadow-ocean-950/10 mb-8">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0968143067466!2d-122.41941688468204!3d37.77492977975892!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c6c8f4459%3A0xb10ed6d9b5050fa5!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1635959562000!5m2!1sen!2sus"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0"
                />
              </div>

              {/* Operating Hours */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg shadow-ocean-950/5">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-gold-100 flex items-center justify-center">
                    <Clock className="w-5 h-5 text-gold-600" />
                  </div>
                  <h3 className="text-lg font-serif font-semibold text-ocean-950">
                    Operating Hours
                  </h3>
                </div>

                <div className="space-y-3">
                  {hours.map((item) => (
                    <div
                      key={item.day}
                      className={`flex justify-between items-center py-2 px-3 rounded-lg transition-colors ${
                        item.day === today
                          ? 'bg-teal-50 text-teal-800'
                          : 'hover:bg-sand-100'
                      }`}
                    >
                      <span className={`font-medium ${item.day === today ? 'text-teal-700' : 'text-ocean-800'}`}>
                        {item.day}
                        {item.day === today && (
                          <span className="ml-2 text-xs bg-teal-500 text-white px-2 py-0.5 rounded-full">
                            Today
                          </span>
                        )}
                      </span>
                      <span className={item.day === today ? 'text-teal-600' : 'text-ocean-600/70'}>
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-sand-200">
                  <p className="text-sm text-ocean-600/70">
                    <span className="font-medium text-ocean-800">Holiday Hours:</span> We may have 
                    modified hours on major holidays. Please call ahead to confirm.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl shadow-ocean-950/10">
                <h3 className="text-2xl font-serif font-semibold text-ocean-950 mb-2">
                  Send Us a Message
                </h3>
                <p className="text-ocean-600/70 mb-8">
                  Have a question or feedback? Fill out the form below and we'll get back to you 
                  within 24 hours.
                </p>

                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-sand-100">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-serif font-bold text-ocean-950 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="decorative-line mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              {
                q: 'Do you accommodate dietary restrictions?',
                a: 'Absolutely! Please inform your server or note any allergies or dietary needs when making a reservation.',
              },
              {
                q: 'Is there parking available?',
                a: 'Yes, we offer complimentary valet parking. Self-parking is also available in the adjacent garage.',
              },
              {
                q: 'Do you have a dress code?',
                a: 'We recommend smart casual attire. No beachwear or flip-flops please.',
              },
              {
                q: 'Can I host a private event?',
                a: 'Yes! Our private dining rooms accommodate 15-50 guests. Contact our events team for details.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl p-6 shadow-md shadow-ocean-950/5"
              >
                <h4 className="font-semibold text-ocean-900 mb-2">{faq.q}</h4>
                <p className="text-ocean-600/70 text-sm">{faq.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

