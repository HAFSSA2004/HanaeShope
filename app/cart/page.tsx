"use client"

import { useCartContext } from "@/hooks/use-cart"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Trash2, Minus, Plus, ShoppingBag } from "lucide-react"
import Navbar from "@/components/navbar"

export default function CartPage() {
  const { items, removeItem, updateQuantity } = useCartContext()
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  // Delivery fee instead of tax
  const deliveryFee = 50 // change this value as needed
  const total = subtotal + deliveryFee

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background">
        {/* Header */}
        <div className="border-b border-border bg-card">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <h1 className="text-2xl font-semibold text-foreground">Your Store</h1>
          </div>
        </div>

        {/* Empty State */}
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center space-y-6">
            <div className="flex justify-center">
              <ShoppingBag className="w-16 h-16 text-muted-foreground" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-2">Your cart is empty</h2>
              <p className="text-muted-foreground mb-6">Add some items to get started</p>
              <Link href="/">
                <Button>Continue Shopping</Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-background">
        <h1 className="text-3xl font-semibold text-foreground text-center" style={{ marginTop: '90px' }}>
          Shopping Cart
        </h1>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-6 bg-card border border-border rounded-lg p-6 hover:shadow-sm transition-shadow"
                >
                  {/* Product Image */}
                  <div className="flex-shrink-0">
                    <img
                      src={item.image || "/placeholder.svg"}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded bg-muted"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 flex flex-col justify-between min-w-0">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground truncate">{item.name}</h3>
                      {item.size && (
                        <p className="text-sm text-muted-foreground mt-1">Size: {item.size}</p>
                      )}
                      <p className="text-muted-foreground text-sm mt-1">DH {item.price.toFixed(2)} </p>
                    </div>

                    {/* Quantity Controls */}
                    <div className="flex items-center gap-3 mt-4">
                      <div className="inline-flex items-center border border-border rounded-lg bg-muted">
                        <button
                          onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                          className="p-2 hover:bg-background transition-colors"
                          aria-label="Decrease quantity"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="p-2 hover:bg-background transition-colors"
                          aria-label="Increase quantity"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <span className="text-sm font-semibold text-foreground ml-auto">
                        DH {(item.price * item.quantity).toFixed(2)}
                      </span>
                    </div>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeItem(item.id)}
                    className="flex-shrink-0 p-2 text-muted-foreground hover:text-destructive hover:bg-destructive/10 rounded transition-colors"
                    aria-label="Remove item"
                  >
                    <Trash2 className="w-5 h-5" />
                  </button>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-card border border-border rounded-lg p-6 sticky top-4 space-y-6">
                <div>
                  <h2 className="text-xl font-semibold text-foreground mb-4">Order Summary</h2>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Subtotal</span>
                      <span className="font-medium text-foreground">DH {subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-muted-foreground">Delivery Fee</span>
                      <span className="font-medium text-foreground">DH {deliveryFee.toFixed(2)}</span>
                    </div>
                    <div className="border-t border-border pt-3 flex justify-between items-center">
                      <span className="font-semibold text-foreground">Total</span>
                      <span className="text-lg font-bold text-foreground">DH {total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Checkout Button */}
                <Link href="/checkout" className="block">
                  <Button size="lg" className="w-full">
                    Proceed to Checkout
                  </Button>
                </Link>

                {/* Pay on Delivery Button */}
                <Link href="/cod-confirmation" className="block">
                  <Button size="lg" variant="secondary" className="w-full mt-2 bg-green-600 hover:bg-green-700 text-white">
                    Pay on Delivery
                  </Button>
                </Link>

                {/* Continue Shopping */}
                <Link href="/" className="block">
                  <Button variant="outline" size="lg" className="w-full bg-transparent mt-2">
                    Continue Shopping
                  </Button>
                </Link>

                <p className="text-xs text-muted-foreground text-center mt-4">Free shipping on orders over DH 500</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
