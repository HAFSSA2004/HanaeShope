export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/40 to-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-sm uppercase tracking-widest text-foreground/60">Timeless Elegance</h2>
              <h1 className="text-5xl md:text-6xl font-serif font-bold leading-tight text-pretty">
                Modest Fashion Redefined
              </h1>
              <p className="text-lg text-foreground/70 max-w-md leading-relaxed">
                Discover premium hijabi clothing that celebrates your style with sophistication and grace.
              </p>
            </div>

            <button className="bg-primary text-primary-foreground px-8 py-3 text-sm uppercase tracking-wider hover:bg-primary/90 transition">
              Explore Collection
            </button>
          </div>

          {/* Image */}
          <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
            <img src="/z.jpeg " alt="hanaeShop collection" className="w-full h-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  )
}
