import Navbar from "@/components/navbar"
export default function DressPage() {
  const dresses = [
    {
      id: 1,
      name: "Elegant Silk Dress",
      description: "A luxurious silk dress for special occasions.",
      price: "$120",
      image: "/zitirobe.jpeg",
    },
    {
      id: 2,
      name: "Chic Summer Dress",
      description: "Lightweight cotton perfect for summer days.",
      price: "$90",
      image: "/borgandi.jpeg",
    },
    {
      id: 3,
      name: "Classic Black Dress",
      description: "Timeless black dress suitable for any event.",
      price: "$150",
      image: "/brown.jpeg",
    },

     {
      id: 4,
      name: "Classic Black Dress",
      description: "Timeless black dress suitable for any event.",
      price: "$150",
      image: "/ziti.jpeg",
    },

{
      id: 5,
      name: "Classic Black Dress",
      description: "Timeless black dress suitable for any event.",
      price: "$150",
      image: "/gris.jpeg",
    },
{
      id: 6,
      name: "Classic Black Dress",
      description: "Timeless black dress suitable for any event.",
      price: "$150",
      image: "/bleumarie.jpeg",
    },

    {
      id: 7,
      name: "Classic Black Dress",
      description: "Timeless black dress suitable for any event.",
      price: "$150",
      image: "/beige.jpeg",
    },
    {
      id: 8,
      name: "Classic Black Dress",
      description: "Timeless black dress suitable for any event.",
      price: "$150",
      image: "/hmar.jpeg",
    },
    {
      id: 9,
      name: "Classic Black Dress",
      description: "Timeless black dress suitable for any event.",
      price: "$150",
      image: "/9ahwi.jpeg",
    },
      /*  {
      id: 10,
      name: "Classic Black Dress",
      description: "Timeless black dress suitable for any event.",
      price: "$150",
      image: "/ens.jpeg",
    },*/
      {
      id: 11,
      name: "Classic Black Dress",
      description: "Timeless black dress suitable for any event.",
      price: "$150",
      image: "/khal.jpeg",
    },
  ]

  return (
   <>
   <Navbar/>
    <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Dress Collection</h1>
        <p className="text-foreground/60 text-lg mb-12">
          Timeless silhouettes for elegant occasions
        </p>

        {/* Dress products grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {dresses.map((dress) => (
            <div
              key={dress.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={dress.image}
                alt={dress.name}
                className="max-h-full max-w-full object-contain"
              />
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold">{dress.name}</h3>
                <p className="text-foreground/60 mt-2">{dress.description}</p>
                <p className="text-lg font-semibold mt-4 text-gray-800">{dress.price}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div></>
  )
}
