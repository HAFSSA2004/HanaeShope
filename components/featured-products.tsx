export default function FeaturedProducts() {
  const products = [
    {
      id: 1,
      name: "Silk Abaya",
      price: "$299",
      image: "/zitirobe.jpeg",
      color: "Black",
    },
    {
      id: 2,
      name: "Embroidered Jilbab",
      price: "$349",
      image: "/borgandi.jpeg",
      color: "Charcoal",
    },
    {
      id: 3,
      name: "Premium Hijab Set",
      price: "$199",
      image: "/bleumarie.jpeg",
      color: "Cream",
    },
    {
      id: 4,
      name: "Layered Abaya",
      price: "$329",
      image: "/brown.jpeg",
      color: "Navy",
    },
  ]

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-sm uppercase tracking-widest text-foreground/60">Featured</h2>
          <h3 className="text-4xl md:text-5xl font-serif font-bold">New Arrivals</h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div key={product.id} className="group">
              <div className="relative aspect-square rounded-lg overflow-hidden bg-muted mb-4">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </div>
              <h4 className="font-serif font-bold text-lg">{product.name}</h4>
              <p className="text-foreground/60 text-sm mb-2">{product.color}</p>
              <p className="text-lg font-semibold">{product.price}</p>
              <button className="mt-4 w-full bg-foreground text-background py-2 text-sm uppercase tracking-wider hover:bg-foreground/90 transition">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
