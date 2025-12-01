'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  User, 
  Phone, 
  Mail, 
  Calendar, 
  Clock, 
  Users, 
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Loader2
} from 'lucide-react'

interface FormData {
  name: string
  phone: string
  email: string
  date: string
  time: string
  guests: string
  notes: string
}

interface FormErrors {
  name?: string
  phone?: string
  email?: string
  date?: string
  time?: string
  guests?: string
}

const timeSlots = [
  '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM',
  '2:00 PM', '5:00 PM', '5:30 PM', '6:00 PM', '6:30 PM', '7:00 PM',
  '7:30 PM', '8:00 PM', '8:30 PM', '9:00 PM', '9:30 PM'
]

const guestOptions = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10+']

export default function ReservationForm() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    guests: '',
    notes: '',
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required'
    } else if (!/^[\d\s\-\+\(\)]{10,}$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number'
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!formData.date) {
      newErrors.date = 'Date is required'
    } else {
      const selectedDate = new Date(formData.date)
      const today = new Date()
      today.setHours(0, 0, 0, 0)
      if (selectedDate < today) {
        newErrors.date = 'Please select a future date'
      }
    }

    if (!formData.time) {
      newErrors.time = 'Time is required'
    }

    if (!formData.guests) {
      newErrors.guests = 'Party size is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSuccess(true)
  }

  const resetForm = () => {
    setFormData({
      name: '',
      phone: '',
      email: '',
      date: '',
      time: '',
      guests: '',
      notes: '',
    })
    setErrors({})
    setIsSuccess(false)
  }

  // Get min date (today)
  const today = new Date().toISOString().split('T')[0]
  // Get max date (3 months from now)
  const maxDate = new Date()
  maxDate.setMonth(maxDate.getMonth() + 3)
  const maxDateStr = maxDate.toISOString().split('T')[0]

  return (
    <AnimatePresence mode="wait">
      {isSuccess ? (
        <motion.div
          key="success"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-ocean-950/10 text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
            className="w-20 h-20 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 
                      flex items-center justify-center mx-auto mb-6"
          >
            <CheckCircle className="w-10 h-10 text-white" />
          </motion.div>
          
          <h3 className="text-2xl font-serif font-bold text-ocean-950 mb-4">
            Reservation Confirmed!
          </h3>
          <p className="text-ocean-600/70 mb-6 max-w-md mx-auto">
            Thank you, {formData.name}! We've received your reservation for{' '}
            <span className="font-semibold text-ocean-800">{formData.guests} guests</span> on{' '}
            <span className="font-semibold text-ocean-800">
              {new Date(formData.date).toLocaleDateString('en-US', { 
                weekday: 'long', 
                month: 'long', 
                day: 'numeric' 
              })}
            </span>{' '}
            at <span className="font-semibold text-ocean-800">{formData.time}</span>.
          </p>
          <p className="text-ocean-500 text-sm mb-8">
            A confirmation email has been sent to {formData.email}
          </p>
          
          <button
            onClick={resetForm}
            className="btn-outline"
          >
            Make Another Reservation
          </button>
        </motion.div>
      ) : (
        <motion.form
          key="form"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.4 }}
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-ocean-950/10"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <div className="md:col-span-2 lg:col-span-1">
              <label className="block text-sm font-medium text-ocean-800 mb-2">
                Full Name *
              </label>
              <div className="relative">
                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ocean-400" />
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Smith"
                  className={`input-field pl-12 ${errors.name ? 'border-red-400 focus:border-red-400' : ''}`}
                />
              </div>
              {errors.name && (
                <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.name}
                </p>
              )}
            </div>

            {/* Phone */}
            <div className="md:col-span-2 lg:col-span-1">
              <label className="block text-sm font-medium text-ocean-800 mb-2">
                Phone Number *
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ocean-400" />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(123) 456-7890"
                  className={`input-field pl-12 ${errors.phone ? 'border-red-400 focus:border-red-400' : ''}`}
                />
              </div>
              {errors.phone && (
                <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Email */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-ocean-800 mb-2">
                Email Address *
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ocean-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className={`input-field pl-12 ${errors.email ? 'border-red-400 focus:border-red-400' : ''}`}
                />
              </div>
              {errors.email && (
                <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-medium text-ocean-800 mb-2">
                Date *
              </label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ocean-400" />
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  min={today}
                  max={maxDateStr}
                  className={`input-field pl-12 ${errors.date ? 'border-red-400 focus:border-red-400' : ''}`}
                />
              </div>
              {errors.date && (
                <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.date}
                </p>
              )}
            </div>

            {/* Time */}
            <div>
              <label className="block text-sm font-medium text-ocean-800 mb-2">
                Time *
              </label>
              <div className="relative">
                <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ocean-400" />
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className={`input-field pl-12 appearance-none cursor-pointer ${
                    errors.time ? 'border-red-400 focus:border-red-400' : ''
                  }`}
                >
                  <option value="">Select a time</option>
                  {timeSlots.map(slot => (
                    <option key={slot} value={slot}>{slot}</option>
                  ))}
                </select>
              </div>
              {errors.time && (
                <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.time}
                </p>
              )}
            </div>

            {/* Party Size */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-ocean-800 mb-2">
                Party Size *
              </label>
              <div className="relative">
                <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-ocean-400" />
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleChange}
                  className={`input-field pl-12 appearance-none cursor-pointer ${
                    errors.guests ? 'border-red-400 focus:border-red-400' : ''
                  }`}
                >
                  <option value="">Select party size</option>
                  {guestOptions.map(num => (
                    <option key={num} value={num}>{num} {num === '1' ? 'Guest' : 'Guests'}</option>
                  ))}
                </select>
              </div>
              {errors.guests && (
                <p className="mt-2 text-sm text-red-500 flex items-center gap-1">
                  <AlertCircle className="w-4 h-4" />
                  {errors.guests}
                </p>
              )}
            </div>

            {/* Special Requests */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-ocean-800 mb-2">
                Special Requests (Optional)
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-ocean-400" />
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleChange}
                  placeholder="Allergies, dietary restrictions, special occasions, seating preferences..."
                  rows={4}
                  className="input-field pl-12 resize-none"
                />
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-8">
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary flex items-center justify-center gap-2 disabled:opacity-70 
                       disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Processing...
                </>
              ) : (
                'Confirm Reservation'
              )}
            </button>
          </div>

          {/* Note */}
          <p className="mt-6 text-center text-sm text-ocean-500">
            For parties larger than 10, please call us directly at{' '}
            <a href="tel:+1234567890" className="text-teal-600 hover:underline">
              (123) 456-7890
            </a>
          </p>
        </motion.form>
      )}
    </AnimatePresence>
  )
}

