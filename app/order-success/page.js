export default function OrderSuccess() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <h1 className="text-3xl font-bold mb-4">🎉 Order Successful!</h1>
      <p className="text-lg">Thank you for your purchase. Check your email for the receipt.</p>
     <a href="/"> <button className="btn btn-primary" >Return to the shop </button></a>
    </div>
  )
}
