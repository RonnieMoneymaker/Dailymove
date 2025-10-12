import { Shield, Truck, RefreshCcw } from 'lucide-react'

export function SimpleValueProps() {
  return (
    <section className="py-12 bg-white border-t">
      <div className="container">
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="flex items-center gap-3">
            <Truck className="h-6 w-6 text-blue-600" />
            <div>
              <div className="font-semibold text-gray-900">Gratis verzending</div>
              <div className="text-sm text-gray-600">Vanaf €50</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Shield className="h-6 w-6 text-blue-600" />
            <div>
              <div className="font-semibold text-gray-900">2 jaar garantie</div>
              <div className="text-sm text-gray-600">Op alle producten</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <RefreshCcw className="h-6 w-6 text-blue-600" />
            <div>
              <div className="font-semibold text-gray-900">30 dagen retour</div>
              <div className="text-sm text-gray-600">Altijd zorgeloos</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}


