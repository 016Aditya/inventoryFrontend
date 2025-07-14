import { z } from "zod";

export const ProductSchema = z.object({
  product_id: z.string(),
  name: z.string(),
  description: z.string(),
  categoryId: z.number(),
  price: z.string(),
  sku: z.string(),
  created_at: z.string(),
  updated_at: z.string()
});

export const ProductSchemaArray = z.array(ProductSchema);


export type Product = z.infer<typeof ProductSchema>;
