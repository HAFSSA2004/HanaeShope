"use client"

import { useState } from "react"
import { ShoppingCart, Menu, X } from "lucide-react"
import { useCartContext } from "@/hooks/use-cart"
import Link from "next/link"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { items } = useCartContext()

  const totalQuantity = items.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <Link href="/">
              <h1 className="text-2xl font-serif font-bold tracking-tight">hanaeShop</h1>
            </Link>
          </div>

          <div className="hidden md:flex gap-8">
            <a href="#" className="text-foreground/70 hover:text-foreground transition">Shop</a>
            <a href="#" className="text-foreground/70 hover:text-foreground transition">Collections</a>
            <a href="#" className="text-foreground/70 hover:text-foreground transition">About</a>
            <a href="#" className="text-foreground/70 hover:text-foreground transition">Contact</a>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/cart" className="relative">
              <ShoppingCart size={20} className="text-foreground" />
              <span className="absolute -top-2 -right-2 bg-accent text-accent-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {totalQuantity}
              </span>
            </Link>

            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            <a href="#" className="block px-4 py-2 text-foreground/70 hover:text-foreground">Shop</a>
            <a href="#" className="block px-4 py-2 text-foreground/70 hover:text-foreground">Collections</a>
            <a href="#" className="block px-4 py-2 text-foreground/70 hover:text-foreground">About</a>
            <a href="#" className="block px-4 py-2 text-foreground/70 hover:text-foreground">Contact</a>
          </div>
        )}
      </div>
    </nav>
  )
}
