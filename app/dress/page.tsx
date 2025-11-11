"use client"

import { useState } from "react"
import { Heart } from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar"

export default function DressGalleryPage() {
  const dresses = [
    {
      id: 1,
      name: "Elegant Ziti Dress",
      description: "A luxurious silk dress for special occasions.",
      price: "$120",
      colors: { ziti: "/zitirobe.jpeg" },
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      defaultColor: "ziti",
    },
    {
      id: 2,
      name: "Chic Summer Dress",
      description: "Lightweight cotton perfect for summer days.",
      price: "$90",
      colors: { ziti: "/ziti.jpeg", black: "/bleumarie.jpeg" },
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      defaultColor: "ziti",
    },
    {
      id: 3,
      name: "Classic Dress",
      description: "Timeless dress suitable for any event.",
      price: "$150",
      colors: { beige: "/beige.jpeg", maroon: "/hmar.jpeg", brown: "/9ahwi.jpeg" },
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      defaultColor: "beige",
    },
    {
      id: 5,
      name: "Elegant Brown Dress",
      description: "A luxurious silk dress for special occasions.",
      price: "$120",
      colors: { brown: "/brown.jpeg" },
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      defaultColor: "brown",
    },
    {
      id: 6,
      name: "Elegant Borgandi Dress",
      description: "A luxurious silk dress for special occasions.",
      price: "$120",
      colors: { burgundy: "/borgandi.jpeg" },
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      defaultColor: "burgundy",
    },
    {
      id: 7,
      name: "Elegant Black Dress",
      description: "A luxurious silk dress for special occasions.",
      price: "$120",
      colors: { black: "/khal.jpeg" },
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      defaultColor: "black",
    },
    {
      id: 8,
      name: "Elegant Gray Dress",
      description: "A luxurious silk dress for special occasions.",
      price: "$120",
      colors: { gray: "/gris.jpeg" },
      sizes: ["XS", "S", "M", "L", "XL", "XXL"],
      defaultColor: "gray",
    },
  ]

  const [likedDresses, setLikedDresses] = useState<number[]>([])

  const toggleLike = (dressId: number) => {
    setLikedDresses((prev) => (prev.includes(dressId) ? prev.filter((id) => id !== dressId) : [...prev, dressId]))
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mt-4">Dress Collection</h1>
          <p className="text-foreground/70 text-base mb-8">Click on any dress to view details</p>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {dresses.map((dress) => {
              const currentImage = dress.colors[dress.defaultColor as keyof typeof dress.colors]
              const isLiked = likedDresses.includes(dress.id)

              return (
                <Link key={dress.id} href={`/dress/${dress.id}`}>
                  <div className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square bg-muted">
                    <img
                      src={currentImage || "/placeholder.svg"}
                      alt={dress.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />

                    {/* Like button overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-300 flex items-end justify-end p-3">
                      <button
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          toggleLike(dress.id)
                        }}
                        className="bg-white rounded-full p-2 hover:bg-foreground/10 transition-colors duration-200"
                      >
                        <Heart
                          size={20}
                          className={isLiked ? "fill-destructive text-destructive" : "text-foreground"}
                        />
                      </button>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}
