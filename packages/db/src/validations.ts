import { z } from 'zod'

export const createProductSchema = z.object({
  name: z.string().min(1, 'Product name is required'),
  slug: z.string().min(1, 'Slug is required'),
  description: z.string().min(1, 'Description is required'),
  shortDescription: z.string().optional(),
  price: z.number().positive('Price must be positive'),
  comparePrice: z.number().positive().optional(),
  sku: z.string().min(1, 'SKU is required'),
  stock: z.number().int().min(0, 'Stock must be non-negative'),
  images: z.array(z.string().url()).min(1, 'At least one image is required'),
  features: z.record(z.any()).optional(),
  specifications: z.record(z.any()).optional(),
  categoryId: z.string().min(1, 'Category is required'),
})

export const updateProductSchema = createProductSchema.partial()

export const createCategorySchema = z.object({
  name: z.string().min(1, 'Category name is required'),
  slug: z.string().min(1, 'Slug is required'),
  description: z.string().optional(),
  image: z.string().url().optional(),
  parentId: z.string().optional(),
})

export const updateCategorySchema = createCategorySchema.partial()

export const createReviewSchema = z.object({
  rating: z.number().int().min(1).max(5),
  title: z.string().optional(),
  comment: z.string().optional(),
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
  productId: z.string().min(1, 'Product ID is required'),
})

export const addToCartSchema = z.object({
  productId: z.string().min(1, 'Product ID is required'),
  quantity: z.number().int().min(1, 'Quantity must be at least 1'),
})

export const createOrderSchema = z.object({
  email: z.string().email('Invalid email address'),
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  phone: z.string().optional(),
  address: z.object({
    street: z.string().min(1, 'Street is required'),
    city: z.string().min(1, 'City is required'),
    postalCode: z.string().min(1, 'Postal code is required'),
    country: z.string().min(1, 'Country is required'),
  }),
  notes: z.string().optional(),
})

export type CreateProductInput = z.infer<typeof createProductSchema>
export type UpdateProductInput = z.infer<typeof updateProductSchema>
export type CreateCategoryInput = z.infer<typeof createCategorySchema>
export type UpdateCategoryInput = z.infer<typeof updateCategorySchema>
export type CreateReviewInput = z.infer<typeof createReviewSchema>
export type AddToCartInput = z.infer<typeof addToCartSchema>
export type CreateOrderInput = z.infer<typeof createOrderSchema>
