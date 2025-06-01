"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Sprout,
  MapPin,
  DollarSign,
  Calendar,
  CloudRain,
  TrendingUp,
  AlertTriangle,
  Leaf,
  ArrowLeft,
} from "lucide-react"
import Link from "next/link"

export default function FarmerDashboard() {
  const [selectedLocation, setSelectedLocation] = useState("")
  const [selectedSoil, setSelectedSoil] = useState("")
  const [cropSuggestions, setCropSuggestions] = useState([])

  const getCropSuggestions = () => {
    if (selectedLocation && selectedSoil) {
      const suggestions = [
        {
          name: "Tomatoes",
          suitability: 95,
          season: "Summer",
          estimatedCost: "$2.50/sq ft",
          expectedYield: "15-20 lbs/plant",
        },
        {
          name: "Wheat",
          suitability: 88,
          season: "Winter",
          estimatedCost: "$1.20/sq ft",
          expectedYield: "40-60 bushels/acre",
        },
        {
          name: "Corn",
          suitability: 82,
          season: "Summer",
          estimatedCost: "$1.80/sq ft",
          expectedYield: "150-200 bushels/acre",
        },
        {
          name: "Soybeans",
          suitability: 78,
          season: "Summer",
          estimatedCost: "$1.50/sq ft",
          expectedYield: "40-50 bushels/acre",
        },
      ]
      setCropSuggestions(suggestions)
    }
  }

  const currentCrops = [
    { name: "Tomatoes", stage: "Flowering", progress: 65, daysLeft: 45, nextAction: "Apply fertilizer" },
    { name: "Wheat", stage: "Grain filling", progress: 80, daysLeft: 25, nextAction: "Monitor for pests" },
    { name: "Corn", stage: "Vegetative", progress: 40, daysLeft: 85, nextAction: "Irrigation needed" },
  ]

  const marketData = [
    { crop: "Tomatoes", currentPrice: "$3.20/lb", trend: "up", change: "+12%" },
    { crop: "Wheat", currentPrice: "$6.80/bushel", trend: "down", change: "-5%" },
    { crop: "Corn", currentPrice: "$5.50/bushel", trend: "up", change: "+8%" },
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
                <h1 className="text-xl font-bold text-green-800">Farmer Dashboard</h1>
              </div>
            </div>
            <div className="text-sm text-gray-600">Welcome, John Farmer</div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <Tabs defaultValue="suggestions" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="suggestions">Crop Suggestions</TabsTrigger>
            <TabsTrigger value="tracking">Lifecycle Tracking</TabsTrigger>
            <TabsTrigger value="weather">Weather & Alerts</TabsTrigger>
            <TabsTrigger value="marketplace">My Listings</TabsTrigger>
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
          </TabsList>

          {/* Crop Suggestions Tab */}
          <TabsContent value="suggestions" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="mr-2 h-5 w-5 text-green-600" />
                  Get Crop Suggestions
                </CardTitle>
                <CardDescription>
                  Enter your location and soil type to get personalized crop recommendations
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your location" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="punjab">Punjab, India</SelectItem>
                        <SelectItem value="maharashtra">Maharashtra, India</SelectItem>
                        <SelectItem value="karnataka">Karnataka, India</SelectItem>
                        <SelectItem value="uttar-pradesh">Uttar Pradesh, India</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="soil">Soil Type</Label>
                    <Select value={selectedSoil} onValueChange={setSelectedSoil}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select soil type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="clay">Clay</SelectItem>
                        <SelectItem value="sandy">Sandy</SelectItem>
                        <SelectItem value="loamy">Loamy</SelectItem>
                        <SelectItem value="silt">Silt</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <Button onClick={getCropSuggestions} className="bg-green-600 hover:bg-green-700">
                  Get Suggestions
                </Button>
              </CardContent>
            </Card>

            {cropSuggestions.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cropSuggestions.map((crop, index) => (
                  <Card key={index} className="border-green-200">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-green-800">{crop.name}</CardTitle>
                        <Badge variant="secondary" className="bg-green-100 text-green-800">
                          {crop.suitability}% suitable
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Season:</span>
                        <span className="text-sm font-medium">{crop.season}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Est. Cost:</span>
                        <span className="text-sm font-medium">{crop.estimatedCost}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Expected Yield:</span>
                        <span className="text-sm font-medium">{crop.expectedYield}</span>
                      </div>
                      <Progress value={crop.suitability} className="mt-2" />
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </TabsContent>

          {/* Lifecycle Tracking Tab */}
          <TabsContent value="tracking" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Sprout className="mr-2 h-5 w-5 text-green-600" />
                  Current Crops
                </CardTitle>
                <CardDescription>Track your crops from seed to harvest with real-time guidance</CardDescription>
              </CardHeader>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {currentCrops.map((crop, index) => (
                <Card key={index} className="border-green-200">
                  <CardHeader>
                    <CardTitle className="text-green-800">{crop.name}</CardTitle>
                    <CardDescription>Stage: {crop.stage}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div>
                      <div className="flex justify-between text-sm mb-2">
                        <span>Progress</span>
                        <span>{crop.progress}%</span>
                      </div>
                      <Progress value={crop.progress} />
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Days to harvest:</span>
                      <span className="font-medium">{crop.daysLeft} days</span>
                    </div>
                    <Alert>
                      <Calendar className="h-4 w-4" />
                      <AlertDescription>Next action: {crop.nextAction}</AlertDescription>
                    </Alert>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>

          {/* Weather & Alerts Tab */}
          <TabsContent value="weather" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <CloudRain className="mr-2 h-5 w-5 text-blue-600" />
                    Weather Forecast
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Today</span>
                      <div className="text-right">
                        <div className="font-bold">28°C</div>
                        <div className="text-sm text-gray-600">Partly cloudy</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Tomorrow</span>
                      <div className="text-right">
                        <div className="font-bold">25°C</div>
                        <div className="text-sm text-gray-600">Light rain</div>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Day 3</span>
                      <div className="text-right">
                        <div className="font-bold">30°C</div>
                        <div className="text-sm text-gray-600">Sunny</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <AlertTriangle className="mr-2 h-5 w-5 text-orange-600" />
                    Smart Alerts
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Alert>
                      <AlertTriangle className="h-4 w-4" />
                      <AlertDescription>Heavy rain expected tomorrow. Cover tomato plants.</AlertDescription>
                    </Alert>
                    <Alert>
                      <AlertTriangle className="h-4 w-4" />
                      <AlertDescription>Pest alert: Aphids detected in nearby farms.</AlertDescription>
                    </Alert>
                    <Alert>
                      <AlertTriangle className="h-4 w-4" />
                      <AlertDescription>Irrigation reminder: Corn field needs watering.</AlertDescription>
                    </Alert>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          {/* Marketplace Tab */}
          <TabsContent value="marketplace" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <DollarSign className="mr-2 h-5 w-5 text-green-600" />
                  My Product Listings
                </CardTitle>
                <CardDescription>Manage your products for sale in the marketplace</CardDescription>
              </CardHeader>
              <CardContent>
                <Button className="bg-green-600 hover:bg-green-700 mb-4">+ Add New Product</Button>
                <div className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">Fresh Tomatoes</h4>
                        <p className="text-sm text-gray-600">Organic, Grade A</p>
                        <p className="text-sm">Quantity: 500 kg</p>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-green-600">₹40/kg</div>
                        <Badge variant="secondary" className="mt-1">
                          Active
                        </Badge>
                      </div>
                    </div>
                  </div>
                  <div className="border rounded-lg p-4">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium">Wheat Grain</h4>
                        <p className="text-sm text-gray-600">Premium quality</p>
                        <p className="text-sm">Quantity: 2 tons</p>
                      </div>
                      <div className="text-right">
                        <div className="font-bold text-green-600">₹25/kg</div>
                        <Badge variant="outline">Pending</Badge>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          {/* Analytics Tab */}
          <TabsContent value="analytics" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {marketData.map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{item.crop}</span>
                      <TrendingUp className={`h-4 w-4 ${item.trend === "up" ? "text-green-600" : "text-red-600"}`} />
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold">{item.currentPrice}</div>
                    <div className={`text-sm ${item.trend === "up" ? "text-green-600" : "text-red-600"}`}>
                      {item.change} from last week
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Cultivation Count System</CardTitle>
                <CardDescription>Track cultivation density and get price risk warnings</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Tomatoes in your area</span>
                    <div className="text-right">
                      <div>850 acres planted</div>
                      <div className="text-sm text-orange-600">⚠️ 15% above recommended</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Wheat in your area</span>
                    <div className="text-right">
                      <div>1,200 acres planted</div>
                      <div className="text-sm text-green-600">✓ Within recommended range</div>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>Corn in your area</span>
                    <div className="text-right">
                      <div>300 acres planted</div>
                      <div className="text-sm text-blue-600">📈 Below capacity - good opportunity</div>
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
