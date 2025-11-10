"use client"
import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Collections from "@/components/collections"
import FeaturedProducts from "@/components/featured-products"
import Footer from "@/components/footer"
import Contact from "@/components/contact"
export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Collections />
      <FeaturedProducts />
        <Contact/>
      <Footer />
    
    </div>
  )
}
