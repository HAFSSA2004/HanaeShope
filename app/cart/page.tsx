"use client"

import { useState } from "react"
import { useCartContext } from "@/hooks/use-cart"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Trash2, Minus, Plus, ShoppingBag } from "lucide-react"
import Navbar from "@/components/navbar"

export default function CartPage() {
  const { items, removeItem, updateQuantity, clearCart } = useCartContext()
  const router = useRouter()

  const [city, setCity] = useState("tanger")
  const [fullName, setFullName] = useState("")
  const [phone, setPhone] = useState("")
  const [address, setAddress] = useState("")
  const [zip, setZip] = useState("")
  const [notes, setNotes] = useState("")
  const [email, setEmail] = useState("")

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const deliveryFees = {
    tanger: 20,
    casablanca: 30,
    rabat: 30,
    agadir: 35,
    l3ayoun: 45,
    hocaima: 45,
    other: 35
  }

  const deliveryFee = deliveryFees[city] || deliveryFees["other"]
  const total = subtotal + deliveryFee

  const handlePayOnDelivery = async () => {
    const orderData = {
      fullName,
      phone,
      address,
      zip,
      notes,
      email,
      city,
      items,
      subtotal,
      deliveryFee,
      total,
      date: new Date().toISOString()
    }

    const response = await fetch("/api/order", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(orderData)
    })

    if (response.ok) {
      // ✅ Reset cart and form fields
      clearCart()
      setFullName("")
      setPhone("")
      setAddress("")
      setZip("")
      setNotes("")
      setEmail("")
      setCity("tanger")

      router.push("/order-success")
    } else {
      alert("Something went wrong. Try again.")
    }
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-background flex flex-col items-center justify-center">
        <ShoppingBag className="w-16 h-16 text-muted-foreground" />
        <h2 className="text-2xl font-semibold mt-4">Your cart is empty</h2>
      </div>
    )
  }

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-background pt-24">
        <h1 className="text-3xl font-semibold text-center">Shopping Cart</h1>

        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {items.map((item) => (
              <div key={item.id} className="flex gap-6 border p-6 rounded-lg bg-card">
                <img src={item.image} className="w-24 h-24 object-cover rounded" />
                <div className="flex-1">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  {item.size && <p className="text-sm text-muted-foreground">Size: {item.size}</p>}
                  <p className="mt-1">DH {item.price}</p>

                  <div className="flex items-center gap-3 mt-4">
                    <div className="flex border rounded-lg">
                      <button
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="p-2"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="px-3">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-2"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    <span className="ml-auto font-semibold">
                      DH {(item.price * item.quantity).toFixed(2)}
                    </span>
                  </div>
                </div>

                <button onClick={() => removeItem(item.id)} className="text-destructive">
                  <Trash2 />
                </button>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="border p-6 rounded-lg bg-card space-y-6">

            <h2 className="text-xl font-semibold">Order Summary</h2>

            {/* City */}
            <div>
              <label className="text-sm">City</label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="w-full border p-2 rounded-lg bg-muted mt-1"
              >
                <option value="tanger">Tanger</option>
                <option value="casablanca">Casablanca</option>
                <option value="rabat">Rabat</option>
                <option value="agadir">Agadir</option>
                <option value="l3ayoun">L3ayoun</option>
                <option value="hocaima">Hocaima</option>
                <option value="other">Other</option>
              </select>
            </div>

            {/* Delivery Info */}
            <div className="space-y-3">
              <h3 className="font-semibold">Delivery Information</h3>

              <input className="input" placeholder="Full Name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
              <input className="input" placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
              <input className="input" placeholder="Email (for receipt)" value={email} onChange={(e) => setEmail(e.target.value)} />
              <input className="input" placeholder="Address" value={address} onChange={(e) => setAddress(e.target.value)} />
              <input className="input" placeholder="Zip Code" value={zip} onChange={(e) => setZip(e.target.value)} />

              <textarea
                className="input"
                placeholder="Notes (optional)"
                rows={2}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>

            {/* Summary */}
            <div className="text-sm">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>DH {subtotal.toFixed(2)}</span>
              </div>

              <div className="flex justify-between">
                <span>Delivery Fee</span>
                <span>DH {deliveryFee}</span>
              </div>

              <div className="flex justify-between font-semibold border-t pt-2 mt-2">
                <span>Total</span>
                <span>DH {total.toFixed(2)}</span>
              </div>
            </div>

            {/* Pay On Delivery */}
            <Button
              onClick={handlePayOnDelivery}
              className="w-full bg-green-600 hover:bg-green-700 text-white"
            >
              Pay on Delivery
            </Button>
          </div>

        </div>
      </div>
    </>
  )
}
