import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Mail, Phone, MapPin, Clock } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { CurrencyProvider } from "@/contexts/currency-context"

export default function ContactPage() {
  return (
    <CurrencyProvider>
      <div className="min-h-screen bg-gray-50">
        <Navigation currentPage="contact" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">We'd Love to Hear From You</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Have questions about our products or need personalized recommendations? Our team is here to help you find
              the perfect hair extensions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="shadow-lg border-0">
              <CardContent className="p-8">
                <h2 className="text-2xl font-semibold text-gray-900 mb-6">Send us a message</h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name
                    </label>
                    <Input id="name" type="text" placeholder="Enter your full name" className="w-full" />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address
                    </label>
                    <Input id="email" type="email" placeholder="Enter your email address" className="w-full" />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <Textarea id="message" placeholder="Tell us how we can help you..." rows={6} className="w-full" />
                  </div>

                  <Button className="w-full bg-black hover:bg-gray-800 text-white py-3 text-lg">Send Message</Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="shadow-lg border-0">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-6">Get in touch</h2>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <Mail className="h-6 w-6 text-gray-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">Email</h3>
                        <p className="text-gray-600">chennai@geniushairs.com</p>
                        <p className="text-gray-600">support@geniushairs.com</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <Phone className="h-6 w-6 text-gray-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                        <p className="text-gray-600">+91 84 2862 2862</p>
                        <p className="text-gray-600">+91 98 4567 8901</p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <MapPin className="h-6 w-6 text-gray-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">Address</h3>
                        <p className="text-gray-600">
                          123 Beauty Street
                          <br />
                          Chennai, Tamil Nadu 600001
                          <br />
                          India
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <Clock className="h-6 w-6 text-gray-600" />
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">Business Hours</h3>
                        <p className="text-gray-600">
                          Monday - Saturday: 9:00 AM - 7:00 PM
                          <br />
                          Sunday: 10:00 AM - 5:00 PM
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="shadow-lg border-0 bg-black text-white">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold mb-4">Need immediate help?</h3>
                  <p className="text-gray-300 mb-4">
                    Our customer service team is available to assist you with any questions about our products,
                    shipping, or returns.
                  </p>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">
                    Live Chat Support
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </CurrencyProvider>
  )
}
