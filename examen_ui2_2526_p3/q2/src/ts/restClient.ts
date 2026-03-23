import { handleError } from './utils';
import type { BasisProduct, JsonProduct, Product } from './domain/Product';
import type { ProductDetails } from './domain/ProductDetails';

export const SHOP_URL = 'http://localhost:3000/';
export const PRODUCT_URL = SHOP_URL + 'products';
export const DETAIL_URL = SHOP_URL + 'details';

/* Pas de signature van de functie aan zodat deze asynchroon werkt.*/
export async function getBasisProducten(): Promise<BasisProduct[] | null> {
  const response = await fetch(`${PRODUCT_URL}`);
  if (!response.ok) {
    handleError(response);
    return null;
  }
  return response.json();
}

/* Pas de signature van de functie aan zodat deze asynchroon werkt.*/
export async function getProducten(): Promise<Product[] | null> {
  const response = await fetch(`${PRODUCT_URL}`);
  if (!response.ok) {
    handleError(response);
    return null;
  }
  const jsonProducts = (await response.json()) as JsonProduct[];
  console.log(jsonProducts);
  let products: Product[] = [];
  jsonProducts.forEach(async (jsonproduct: JsonProduct) => {
    console.log(jsonproduct);
    const detail = await fetch(`${DETAIL_URL}/${jsonproduct.idDetail}`);
    const product: Product = {
      details: (await detail.json()) as ProductDetails,
      product: jsonproduct.product,
    };
    products.push(product);
  });
  return products;
}
