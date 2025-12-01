import Hero from '@/components/Hero'
import FeaturedDishes from '@/components/FeaturedDishes'
import AboutPreview from '@/components/AboutPreview'
import MenuPreview from '@/components/MenuPreview'
import Reviews from '@/components/Reviews'
import CTASection from '@/components/CTASection'

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedDishes />
      <AboutPreview />
      <MenuPreview />
      <Reviews />
      <CTASection />
    </>
  )
}

