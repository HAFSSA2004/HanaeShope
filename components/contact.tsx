"use client"

import { useEffect, useState } from "react"
import { Mail, Instagram, Facebook } from "lucide-react"

export default function Contact() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background to-accent/5">
      <div className="max-w-7xl mx-auto">
        <div className={`${isVisible ? "animate-fade-in" : "opacity-0"} text-center mb-16`}>
          <p className="text-accent text-lg font-medium mb-2">Get in Touch</p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground text-balance">
            Contact HanaeShop Online
          </h2>
          <p className="text-lg text-muted-foreground mt-4">
            We work entirely online. Reach us via email or follow us on social media.
          </p>
        </div>

        <div className={`${isVisible ? "animate-fade-in-up" : "opacity-0"} grid md:grid-cols-2 gap-12`}>
          {/* Email */}
          <div className="bg-card rounded-2xl shadow-md p-8 flex flex-col items-center space-y-6">
            <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
              <Mail size={24} className="text-accent" />
            </div>
            <div className="text-center">
              <h3 className="font-semibold text-foreground mb-1">Email Us</h3>
              <p className="text-muted-foreground">hello@hanaeshop.com</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="bg-card rounded-2xl shadow-md p-8 flex flex-col items-center space-y-6">
            <h3 className="text-2xl font-bold text-foreground mb-4">Follow Our Journey</h3>
            <div className="flex gap-4 flex-wrap">
              <a
                href="https://www.instagram.com/hanae_shoppe/"
                className="w-12 h-12 rounded-full bg-accent/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all text-accent"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                className="w-12 h-12 rounded-full bg-accent/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all text-accent"
              >
                <Facebook size={20} />
              </a>
             <a
  href="https://wa.me/1234567890"
  className="w-12 h-12 rounded-full bg-accent/10 hover:bg-accent hover:text-accent-foreground flex items-center justify-center transition-all text-accent"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path d="M20.52 3.48A11.95 11.95 0 0012 0C5.37 0 0 5.37 0 12c0 2.11.55 4.09 1.52 5.86L0 24l6.48-1.52A11.95 11.95 0 0012 24c6.63 0 12-5.37 12-12 0-3.2-1.23-6.21-3.48-8.52zM12 22c-1.92 0-3.76-.5-5.34-1.37l-.38-.22-3.85.91.91-3.85-.22-.38A9.96 9.96 0 012 12c0-5.52 4.48-10 10-10s10 4.48 10 10-4.48 10-10 10zm5.27-7.74c-.26-.13-1.54-.76-1.78-.85-.24-.09-.42-.13-.6.13s-.69.85-.84 1.03c-.15.17-.3.19-.56.06-.26-.13-1.1-.41-2.1-1.3-.78-.69-1.31-1.55-1.46-1.81-.15-.26-.02-.4.11-.53.11-.11.26-.3.39-.45.13-.15.17-.26.26-.43.09-.17.04-.32-.02-.45-.06-.13-.6-1.44-.82-1.98-.22-.52-.45-.45-.6-.46-.15-.01-.32-.01-.49-.01s-.45.06-.68.32c-.23.26-.89.87-.89 2.12 0 1.24.91 2.45 1.03 2.62.11.17 1.78 2.72 4.31 3.81 2.53 1.09 2.53.73 2.99.68.46-.06 1.54-.63 1.76-1.24.22-.61.22-1.13.15-1.24-.06-.11-.22-.17-.48-.3z" />
  </svg>
</a>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
