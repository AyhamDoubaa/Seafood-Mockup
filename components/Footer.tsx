'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Anchor, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  Twitter 
} from 'lucide-react'

const quickLinks = [
  { href: '/', label: 'Home' },
  { href: '/menu', label: 'Our Menu' },
  { href: '/about', label: 'About Us' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/reservations', label: 'Reservations' },
  { href: '/contact', label: 'Contact' },
]

const socialLinks = [
  { href: 'https://facebook.com', icon: Facebook, label: 'Facebook' },
  { href: 'https://instagram.com', icon: Instagram, label: 'Instagram' },
  { href: 'https://twitter.com', icon: Twitter, label: 'Twitter' },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative bg-ocean-950 text-white overflow-hidden">
      {/* Decorative wave */}
      <div className="absolute top-0 left-0 right-0 h-32 overflow-hidden">
        <svg
          viewBox="0 0 1440 120"
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            className="text-sand-50"
            d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,48C672,43,768,53,864,64C960,75,1056,85,1152,80C1248,75,1344,53,1392,42.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          />
        </svg>
      </div>

      {/* Decorative blobs */}
      <div className="ocean-blob w-96 h-96 bg-teal-600 top-20 -left-48" />
      <div className="ocean-blob w-72 h-72 bg-gold-500 bottom-20 -right-36" />

      <div className="container-custom relative pt-40 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-1"
          >
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold-400 to-gold-600 
                            flex items-center justify-center shadow-lg shadow-gold-500/30">
                <Anchor className="w-6 h-6 text-ocean-950" />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-serif font-bold tracking-wide">
                  OceanCrest
                </span>
                <span className="text-xs text-teal-400 tracking-[0.2em] uppercase">
                  Seafood & Grill
                </span>
              </div>
            </Link>
            <p className="text-white/60 leading-relaxed mb-6">
              Experience the finest seafood, freshly caught and expertly prepared. 
              Where ocean flavors meet culinary artistry.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center
                           transition-all duration-300 hover:bg-gold-500 hover:text-ocean-950"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className="text-lg font-serif font-semibold mb-6 text-gold-400">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/60 hover:text-teal-400 transition-colors duration-300
                             flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-500/50 group-hover:bg-teal-400 
                                   transition-colors" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-lg font-serif font-semibold mb-6 text-gold-400">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-white/60">
                <MapPin className="w-5 h-5 text-teal-400 mt-0.5 flex-shrink-0" />
                <span>123 Coastal Drive<br />Marina Bay, CA 94000</span>
              </li>
              <li>
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-3 text-white/60 hover:text-teal-400 transition-colors"
                >
                  <Phone className="w-5 h-5 text-teal-400" />
                  (123) 456-7890
                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@oceancrest.com"
                  className="flex items-center gap-3 text-white/60 hover:text-teal-400 transition-colors"
                >
                  <Mail className="w-5 h-5 text-teal-400" />
                  hello@oceancrest.com
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="text-lg font-serif font-semibold mb-6 text-gold-400">
              Opening Hours
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-white/60">
                <Clock className="w-5 h-5 text-teal-400 mt-0.5" />
                <div>
                  <p className="font-medium text-white">Monday - Thursday</p>
                  <p>11:00 AM - 10:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-white/60">
                <Clock className="w-5 h-5 text-teal-400 mt-0.5 opacity-0" />
                <div>
                  <p className="font-medium text-white">Friday - Saturday</p>
                  <p>11:00 AM - 11:00 PM</p>
                </div>
              </li>
              <li className="flex items-start gap-3 text-white/60">
                <Clock className="w-5 h-5 text-teal-400 mt-0.5 opacity-0" />
                <div>
                  <p className="font-medium text-white">Sunday</p>
                  <p>12:00 PM - 9:00 PM</p>
                </div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between 
                   items-center gap-4 text-sm text-white/40"
        >
          <p>© {currentYear} OceanCrest Seafood & Grill. All rights reserved.</p>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-teal-400 transition-colors">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:text-teal-400 transition-colors">
              Terms of Service
            </Link>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

