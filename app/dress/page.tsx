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
    price: "DH 180",
    colors: { ziti: "https://i.ibb.co/cctY5XTd/z.jpg" },
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    defaultColor: "ziti",
  },
  {
    id: 2,
    name: "Chic Summer Dress",
    description: "Lightweight cotton perfect for summer days.",
    price: "DH 200",
    colors: { black: "https://i.ibb.co/bpcdNrj/bleumarie.jpg" },
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    defaultColor: "black",
  },
  {
    id: 3,
    name: "Classic Dress",
    description: "Timeless dress suitable for any event.",
    price: "DH 180",
    colors: { beige: "https://i.ibb.co/fz0zQtk6/beige.jpg", maroon: "https://i.ibb.co/Rkwd1Mhz/hmar.jpg", brown: "https://i.ibb.co/0yGpVLrF/9ahwi.jpg" },
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    defaultColor: "beige",
  },
  {
    id: 5,
    name: "Elegant Brown Dress",
    description: "A luxurious silk dress for special occasions.",
    price: "DH 250",
    colors: { brown: "https://i.ibb.co/S7MdDb8X/brown.jpg" },
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    defaultColor: "brown",
  },
  {
    id: 6,
    name: "Elegant Borgandi Dress",
    description: "A luxurious silk dress for special occasions.",
    price: "DH 220",
    colors: { burgundy:"https://i.ibb.co/Q3gV3Y8z/borgandi.jpg" },
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    defaultColor: "burgundy",
  },
  {
    id: 7,
    name: "Elegant Black Dress",
    description: "A luxurious silk dress for special occasions.",
    price: "DH 180",
    colors: { black: "https://i.ibb.co/HfpbP4bt/khal.jpg" },
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    defaultColor: "black",
  },
  {
    id: 8,
    name: "Elegant Gray Dress",
    description: "A luxurious silk dress for special occasions.",
    price: "DH 200",
    colors: { gray: "https://i.ibb.co/hx0hctNv/gris.jpg" },
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    defaultColor: "gray",
  },
  {
    id: 9,
    name: "Elegant Borgandi kabardina",
    description: "A luxurious silk dress for special occasions.",
    price: "DH 220",
    colors: { burgundy: "https://i.ibb.co/Djq0yF4/gabardina.jpg" },
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    defaultColor: "burgundy",
  },
  ]

  const [likedDresses, setLikedDresses] = useState<number[]>([])

  const toggleLike = (dressId: number) => {
    setLikedDresses((prev) =>
      prev.includes(dressId) ? prev.filter((id) => id !== dressId) : [...prev, dressId]
    )
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen py-16 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mt-4 text-center " style={{marginTop:'50px'}}>Dress Collection</h1>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-10">
            {dresses.map((dress) => {
              const currentImage = dress.colors[dress.defaultColor as keyof typeof dress.colors]
              const isLiked = likedDresses.includes(dress.id)

              return (
                <div key={dress.id} className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square bg-muted">
                  <Link href={`/dress/${dress.id}`}>
                    <img
                      src={currentImage || "/placeholder.svg"}
                      alt={dress.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </Link>

                  {/* Heart button */}
                  <button
                    onClick={(e) => {
                      e.preventDefault()
                      e.stopPropagation()
                      toggleLike(dress.id)
                    }}
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
      </div>
    </>
  )
}
