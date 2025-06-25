"use client"

import { useState } from "react"
import { ChevronDown, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { useCurrency } from "@/contexts/currency-context"

export function CurrencySelector() {
  const { selectedCurrency, currencies, changeCurrency } = useCurrency()
  const [isOpen, setIsOpen] = useState(false)

  const handleCurrencyChange = (currencyCode: string) => {
    changeCurrency(currencyCode)
    setIsOpen(false)
  }

  return (
    <DropdownMenu open={isOpen} onOpenChange={setIsOpen}>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="sm"
          className="flex items-center gap-2 text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors"
        >
          <Globe size={16} />
          <span className="font-medium">{selectedCurrency.code}</span>
          <ChevronDown size={14} className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-48">
        {currencies.map((currency) => (
          <DropdownMenuItem
            key={currency.code}
            onClick={() => handleCurrencyChange(currency.code)}
            className={`flex items-center justify-between cursor-pointer ${
              selectedCurrency.code === currency.code ? "bg-gray-100 font-medium" : ""
            }`}
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">{currency.symbol}</span>
              <div>
                <div className="font-medium">{currency.code}</div>
                <div className="text-xs text-gray-500">{currency.name}</div>
              </div>
            </div>
            {selectedCurrency.code === currency.code && <div className="w-2 h-2 bg-green-500 rounded-full"></div>}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
