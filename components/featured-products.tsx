"use client"

import Link from "next/link"
import { useState } from "react"
import { Heart } from "lucide-react" // Using lucide-react for the heart icon

export default function FeaturedProducts() {
  const products = [
    { id: 1, colors: { ziti: "/zitirobe.jpeg" }, defaultColor: "ziti" },
    { id: 2, colors: { ziti: "/ziti.jpeg", black: "/bleumarie.jpeg" }, defaultColor: "ziti" },
    { id: 4, colors: { brown: "/brown.jpeg" }, defaultColor: "brown" },
    { id: 6, colors: { burgundy: "/borgandi.jpeg" }, defaultColor: "burgundy" },
    { id: 7, colors: { black: "/khal.jpeg" }, defaultColor: "black" },
    { id: 5, colors: { beige: "/beige.jpeg", maroon: "/hmar.jpeg", brown: "/9ahwi.jpeg" }, defaultColor: "beige" },
    { id: 8, colors: { gray: "/gris.jpeg" }, defaultColor: "gray" },
    { id: 9, colors: { burgundy: "/gabardina.jpeg" }, defaultColor: "burgundy" },
    { id: 10, colors: { brown: "/kimono9ahwi.jpeg" }, defaultColor: "brown" },
  ]

  // State to track which products are "liked"
  const [likedProducts, setLikedProducts] = useState<number[]>([])

  const toggleLike = (id: number) => {
    setLikedProducts((prev) =>
      prev.includes(id) ? prev.filter((pid) => pid !== id) : [...prev, id]
    )
  }

  return (
    <section className="py-16 px-2 sm:px-4 lg:px-6 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-sm uppercase tracking-widest text-foreground/60">Nos Produits</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-pretty mt-2">
            Découvrez Nos Articles Préférés
          </h3>
          <p className="text-foreground/70 mt-2 max-w-md mx-auto">
            Explorez notre collection de vêtements hijabi élégants et tendance.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {products.map((product) => {
            const isLiked = likedProducts.includes(product.id)
            return (
              <div key={product.id} className="relative group cursor-pointer">
                <Link href={`/product/${product.id}`}>
                  <div className="overflow-hidden bg-muted shadow-sm hover:shadow-lg transition-all duration-300">
                   <img
  src={product.colors[product.defaultColor as keyof typeof product.colors]}
  alt={`Product ${product.id}`}
  className="w-full object-cover group-hover:scale-105 transition duration-300"
  style={{ height: "370px" }}
/>

                  </div>
                </Link>

                {/* Heart button */}
                <button
                  onClick={() => toggleLike(product.id)}
                  className={`absolute top-3 right-3 w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                    isLiked ? "bg-red-500 text-white" : "bg-white text-red-500"
                  }`}
                >
                  <Heart className="w-5 h-5" />
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
