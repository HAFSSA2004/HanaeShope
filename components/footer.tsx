export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="font-serif text-xl font-bold">hanaeShop</h3>
            <p className="text-sm opacity-80">Luxury hijabi fashion that celebrates elegance and grace.</p>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="font-semibold uppercase text-sm tracking-wide">Shop</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  All Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Abayas
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Jilbabs
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Hijabs
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-4">
            <h4 className="font-semibold uppercase text-sm tracking-wide">Support</h4>
            <ul className="space-y-2 text-sm opacity-80">
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Shipping Info
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  Returns
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-semibold uppercase text-sm tracking-wide">Newsletter</h4>
            <p className="text-sm opacity-80 mb-3">Subscribe for exclusive offers</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 bg-primary-foreground/10 border border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50 text-sm focus:outline-none"
            />
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm opacity-80">
          <p>&copy; 2025 hanaeShop. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:opacity-100 transition">
              Privacy Policy
            </a>
            <a href="#" className="hover:opacity-100 transition">
              Terms of Service
            </a>
            <a href="#" className="hover:opacity-100 transition">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
