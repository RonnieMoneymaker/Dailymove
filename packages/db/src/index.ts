export { PrismaClient } from '@prisma/client'
export * from './types'
export * from './validations'

// Re-export Prisma types
export type {
  Category,
  Product,
  ProductVariant,
  Review,
  Cart,
  CartItem,
  Order,
  OrderItem,
  OrderStatus,
} from '@prisma/client'
