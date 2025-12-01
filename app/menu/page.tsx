'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Salad, Fish, Flame, UtensilsCrossed, Wine, IceCream, Leaf, Star, Wheat } from 'lucide-react'

const categories = [
  { id: 'starters', name: 'Starters', icon: Salad },
  { id: 'mains', name: 'Mains', icon: Fish },
  { id: 'grill', name: 'From the Grill', icon: Flame },
  { id: 'sides', name: 'Sides', icon: UtensilsCrossed },
  { id: 'drinks', name: 'Drinks', icon: Wine },
  { id: 'desserts', name: 'Desserts', icon: IceCream },
]

const menuItems = {
  starters: [
    {
      name: 'Oyster Platter',
      description: 'Fresh selection of East & West coast oysters with mignonette, cocktail sauce, and fresh lemon',
      price: 36,
      badges: ['Fresh Daily'],
    },
    {
      name: 'Tuna Tartare',
      description: 'Yellowfin tuna, avocado, sesame, soy-ginger dressing, crispy wonton chips',
      price: 24,
      badges: ['Chef\'s Choice'],
    },
    {
      name: 'Jumbo Shrimp Cocktail',
      description: 'Chilled jumbo shrimp with house-made cocktail sauce and fresh horseradish',
      price: 22,
      badges: [],
    },
    {
      name: 'Crab Cakes',
      description: 'Pan-seared lump crab cakes with remoulade sauce and micro greens',
      price: 28,
      badges: ['Popular'],
    },
    {
      name: 'Seafood Chowder',
      description: 'Creamy New England style with clams, shrimp, potatoes, and fresh herbs',
      price: 16,
      badges: [],
    },
    {
      name: 'Calamari Fritti',
      description: 'Lightly fried calamari with marinara sauce and lemon aioli',
      price: 18,
      badges: [],
    },
    {
      name: 'Seared Scallops',
      description: 'Diver scallops with cauliflower purée, pancetta crisps, and brown butter',
      price: 32,
      badges: ['Chef\'s Choice'],
    },
    {
      name: 'Lobster Bisque',
      description: 'Rich and creamy bisque with chunks of Maine lobster and brandy cream',
      price: 18,
      badges: [],
    },
  ],
  mains: [
    {
      name: 'Grilled Lobster Tail',
      description: 'Butter-poached Maine lobster with garlic herb butter, asparagus, and fingerling potatoes',
      price: 68,
      badges: ['Signature'],
    },
    {
      name: 'Pan-Roasted Chilean Sea Bass',
      description: 'Miso-glazed sea bass with bok choy, shiitake mushrooms, and ginger broth',
      price: 52,
      badges: ['Chef\'s Choice'],
    },
    {
      name: 'Seared Ahi Tuna',
      description: 'Sesame-crusted yellowfin tuna, wasabi aioli, pickled ginger, seaweed salad',
      price: 42,
      badges: [],
    },
    {
      name: 'King Crab Legs',
      description: 'One pound of Alaskan king crab with drawn butter and lemon',
      price: 85,
      badges: ['Premium'],
    },
    {
      name: 'Seafood Linguine',
      description: 'Lobster, shrimp, mussels, and clams in white wine garlic sauce over fresh pasta',
      price: 48,
      badges: ['Popular'],
    },
    {
      name: 'Whole Branzino',
      description: 'Mediterranean sea bass, herb-roasted, with olive tapenade and roasted vegetables',
      price: 44,
      badges: [],
    },
    {
      name: 'Cioppino',
      description: 'San Francisco-style seafood stew with Dungeness crab, mussels, clams, and fish',
      price: 56,
      badges: [],
    },
    {
      name: 'Blackened Red Snapper',
      description: 'Cajun-spiced snapper with dirty rice, collard greens, and remoulade',
      price: 38,
      badges: [],
    },
  ],
  grill: [
    {
      name: 'Grilled Swordfish',
      description: 'Lemon-herb marinated swordfish steak with caper butter and grilled vegetables',
      price: 46,
      badges: [],
    },
    {
      name: 'Charred Octopus',
      description: 'Spanish-style grilled octopus with romesco sauce, fingerling potatoes, and olives',
      price: 34,
      badges: ['Chef\'s Choice'],
    },
    {
      name: 'Grilled Salmon',
      description: 'Atlantic salmon with dill cream sauce, roasted beets, and arugula',
      price: 36,
      badges: ['Popular'],
    },
    {
      name: 'Jumbo Shrimp Skewers',
      description: 'Garlic-butter grilled shrimp with chimichurri and grilled corn',
      price: 32,
      badges: [],
    },
    {
      name: 'Surf & Turf',
      description: '8oz filet mignon with butter-poached lobster tail, truffle mashed potatoes',
      price: 95,
      badges: ['Premium'],
    },
    {
      name: 'Grilled Mahi-Mahi',
      description: 'Tropical-glazed mahi with pineapple salsa and coconut rice',
      price: 38,
      badges: [],
    },
  ],
  sides: [
    {
      name: 'Truffle Fries',
      description: 'Hand-cut fries with truffle oil, parmesan, and fresh herbs',
      price: 12,
      badges: ['Popular'],
    },
    {
      name: 'Grilled Asparagus',
      description: 'Charred asparagus with hollandaise sauce and lemon zest',
      price: 10,
      badges: ['Vegetarian'],
    },
    {
      name: 'Lobster Mac & Cheese',
      description: 'Creamy three-cheese sauce with chunks of Maine lobster',
      price: 18,
      badges: ['Chef\'s Choice'],
    },
    {
      name: 'Roasted Brussels Sprouts',
      description: 'Crispy sprouts with bacon, balsamic glaze, and pecans',
      price: 11,
      badges: [],
    },
    {
      name: 'Creamed Spinach',
      description: 'Classic creamed spinach with nutmeg and parmesan',
      price: 10,
      badges: ['Vegetarian'],
    },
    {
      name: 'Garlic Bread',
      description: 'Toasted sourdough with roasted garlic butter and herbs',
      price: 8,
      badges: ['Vegetarian'],
    },
  ],
  drinks: [
    {
      name: 'Ocean Breeze Martini',
      description: 'Vodka, blue curaçao, fresh lime, coconut cream',
      price: 16,
      badges: ['Signature'],
    },
    {
      name: 'Spiced Rum Old Fashioned',
      description: 'Aged spiced rum, demerara, angostura, orange peel',
      price: 15,
      badges: [],
    },
    {
      name: 'Champagne Cocktail',
      description: 'Brut champagne, cognac, sugar cube, angostura bitters',
      price: 18,
      badges: [],
    },
    {
      name: 'Tropical Sangria',
      description: 'White wine, tropical fruits, passion fruit, sparkling water',
      price: 14,
      badges: ['Popular'],
    },
    {
      name: 'Cucumber Gimlet',
      description: 'Gin, fresh cucumber, lime, elderflower',
      price: 15,
      badges: [],
    },
    {
      name: 'House Red/White Wine',
      description: 'Ask server for current selection',
      price: 12,
      badges: [],
    },
    {
      name: 'Craft Beer Selection',
      description: 'Local and imported craft beers on tap',
      price: 9,
      badges: [],
    },
    {
      name: 'Fresh Juices',
      description: 'Orange, grapefruit, cranberry, or pineapple',
      price: 6,
      badges: ['Non-Alcoholic'],
    },
  ],
  desserts: [
    {
      name: 'Key Lime Pie',
      description: 'Classic Florida-style key lime pie with whipped cream and graham crust',
      price: 12,
      badges: ['Signature'],
    },
    {
      name: 'Chocolate Lava Cake',
      description: 'Warm chocolate cake with molten center, vanilla ice cream',
      price: 14,
      badges: ['Popular'],
    },
    {
      name: 'Crème Brûlée',
      description: 'Classic vanilla bean custard with caramelized sugar top',
      price: 11,
      badges: [],
    },
    {
      name: 'Seasonal Fruit Tart',
      description: 'Fresh seasonal fruits on vanilla pastry cream in buttery tart shell',
      price: 13,
      badges: [],
    },
    {
      name: 'Tiramisu',
      description: 'Espresso-soaked ladyfingers with mascarpone cream and cocoa',
      price: 12,
      badges: [],
    },
    {
      name: 'Sorbet Trio',
      description: 'Three scoops of house-made seasonal sorbets',
      price: 10,
      badges: ['Vegan'],
    },
  ],
}

const getBadgeStyles = (badge: string) => {
  switch (badge) {
    case 'Signature':
    case 'Chef\'s Choice':
      return 'bg-gold-100 text-gold-700'
    case 'Popular':
      return 'bg-teal-100 text-teal-700'
    case 'Premium':
      return 'bg-purple-100 text-purple-700'
    case 'Fresh Daily':
      return 'bg-emerald-100 text-emerald-700'
    case 'Vegetarian':
    case 'Vegan':
      return 'bg-green-100 text-green-700'
    case 'Non-Alcoholic':
      return 'bg-blue-100 text-blue-700'
    default:
      return 'bg-gray-100 text-gray-700'
  }
}

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('starters')

  return (
    <div className="min-h-screen bg-sand-50">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=2574&auto=format&fit=crop"
            alt="Menu hero"
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
            Explore Our Offerings
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4"
          >
            Our Menu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-white/70 text-lg max-w-2xl mx-auto"
          >
            Fresh catches and signature dishes, crafted with passion and the finest ingredients
          </motion.p>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="sticky top-20 md:top-24 z-30 bg-white/80 backdrop-blur-lg border-b border-sand-200 shadow-sm">
        <div className="container-custom py-4">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full whitespace-nowrap 
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

      {/* Menu Items */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
            >
              {/* Category Title */}
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-ocean-950 mb-4">
                  {categories.find(c => c.id === activeCategory)?.name}
                </h2>
                <div className="decorative-line mx-auto" />
              </div>

              {/* Menu Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
                {menuItems[activeCategory as keyof typeof menuItems].map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                    className="menu-item-hover bg-white rounded-xl p-6 shadow-md shadow-ocean-950/5
                             hover:shadow-lg hover:shadow-ocean-950/10 transition-all duration-300"
                  >
                    <div className="flex justify-between items-start gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap mb-2">
                          <h3 className="text-lg font-serif font-semibold text-ocean-950">
                            {item.name}
                          </h3>
                          {item.badges.map((badge) => (
                            <span
                              key={badge}
                              className={`text-xs px-2 py-0.5 rounded-full font-medium ${getBadgeStyles(badge)}`}
                            >
                              {badge}
                            </span>
                          ))}
                        </div>
                        <p className="text-ocean-600/70 text-sm leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                      <div className="text-xl font-bold text-gold-600 whitespace-nowrap">
                        ${item.price}
                      </div>
                    </div>
                    
                    {/* Decorative line */}
                    <div className="mt-4 pt-4 border-t border-dashed border-sand-200">
                      <div className="flex items-center gap-4 text-xs text-ocean-500">
                        <span className="flex items-center gap-1">
                          <Leaf className="w-3.5 h-3.5" />
                          Fresh ingredients
                        </span>
                        <span className="flex items-center gap-1">
                          <Star className="w-3.5 h-3.5" />
                          Chef prepared
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dietary Info */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 p-6 bg-sand-100 rounded-2xl max-w-3xl mx-auto text-center"
          >
            <h4 className="font-semibold text-ocean-800 mb-3">Dietary Information</h4>
            <p className="text-ocean-600/70 text-sm mb-4">
              Please inform your server of any allergies or dietary restrictions. We are happy to 
              accommodate special requests and can modify many dishes to suit your needs.
            </p>
            <div className="flex flex-wrap justify-center gap-3 text-xs">
              <span className="flex items-center gap-1 px-3 py-1.5 bg-white rounded-full">
                <Leaf className="w-3.5 h-3.5 text-green-600" />
                Vegetarian options available
              </span>
              <span className="flex items-center gap-1 px-3 py-1.5 bg-white rounded-full">
                <Wheat className="w-3.5 h-3.5 text-amber-600" />
                Gluten-free options available
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

