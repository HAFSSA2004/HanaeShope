"use client"

import { useState, use } from "react"
import Navbar from "@/components/navbar"
import { useCartContext } from "@/hooks/use-cart"

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
    colors: {
      beige: "https://i.ibb.co/fz0zQtk6/beige.jpg",
      maroon: "https://i.ibb.co/Rkwd1Mhz/hmar.jpg",
      brown: "https://i.ibb.co/0yGpVLrF/9ahwi.jpg",
    },
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
    name: "Elegant Borgandi Kabardina",
    description: "A luxurious silk dress for special occasions.",
    price: "DH 220",
    colors: { burgundy: "https://i.ibb.co/Djq0yF4/gabardina.jpg" },
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    defaultColor: "burgundy",
  },
]

const colorMap: { [key: string]: string } = {
  brown: "#8B4513",
  beige: "#F5F5DC",
  black: "#000000",
  gray: "#808080",
  burgundy: "#800020",
  ziti: "#224605ff",
}

export default function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  const dress = dresses.find((d) => d.id === Number.parseInt(id))
  const { addItem } = useCartContext()

  const [selectedColor, setSelectedColor] = useState(dress?.defaultColor || "")
  const [selectedSize, setSelectedSize] = useState<string | null>(null)

  if (!dress) {
    return (
      <>
        <Navbar />
        <div className="min-h-screen flex items-center justify-center">
          <p className="text-lg">Product not found</p>
        </div>
      </>
    )
  }

  const currentImage = dress.colors[selectedColor as keyof typeof dress.colors]

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size")
      return
    }

    addItem({
      id: `${dress.id}-${selectedColor}-${selectedSize}`,
      name: dress.name,
      price: parseInt(dress.price.replace("DH ", "")),
      quantity: 1,
      image: currentImage, // full URL
      color: selectedColor,
      size: selectedSize,
    })

    alert("Added to cart!")
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div style={{ width: "300px", display: "flex", justifyContent: "center", alignItems: "center", margin: "0 auto" }}>
              <img
                src={currentImage || "/placeholder.svg"}
                alt={dress.name}
                className="w-full h-full object-cover max-h-[400px]"
              />
            </div>

            <div className="flex flex-col justify-start" style={{ marginTop: "70px" }}>
              <h1 className="text-4xl font-serif font-bold mt-4">{dress.name}</h1>
              <p className="text-foreground/70 text-lg mt-4">{dress.description}</p>

              <div className="mb-6">
                <p className="text-3xl font-bold text-foreground">{dress.price}</p>
              </div>

              {/* Colors */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold mb-3">Available Colors</h3>
                <div className="flex gap-4 flex-wrap">
                  {Object.keys(dress.colors).map((color) => (
                    <button
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={`rounded-full transition-all duration-200 shadow-md hover:shadow-lg ${selectedColor === color ? "ring-2 ring-offset-2 ring-foreground scale-110" : "border-2 border-border hover:scale-105"}`}
                      style={{ backgroundColor: colorMap[color] || color, width: "30px", height: "30px" }}
                      title={color}
                      aria-label={`Select ${color} color`}
                    />
                  ))}
                </div>
                {selectedColor && (
                  <p className="text-sm text-foreground/70 mt-3 capitalize">
                    Selected: <span className="font-semibold">{selectedColor}</span>
                  </p>
                )}
              </div>

              {/* Sizes */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold mb-3">Select Size</h3>
                <div className="flex flex-wrap gap-2">
                  {dress.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${selectedSize === size ? "bg-primary text-primary-foreground ring-2 ring-primary ring-offset-2" : "bg-muted text-foreground border border-border hover:bg-muted/80"}`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                {selectedSize && (
                  <p className="text-sm text-foreground/70 mt-2">
                    Size selected: <span className="font-semibold">{selectedSize}</span>
                  </p>
                )}
              </div>

              {/* Add to Cart */}
              <button
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity duration-200"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>

              {/* Additional Info */}
              {selectedColor && selectedSize && (
                <div className="mt-6 p-4 bg-muted rounded-lg border border-border">
                  <p className="text-sm text-foreground/70">
                    Ready to add: <span className="font-semibold capitalize">{selectedColor}</span> dress in size{" "}
                    <span className="font-semibold">{selectedSize}</span>
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
