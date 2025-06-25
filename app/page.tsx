import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ProductGrid } from "@/components/product-grid"
import { Sidebar } from "@/components/sidebar"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CurrencyProvider } from "@/contexts/currency-context"

export default function HomePage() {
  return (
    <CurrencyProvider>
      <div className="min-h-screen bg-white">
        <Navigation currentPage="home" />

        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <Image
              src="/placeholder.svg?height=1080&width=1920"
              alt="Luxury Hair Extensions"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          </div>

          <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block">Crown Enterprises</span>
              
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl mb-8 font-light max-w-3xl mx-auto leading-relaxed">
              Shop top-quality human hair extensions, wigs, and more
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-black hover:bg-gray-100 text-lg px-8 py-4 h-auto font-semibold transition-all duration-300 transform hover:scale-105"
            >
              <Link href="/category/all-products">Shop Now</Link>
            </Button>
          </div>
        </section>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar */}
            <div className="lg:w-1/4">
              <Sidebar />
            </div>

            {/* Product Grid */}
            <div className="lg:w-3/4">
              <div className="mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Featured Products</h2>
                <p className="text-gray-600">Discover our premium collection of hair extensions</p>
              </div>
              <ProductGrid />
            </div>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </CurrencyProvider>
  )
}
