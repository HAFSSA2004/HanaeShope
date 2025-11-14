"use client"

import React, { useState } from "react"
import { Button } from "@/components/ui/button"
import { HelpCircle } from "lucide-react"
import Navbar from "@/components/navbar"

interface CheckoutFormData {
  country: string
  firstName: string
  lastName: string
  address: string
  apartment: string
  postalCode: string
  city: string
  phone: string
  saveInfo: boolean
  smsOptIn: boolean
}

interface CheckoutFormProps {
  onSubmit?: (data: CheckoutFormData) => void
  isLoading?: boolean
}

export default function CheckoutForm({ onSubmit, isLoading = false }: CheckoutFormProps) {
  const [formData, setFormData] = useState<CheckoutFormData>({
    country: "Maroc",
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    postalCode: "",
    city: "",
    phone: "",
    saveInfo: false,
    smsOptIn: false,
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    const checked = (e.target as HTMLInputElement).checked
    setFormData(prev => ({ ...prev, [name]: type === "checkbox" ? checked : value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (onSubmit) onSubmit(formData)
  }

  return (
    <>
      <Navbar />
      <div className="max-w-3xl mx-auto mt-20 p-6">
        <div className="bg-white shadow-lg rounded-xl p-8 space-y-6">
          <h1 className="text-2xl font-bold text-foreground text-center">Pay on Delivery</h1>

          <form onSubmit={handleSubmit} className="space-y-6">

            {/* Country/Region */}
            <div>
              <label className="block text-sm text-muted-foreground mb-2">Pays / Région</label>
              <select
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-green-500"
              >
                <option>Maroc</option>
                <option>Algeria</option>
                <option>Tunisia</option>
                <option>France</option>
                <option>Belgium</option>
              </select>
            </div>

            {/* Name */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-muted-foreground mb-2">Prénom (optionnel)</label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="Prénom"
                  className="w-full px-4 py-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-2">Nom</label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Nom"
                  required
                  className="w-full px-4 py-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>

            {/* Address */}
            <div>
              <label className="block text-sm text-muted-foreground mb-2">Adresse</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                placeholder="Adresse"
                required
                className="w-full px-4 py-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Apartment */}
            <div>
              <label className="block text-sm text-muted-foreground mb-2">Appartement, suite, etc. (optionnel)</label>
              <input
                type="text"
                name="apartment"
                value={formData.apartment}
                onChange={handleInputChange}
                placeholder="Appartement, suite, etc."
                className="w-full px-4 py-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Postal & City */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm text-muted-foreground mb-2">Code postal (facultatif)</label>
                <input
                  type="text"
                  name="postalCode"
                  value={formData.postalCode}
                  onChange={handleInputChange}
                  placeholder="Code postal"
                  className="w-full px-4 py-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-green-500"
                />
              </div>
              <div>
                <label className="block text-sm text-muted-foreground mb-2">Ville</label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="Ville"
                  required
                  className="w-full px-4 py-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-green-500"
                />
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm text-muted-foreground mb-2 flex items-center gap-2">
                Téléphone <HelpCircle className="w-4 h-4 text-muted-foreground cursor-help" />
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                placeholder="Téléphone"
                required
                className="w-full px-4 py-3 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-green-500"
              />
            </div>

            {/* Checkboxes */}
            <div className="space-y-2">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="saveInfo"
                  checked={formData.saveInfo}
                  onChange={handleInputChange}
                  className="w-5 h-5 accent-green-500"
                />
                <span className="text-sm text-foreground">Sauvegarder mes coordonnées</span>
              </label>
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  name="smsOptIn"
                  checked={formData.smsOptIn}
                  onChange={handleInputChange}
                  className="w-5 h-5 accent-green-500"
                />
                <span className="text-sm text-foreground">Recevoir offres par SMS</span>
              </label>
            </div>

            {/* Submit */}
            <Button type="submit" size="lg" className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white">
              {isLoading ? "Processing..." : "Confirmer la commande"}
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
