import type { ProductDetails } from './ProductDetails';

/* Declareer hier BasisProduct, JsonProduct en Product */
export type BasisProduct = {
  id: number;
  title: string;
  image: string;
};
export type Product = {
  details: ProductDetails;
  id: number;
  title: string;
  image: string;
};
export type JsonProduct = {
  idDetail: number;
  id: number;
  title: string;
  image: string;
};
