import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Sprout, ShoppingCart, MapPin, TrendingUp, Users, Leaf } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-green-100">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Leaf className="h-8 w-8 text-green-600" />
              <h1 className="text-2xl font-bold text-green-800">FarmConnect</h1>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="#features" className="text-gray-600 hover:text-green-600">
                Features
              </Link>
              <Link href="#about" className="text-gray-600 hover:text-green-600">
                About
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-green-600">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-green-800 mb-6">Smart Farming Made Simple</h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Connect farmers with buyers, get crop suggestions, track growth, and predict weather impacts - all in one
            platform
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/farmer-dashboard">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg">
                <Sprout className="mr-2 h-5 w-5" />
                I'm a Farmer
              </Button>
            </Link>
            <Link href="/buyer-dashboard">
              <Button
                size="lg"
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50 px-8 py-4 text-lg"
              >
                <ShoppingCart className="mr-2 h-5 w-5" />
                I'm a Buyer
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 px-4 bg-white">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center text-green-800 mb-12">Key Features</h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <MapPin className="h-10 w-10 text-green-600 mb-2" />
                <CardTitle className="text-green-800">Geo-based Crop Suggestions</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Get personalized crop recommendations based on your location, soil type, and climate conditions.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Sprout className="h-10 w-10 text-green-600 mb-2" />
                <CardTitle className="text-green-800">Lifecycle Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Track your crops from seed to harvest with step-by-step guidance and real-time alerts.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <TrendingUp className="h-10 w-10 text-green-600 mb-2" />
                <CardTitle className="text-green-800">Market Insights</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Access previous year market prices and get cultivation count alerts to optimize profits.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <ShoppingCart className="h-10 w-10 text-green-600 mb-2" />
                <CardTitle className="text-green-800">Direct Marketplace</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Sell directly to buyers without middlemen. Browse farmer profiles and fresh produce.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-10 w-10 text-green-600 mb-2" />
                <CardTitle className="text-green-800">Weather Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Get weather predictions and understand potential impacts on your crops with smart alerts.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-green-200 hover:shadow-lg transition-shadow">
              <CardHeader>
                <Leaf className="h-10 w-10 text-green-600 mb-2" />
                <CardTitle className="text-green-800">Cost Estimation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Calculate estimated expenses and requirements for any suitable crop production per square foot.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-800 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Leaf className="h-6 w-6" />
            <span className="text-xl font-bold">FarmConnect</span>
          </div>
          <p className="text-green-200">Connecting farmers and buyers for a sustainable future</p>
        </div>
      </footer>
    </div>
  )
}
