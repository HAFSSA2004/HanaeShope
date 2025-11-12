"use client"

import Link from "next/link"

export default function Collections() {
  const collections = [
    {
      name: "Dress",
      description: "Timeless silhouettes",
      image: "/borgandi.jpeg",
      href: "/dress",
    },
    {
      name: "Kimono",
      description: "Modern elegance",
      image: "/kimono9ahwi.jpeg",
      href: "/kimono",
    },
    {
      name: "Hijabs",
      description: "Premium fabrics",
      image: "/luxury-hijab-collection.jpg",
      href: "/hijabs",
    },
  ]

  return (
    <section id="collections" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm uppercase tracking-widest text-foreground/60">Collections</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold">Shop Our Categories</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {collections.map((collection) => (
            <Link key={collection.name} href={collection.href}>
              <div className="group cursor-pointer">
                <div className="relative aspect-square rounded-lg overflow-hidden bg-muted mb-4">
                  <img
                    src={collection.image || "/placeholder.svg"}
                    alt={collection.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                  />
                </div>
                <h4 className="text-xl font-serif font-bold">{collection.name}</h4>
                <p className="text-foreground/60 text-sm">{collection.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
