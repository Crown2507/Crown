import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, Tag, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const shopLinks = ["Hair Extensions", "Closures", "Frontals", "Blonde Hair", "Ponytail Extensions"]

  const policyLinks = ["Privacy Policy", "Terms and Conditions", "Shipping & Returns", "FAQ", "Delivery Timeline"]

  const socialIcons = [
    { name: "Instagram", icon: "📷", href: "#" },
    { name: "Facebook", icon: "📘", href: "#" },
    { name: "YouTube", icon: "📺", href: "#" },
    { name: "Twitter", icon: "🐦", href: "#" },
  ]

  return (
    <>
      <footer className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Column 1 - Company Info */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-white mb-2">Crown Enterprise</h2>
                <p className="text-yellow-400 text-sm font-medium mb-4">House of real Indian human hair</p>
                <p className="text-gray-300 text-sm leading-relaxed">
                  We are dedicated to providing the finest quality Indian human hair extensions, wigs, and hair
                  accessories. Our commitment to authenticity and excellence has made us a trusted name in the beauty
                  industry for over a decade.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone size={18} className="text-yellow-400 flex-shrink-0" />
                  <a href="tel:+911111111111" className="text-gray-300 hover:text-white transition-colors">
                    +91 1111111111
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail size={18} className="text-yellow-400 flex-shrink-0" />
                  <a href="mailto:chennai@geniushairs.com" className="text-gray-300 hover:text-white transition-colors">
                    chennai@geniushairs.com
                  </a>
                </div>
              </div>
            </div>

            {/* Column 2 - Shop Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white">Shop</h3>
              <ul className="space-y-3">
                {shopLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={`/category/${link.toLowerCase().replace(/\s+/g, "-")}`}
                      className="flex items-center space-x-3 text-gray-300 hover:text-yellow-400 transition-colors group"
                    >
                      <Tag size={16} className="text-yellow-400 group-hover:text-yellow-300 flex-shrink-0" />
                      <span className="text-sm">{link}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 3 - Policy Links */}
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white">Policy</h3>
              <ul className="space-y-3">
                {policyLinks.map((link, index) => (
                  <li key={index}>
                    <Link
                      href={`/policy/${link.toLowerCase().replace(/\s+/g, "-").replace("&", "and")}`}
                      className="flex items-center space-x-3 text-gray-300 hover:text-yellow-400 transition-colors group"
                    >
                      <Tag size={16} className="text-yellow-400 group-hover:text-yellow-300 flex-shrink-0" />
                      <span className="text-sm">{link}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 4 - Partners & Social */}
            <div className="space-y-6">
              {/* Alibaba Logo */}
              <div>
                <Image
                  src="/placeholder.svg?height=40&width=120"
                  alt="Alibaba Partner"
                  width={120}
                  height={40}
                  className="bg-white rounded px-2 py-1"
                />
              </div>

              {/* Social Media Icons */}
              <div>
                <h4 className="text-lg font-medium text-white mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  {socialIcons.map((social, index) => (
                    <Link
                      key={index}
                      href={social.href}
                      className="w-10 h-10 bg-gray-800 hover:bg-yellow-400 rounded-full flex items-center justify-center transition-colors group"
                    >
                      <span className="text-lg group-hover:scale-110 transition-transform">{social.icon}</span>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Payment Partners */}
              <div>
                <h4 className="text-lg font-medium text-white mb-4">Secure Payments</h4>
                <div className="space-y-4">
                  {/* Razorpay */}
                  <div>
                    <Image
                      src="/placeholder.svg?height=30&width=100"
                      alt="Razorpay"
                      width={100}
                      height={30}
                      className="bg-white rounded px-2 py-1"
                    />
                  </div>

                  {/* Payment Cards */}
                  <div className="grid grid-cols-4 gap-2">
                    <div className="bg-white rounded p-1 flex items-center justify-center">
                      <Image src="/placeholder.svg?height=20&width=32" alt="Visa" width={32} height={20} />
                    </div>
                    <div className="bg-white rounded p-1 flex items-center justify-center">
                      <Image src="/placeholder.svg?height=20&width=32" alt="Mastercard" width={32} height={20} />
                    </div>
                    <div className="bg-white rounded p-1 flex items-center justify-center">
                      <Image src="/placeholder.svg?height=20&width=32" alt="RuPay" width={32} height={20} />
                    </div>
                    <div className="bg-white rounded p-1 flex items-center justify-center">
                      <Image src="/placeholder.svg?height=20&width=32" alt="UPI" width={32} height={20} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="text-center">
              <p className="text-gray-400 text-sm">© 2025 Crown Enterprise. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          asChild
          size="lg"
          className="bg-green-500 hover:bg-green-600 text-white rounded-full w-14 h-14 p-0 shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse hover:animate-none"
        >
          <a
            href="https://wa.me/918428622862"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact us on WhatsApp"
          >
            <MessageCircle size={24} />
          </a>
        </Button>
      </div>
    </>
  )
}
