"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Filter, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { categories, filters } from "@/data/dummydb"

export function Sidebar() {
  const [isOpen, setIsOpen] = useState(false)
  const [expandedSections, setExpandedSections] = useState({
    browse: true,
    price: true,
    color: true,
    length: false,
    texture: false,
    type: false,
  })
  const [priceRange, setPriceRange] = useState([15, 94])

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section as keyof typeof prev],
    }))
  }

  const SidebarContent = () => (
    <div className="space-y-6">
      {/* Browse by Categories */}
      <div className="bg-white rounded-lg shadow-sm border p-4">
        <button onClick={() => toggleSection("browse")} className="flex items-center justify-between w-full text-left">
          <h3 className="text-lg font-semibold text-gray-900">Browse by</h3>
          {expandedSections.browse ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
        </button>

        {expandedSections.browse && (
          <div className="mt-4 space-y-2">
            {categories.map((category) => (
              <button
                key={category}
                className="block w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-gray-900 rounded-md transition-colors"
              >
                {category}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Filter by */}
      <div className="bg-white rounded-lg shadow-sm border p-4">
        <div className="flex items-center gap-2 mb-4">
          <Filter size={18} />
          <h3 className="text-lg font-semibold text-gray-900">Filter by</h3>
        </div>

        {/* Price Range */}
        <div className="mb-6">
          <button
            onClick={() => toggleSection("price")}
            className="flex items-center justify-between w-full text-left mb-3"
          >
            <h4 className="font-medium text-gray-900">Price Range</h4>
            {expandedSections.price ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          {expandedSections.price && (
            <div className="space-y-3">
              <Slider value={priceRange} onValueChange={setPriceRange} max={200} min={10} step={1} className="w-full" />
              
              <div className="flex justify-between text-sm text-gray-600">
                <span>${priceRange[1]}</span>
                <span>${priceRange[1]}</span>
              </div>
            </div>
          )}
        </div>

        {/* Color */}
        <div className="mb-6">
          <button
            onClick={() => toggleSection("color")}
            className="flex items-center justify-between w-full text-left mb-3"
          >
            <h4 className="font-medium text-gray-900">Color</h4>
            {expandedSections.color ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          {expandedSections.color && (
            <div className="space-y-2">
              {filters.color.map((color) => (
                <div key={color} className="flex items-center space-x-2">
                  <Checkbox id={color} />
                  <label htmlFor={color} className="text-sm text-gray-700 cursor-pointer">
                    {color}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Length */}
        <div className="mb-6">
          <button
            onClick={() => toggleSection("length")}
            className="flex items-center justify-between w-full text-left mb-3"
          >
            <h4 className="font-medium text-gray-900">Length</h4>
            {expandedSections.length ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          {expandedSections.length && (
            <div className="space-y-2">
              {filters.length.map((length) => (
                <div key={length} className="flex items-center space-x-2">
                  <Checkbox id={length} />
                  <label htmlFor={length} className="text-sm text-gray-700 cursor-pointer">
                    {length}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Texture */}
        <div className="mb-6">
          <button
            onClick={() => toggleSection("texture")}
            className="flex items-center justify-between w-full text-left mb-3"
          >
            <h4 className="font-medium text-gray-900">Texture</h4>
            {expandedSections.texture ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          {expandedSections.texture && (
            <div className="space-y-2">
              {filters.texture.map((texture) => (
                <div key={texture} className="flex items-center space-x-2">
                  <Checkbox id={texture} />
                  <label htmlFor={texture} className="text-sm text-gray-700 cursor-pointer">
                    {texture}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Type */}
        <div>
          <button
            onClick={() => toggleSection("type")}
            className="flex items-center justify-between w-full text-left mb-3"
          >
            <h4 className="font-medium text-gray-900">Type</h4>
            {expandedSections.type ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>

          {expandedSections.type && (
            <div className="space-y-2">
              {filters.type.map((type) => (
                <div key={type} className="flex items-center space-x-2">
                  <Checkbox id={type} />
                  <label htmlFor={type} className="text-sm text-gray-700 cursor-pointer">
                    {type}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )

  return (
    <>
      {/* Mobile Toggle Button */}
      <div className="lg:hidden mb-4">
        <Button onClick={() => setIsOpen(!isOpen)} variant="outline" className="w-full justify-between">
          <span className="flex items-center gap-2">
            <Filter size={18} />
            Filters & Categories
          </span>
          {isOpen ? <X size={18} /> : <Menu size={18} />}
        </Button>
      </div>

      {/* Mobile Sidebar Overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50 bg-black bg-opacity-50">
          <div className="fixed inset-y-0 left-0 w-80 bg-white overflow-y-auto p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">Filters & Categories</h2>
              <Button onClick={() => setIsOpen(false)} variant="ghost" size="sm">
                <X size={20} />
              </Button>
            </div>
            <SidebarContent />
          </div>
        </div>
      )}

      {/* Desktop Sidebar */}
      <div className="hidden lg:block sticky top-4">
        <SidebarContent />
      </div>
    </>
  )
}
