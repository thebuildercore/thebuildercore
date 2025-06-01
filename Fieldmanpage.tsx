"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ShoppingCart, Star, MapPin, Phone, Mail, Filter, Search, ArrowLeft, Leaf } from "lucide-react"
import Link from "next/link"

export default function BuyerDashboard() {
  const [searchTerm, setSearchTerm] = useState("")

  const farmers = [
    {
      id: 1,
      name: "Rajesh Kumar",
      location: "Punjab, India",
      rating: 4.8,
      reviews: 156,
      specialties: ["Wheat", "Rice", "Corn"],
      phone: "+91 98765 43210",
      email: "rajesh@farm.com",
      verified: true,
    },
    {
      id: 2,
      name: "Priya Sharma",
      location: "Maharashtra, India",
      rating: 4.9,
      reviews: 203,
      specialties: ["Tomatoes", "Onions", "Potatoes"],
      phone: "+91 87654 32109",
      email: "priya@farm.com",
      verified: true,
    },
    {
      id: 3,
      name: "Amit Patel",
      location: "Gujarat, India",
      rating: 4.7,
      reviews: 89,
      specialties: ["Cotton", "Groundnut", "Sugarcane"],
      phone: "+91 76543 21098",
      email: "amit@farm.com",
      verified: false,
    },
  ]

  const products = [
    {
      id: 1,
      name: "Fresh Tomatoes",
      farmer: "Priya Sharma",
      location: "Maharashtra",
      price: "₹40/kg",
      quality: "Grade A",
      quantity: "500 kg available",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.9,
      organic: true,
    },
    {
      id: 2,
      name: "Premium Wheat",
      farmer: "Rajesh Kumar",
      location: "Punjab",
      price: "₹25/kg",
      quality: "Premium",
      quantity: "2 tons available",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.8,
      organic: false,
    },
    {
      id: 3,
      name: "Organic Onions",
      farmer: "Priya Sharma",
      location: "Maharashtra",
      price: "₹35/kg",
      quality: "Grade A",
      quantity: "800 kg available",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.9,
      organic: true,
    },
    {
      id: 4,
      name: "Fresh Corn",
      farmer: "Rajesh Kumar",
      location: "Punjab",
      price: "₹30/kg",
      quality: "Grade B",
      quantity: "1.2 tons available",
      image: "/placeholder.svg?height=200&width=200",
      rating: 4.7,
      organic: false,
    },
  ]

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Link href="/">
                <Button variant="ghost" size="sm">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back
                </Button>
              </Link>
              <div className="flex items-center space-x-2">
                <Leaf className="h-6 w-6 text-green-600" />
                <h1 className="text-xl font-bold text-green-800">Buyer Dashboard</h1>
              </div>
            </div>
            <div className="text-sm text-gray-600">Welcome, Sarah Buyer</div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="products" className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="products">Browse Products</TabsTrigger>
            <TabsTrigger value="farmers">Farmer Profiles</TabsTrigger>
            <TabsTrigger value="orders">My Orders</TabsTrigger>
          </TabsList>

          {/* Products Tab */}
          <TabsContent value="products" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Search className="mr-2 h-5 w-5 text-green-600" />
                  Browse Fresh Produce
                </CardTitle>
                <CardDescription>Find fresh, quality produce directly from farmers</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <Input
                      placeholder="Search for products..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="w-full"
                    />
                  </div>
                  <Button variant="outline" className="flex items-center">
                    <Filter className="mr-2 h-4 w-4" />
                    Filters
                  </Button>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <Card key={product.id} className="border-green-200 hover:shadow-lg transition-shadow">
                  <CardHeader className="pb-2">
                    <img
                      src={product.image || "/placeholder.svg"}
                      alt={product.name}
                      className="w-full h-48 object-cover rounded-lg mb-2"
                    />
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{product.name}</CardTitle>
                      {product.organic && (
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          Organic
                        </Badge>
                      )}
                    </div>
                    <CardDescription>
                      by {product.farmer} • {product.location}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-green-600">{product.price}</span>
                      <div className="flex items-center">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                        <span className="text-sm">{product.rating}</span>
                      </div>
                    </div>
                    <div className="text-sm text-gray-600">
                      <div>Quality: {product.quality}</div>
                      <div>{product.quantity}</div>
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700">
                      <ShoppingCart className="mr-2 h-4 w-4" />
                      Add to Cart
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Farmers Tab */}
          <TabsContent value="farmers" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-green-600" />
                  Farmer Profiles
                </CardTitle>
                <CardDescription>Connect directly with verified farmers in your area</CardDescription>
              </CardHeader>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {farmers.map((farmer) => (
                <Card key={farmer.id} className="border-green-200">
                  <CardHeader>
                    <div className="flex items-start space-x-4">
                      <Avatar className="h-16 w-16">
                        <AvatarImage src={`/placeholder.svg?height=64&width=64`} />
                        <AvatarFallback>
                          {farmer.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2">
                          <CardTitle className="text-lg">{farmer.name}</CardTitle>
                          {farmer.verified && (
                            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                              Verified
                            </Badge>
                          )}
                        </div>
                        <div className="flex items-center text-sm text-gray-600 mt-1">
                          <MapPin className="h-4 w-4 mr-1" />
                          {farmer.location}
                        </div>
                        <div className="flex items-center mt-1">
                          <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                          <span className="text-sm font-medium">{farmer.rating}</span>
                          <span className="text-sm text-gray-600 ml-1">({farmer.reviews} reviews)</span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <h4 className="font-medium mb-2">Specialties:</h4>
                      <div className="flex flex-wrap gap-2">
                        {farmer.specialties.map((specialty, index) => (
                          <Badge key={index} variant="outline" className="border-green-200 text-green-700">
                            {specialty}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex flex-col space-y-2">
                      <div className="flex items-center text-sm">
                        <Phone className="h-4 w-4 mr-2 text-gray-500" />
                        {farmer.phone}
                      </div>
                      <div className="flex items-center text-sm">
                        <Mail className="h-4 w-4 mr-2 text-gray-500" />
                        {farmer.email}
                      </div>
                    </div>
                    <div className="flex space-x-2">
                      <Button variant="outline" className="flex-1">
                        View Profile
                      </Button>
                      <Button className="flex-1 bg-green-600 hover:bg-green-700">Contact Farmer</Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Orders Tab */}
          <TabsContent value="orders" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <ShoppingCart className="mr-2 h-5 w-5 text-green-600" />
                  My Orders
                </CardTitle>
                <CardDescription>Track your orders and purchase history</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">Order #1001</h4>
                        <p className="text-sm text-gray-600">Fresh Tomatoes - 50 kg</p>
                        <p className="text-sm text-gray-600">from Priya Sharma</p>
                        <p className="text-sm">Ordered: Dec 15, 2024</p>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">₹2,000</div>
                        <Badge className="mt-1 bg-green-100 text-green-800">Delivered</Badge>
                      </div>
                    </div>
                  </div>
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">Order #1002</h4>
                        <p className="text-sm text-gray-600">Premium Wheat - 100 kg</p>
                        <p className="text-sm text-gray-600">from Rajesh Kumar</p>
                        <p className="text-sm">Ordered: Dec 18, 2024</p>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">₹2,500</div>
                        <Badge variant="outline" className="mt-1">
                          In Transit
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">Order #1003</h4>
                        <p className="text-sm text-gray-600">Organic Onions - 30 kg</p>
                        <p className="text-sm text-gray-600">from Priya Sharma</p>
                        <p className="text-sm">Ordered: Dec 20, 2024</p>
                      </div>
                      <div className="text-right">
                        <div className="font-bold">₹1,050</div>
                        <Badge variant="secondary" className="mt-1">
                          Processing
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
