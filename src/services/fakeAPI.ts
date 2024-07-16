import { TProduct } from "../types/storeTypes";

export async function oneProduct(idProduct: number): Promise<TProduct> {
  const response = await fetch(
    `https://fakestoreapi.com/products/${idProduct}`
  );
  const product = await response.json();
  return product;
}

export async function listProducts(): Promise<TProduct[]> {
  const response = await fetch(`https://fakestoreapi.com/products/`);
  const products = await response.json();
  return products;
}
