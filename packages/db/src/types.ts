import type { 
  Category, 
  Product, 
  ProductVariant, 
  Review, 
  Cart, 
  CartItem, 
  Order, 
  OrderItem 
} from '@prisma/client'

export type ProductWithCategory = Product & {
  category: Category
}

export type ProductWithVariants = Product & {
  variants: ProductVariant[]
}

export type ProductWithReviews = Product & {
  reviews: Review[]
}

export type ProductWithDetails = Product & {
  category: Category
  variants: ProductVariant[]
  reviews: Review[]
}

export type CartWithItems = Cart & {
  items: (CartItem & {
    product: Product
  })[]
}

export type OrderWithItems = Order & {
  items: (OrderItem & {
    product: Product
  })[]
}

export type CategoryWithChildren = Category & {
  children: Category[]
}

export type CategoryWithProducts = Category & {
  products: Product[]
}

export interface ProductFilters {
  category?: string
  minPrice?: number
  maxPrice?: number
  inStock?: boolean
  search?: string
}

export interface PaginationParams {
  page?: number
  limit?: number
  sortBy?: string
  sortOrder?: 'asc' | 'desc'
}
