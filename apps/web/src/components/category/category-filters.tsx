'use client'

import { useEffect, useState } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Slider } from '@/components/ui/slider'
import { Checkbox } from '@/components/ui/checkbox'
import { X } from 'lucide-react'

const priceRanges = [
  { label: 'Onder €500', value: [0, 500] },
  { label: '€500 - €1000', value: [500, 1000] },
  { label: '€1000 - €1500', value: [1000, 1500] },
  { label: 'Boven €1500', value: [1500, 3000] },
]

const defaultBrands = [
  'Xiaomi',
  'Segway',
  'Kaabo',
  'Pure',
  'Inokim',
  'Dualtron',
]

const defaultFeatures = [
  'Opvouwbaar',
  'LED display',
  'Waterdicht',
  'Dual motor',
  'Sport modus',
  'App connectie',
]

export type CategoryFiltersState = {
  priceRange: [number, number]
  selectedBrands: string[]
  selectedFeatures: string[]
  inStockOnly: boolean
}

export function CategoryFilters({
  brands = defaultBrands,
  features = defaultFeatures,
  brandCounts,
  featureCounts,
  onChange,
}: {
  brands?: string[]
  features?: string[]
  brandCounts?: Record<string, number>
  featureCounts?: Record<string, number>
  onChange?: (state: CategoryFiltersState) => void
}) {
  const [priceRange, setPriceRange] = useState([0, 2000])
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([])
  const [inStockOnly, setInStockOnly] = useState(false)

  useEffect(() => {
    onChange?.({ priceRange: priceRange as [number, number], selectedBrands, selectedFeatures, inStockOnly })
  }, [priceRange, selectedBrands, selectedFeatures, inStockOnly])

  const handleBrandToggle = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) 
        ? prev.filter(b => b !== brand)
        : [...prev, brand]
    )
  }

  const handleFeatureToggle = (feature: string) => {
    setSelectedFeatures(prev => 
      prev.includes(feature) 
        ? prev.filter(f => f !== feature)
        : [...prev, feature]
    )
  }

  const clearFilters = () => {
    setPriceRange([0, 2000])
    setSelectedBrands([])
    setSelectedFeatures([])
    setInStockOnly(false)
  }

  const hasActiveFilters = selectedBrands.length > 0 || selectedFeatures.length > 0 || inStockOnly

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Filters</h2>
        {hasActiveFilters && (
          <Button variant="ghost" size="sm" onClick={clearFilters}>
            <X className="h-4 w-4 mr-1" />
            Wissen
          </Button>
        )}
      </div>

      {/* Prijs */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Prijs</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <Slider
            value={priceRange}
            onValueChange={setPriceRange}
            max={2000}
            min={0}
            step={50}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>€{priceRange[0]}</span>
            <span>€{priceRange[1]}</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {priceRanges.map((range, index) => (
              <Button
                key={index}
                variant="outline"
                size="sm"
                className="text-xs"
                onClick={() => setPriceRange(range.value)}
              >
                {range.label}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Merk */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Merk</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {brands.map((brand) => (
            <div key={brand} className="flex items-center space-x-2">
              <Checkbox
                id={brand}
                checked={selectedBrands.includes(brand)}
                onCheckedChange={() => handleBrandToggle(brand)}
              />
              <label
                htmlFor={brand}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {brand}{brandCounts && typeof brandCounts[brand] === 'number' ? ` (${brandCounts[brand]})` : ''}
              </label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Features */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Features</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {features.map((feature) => (
            <div key={feature} className="flex items-center space-x-2">
              <Checkbox
                id={feature}
                checked={selectedFeatures.includes(feature)}
                onCheckedChange={() => handleFeatureToggle(feature)}
              />
              <label
                htmlFor={feature}
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {feature}{featureCounts && typeof featureCounts[feature] === 'number' ? ` (${featureCounts[feature]})` : ''}
              </label>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Voorraad */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-base">Voorraad</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="inStock"
              checked={inStockOnly}
              onCheckedChange={(checked) => setInStockOnly(checked === true)}
            />
            <label
              htmlFor="inStock"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              Alleen op voorraad
            </label>
          </div>
        </CardContent>
      </Card>

      {/* Actieve filters */}
      {hasActiveFilters && (
        <Card>
          <CardHeader className="pb-3">
            <CardTitle className="text-base">Actieve filters</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {selectedBrands.map((brand) => (
                <Badge key={brand} variant="secondary" className="cursor-pointer">
                  {brand}
                  <X 
                    className="h-3 w-3 ml-1" 
                    onClick={() => handleBrandToggle(brand)}
                  />
                </Badge>
              ))}
              {selectedFeatures.map((feature) => (
                <Badge key={feature} variant="secondary" className="cursor-pointer">
                  {feature}
                  <X 
                    className="h-3 w-3 ml-1" 
                    onClick={() => handleFeatureToggle(feature)}
                  />
                </Badge>
              ))}
              {inStockOnly && (
                <Badge variant="secondary" className="cursor-pointer">
                  Op voorraad
                  <X 
                    className="h-3 w-3 ml-1" 
                    onClick={() => setInStockOnly(false)}
                  />
                </Badge>
              )}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  )
}
