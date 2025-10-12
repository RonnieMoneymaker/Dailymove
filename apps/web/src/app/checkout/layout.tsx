import { CartProvider } from '@/components/cart/cart-provider'

export const dynamic = 'force-dynamic'

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <CartProvider>{children}</CartProvider>
}

