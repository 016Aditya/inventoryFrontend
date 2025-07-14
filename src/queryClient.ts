import axios from "axios";
import {Product, ProductSchema, ProductSchemaArray} from "./types/Product";
import { z } from "zod";

const BASE_URL = "http://localhost:3001";

export const getProducts = async (): Promise<Product[]> => {
    try {
       const response = await axios.get(BASE_URL + "/api/products/products")
       const products = response.data.product;
       const parsedProducts = ProductSchemaArray.safeParse(products); 
       console.log(parsedProducts);
       if (!parsedProducts.success) {
           const error = parsedProducts.error.format();
           console.log(error);
           throw new Error("Invalid data format");
       }
       return(products as Product[])
    } catch (error) { 
        const typeError = error as Error;
        throw new Error(typeError.message) 
    }
    
}