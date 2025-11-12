"use client"

import { useEffect, useState } from "react"

export default function Hero() {
  const images = ["/z.jpeg", "/zitirobe.jpeg", "/kimono9ahwi.jpeg", "/gris.jpeg"]
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  // Change image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [images.length])

  // Scroll smoothly to the collections section
  const scrollToCollections = () => {
    const section = document.getElementById("collections")
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="pt-20 pb-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/40 to-background transition-all duration-500">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-start">
          {/* Contenu texte */}
          <div className="space-y-8 md:mt-8 lg:mt-12">
            <div className="space-y-4">
              <h2 className="text-sm uppercase tracking-widest text-foreground/60">Élégance Intemporelle</h2>
              <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight text-pretty">
                Modest Women Clothes
              </h1>
              <p className="text-lg text-foreground/70 max-w-md leading-relaxed">
                Découvrez des vêtements hijabi raffinés, conçus pour exprimer votre féminité avec élégance et confiance.
              </p>
            </div>

            <button
              onClick={scrollToCollections} // ✅ scrolls to the collections section
              className="bg-primary text-primary-foreground px-8 py-3 text-sm uppercase tracking-wider hover:bg-primary/90 transition rounded-lg shadow-md"
            >
              Explorer
            </button>
          </div>

          {/* Diaporama d'images */}
          <div className="relative aspect-square rounded-xl overflow-hidden bg-muted shadow-lg">
            {images.map((img, index) => (
              <img
                key={index}
                src={img}
                alt="Collection HanaeShop"
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                  index === currentImageIndex ? "opacity-100" : "opacity-0"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
