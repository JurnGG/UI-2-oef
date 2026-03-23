import type { ProductDetails } from './ProductDetails';

/* Declareer hier BasisProduct, JsonProduct en Product */
export type BasisProduct = {
  id: number;
  title: string;
  image: string;
};
export type Product = {
  details: ProductDetails;
  product: BasisProduct;
};
export type JsonProduct = {
  idDetail: number;
  product: BasisProduct;
};
