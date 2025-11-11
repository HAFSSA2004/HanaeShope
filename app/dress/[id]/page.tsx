"use client"

import { useState, use } from "react"
import Navbar from "@/components/navbar"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"

const dresses = [
  {
    id: 1,
    name: "Elegant Ziti Dress",
    description: "A luxurious silk dress for special occasions.",
    price: "DH 180",
    colors: { ziti: "/zitirobe.jpeg" },
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    defaultColor: "ziti",
  },
  {
    id: 2,
    name: "Chic Summer Dress",
    description: "Lightweight cotton perfect for summer days.",
    price: "DH 200",
    colors: { ziti: "/ziti.jpeg", black: "/bleumarie.jpeg" },
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    defaultColor: "ziti",
  },
  {
    id: 3,
    name: "Classic Dress",
    description: "Timeless dress suitable for any event.",
    price: "DH 180",
    colors: { beige: "/beige.jpeg", maroon: "/hmar.jpeg", brown: "/9ahwi.jpeg" },
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    defaultColor: "beige",
  },
  {
    id: 5,
    name: "Elegant Brown Dress",
    description: "A luxurious silk dress for special occasions.",
    price: "DH 250",
    colors: { brown: "/brown.jpeg" },
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    defaultColor: "brown",
  },
  {
    id: 6,
    name: "Elegant Borgandi Dress",
    description: "A luxurious silk dress for special occasions.",
    price: "DH 220",
    colors: { burgundy: "/borgandi.jpeg" },
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    defaultColor: "burgundy",
  },
  {
    id: 7,
    name: "Elegant Black Dress",
    description: "A luxurious silk dress for special occasions.",
    price: "DH 180",
    colors: { black: "/khal.jpeg" },
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    defaultColor: "black",
  },
  {
    id: 8,
    name: "Elegant Gray Dress",
    description: "A luxurious silk dress for special occasions.",
    price: "DH 200",
    colors: { gray: "/gris.jpeg" },
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    defaultColor: "gray",
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

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background">
        {/* Back button */}
        <div className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b border-border">
          
        </div>

        {/* Main content - Left image, Right details */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left: Image */}
          <div
  style={{
    width: "300px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 auto", // centers horizontally if needed
  }}
>
  <img
    src={currentImage || "/placeholder.svg"}
    alt={dress.name}
    className="w-full h-full object-cover max-h-[400px]"
  />
</div>


            {/* Right: Product Details */}
            <div className="flex flex-col justify-start"style={{marginTop:'70px'}}>
              <h1 className="text-4xl font-serif font-bold mt-4" >{dress.name}</h1>
              <p className="text-foreground/70 text-lg mt-4">{dress.description}</p>

              {/* Price */}
              <div className="mb-6">
                <p className="text-3xl font-bold text-foreground">{dress.price}</p>
              </div>

              {/* Colors Section */}
              <div className="mb-6">
                <h3 className="text-sm font-semibold mb-3">Available Colors</h3>
                <div className="flex gap-4 flex-wrap">
                  {Object.keys(dress.colors).map((color) => (
                    <button
                    
                      key={color}
                      onClick={() => setSelectedColor(color)}
                      className={` rounded-full transition-all duration-200 shadow-md hover:shadow-lg ${
                        selectedColor === color
                          ? "ring-2 ring-offset-2 ring-foreground scale-110"
                          : "border-2 border-border hover:scale-105"
                      }`}
                      style={{ backgroundColor: colorMap[color] || color,width:'30px',height:'30px' }}
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

              {/* Sizes Section */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold mb-3">Select Size</h3>
                <div className="flex flex-wrap gap-2">
                  {dress.sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                        selectedSize === size
                          ? "bg-primary text-primary-foreground ring-2 ring-primary ring-offset-2"
                          : "bg-muted text-foreground border border-border hover:bg-muted/80"
                      }`}
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

              {/* Add to Cart Button */}
              <button className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold text-lg hover:opacity-90 transition-opacity duration-200">
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
