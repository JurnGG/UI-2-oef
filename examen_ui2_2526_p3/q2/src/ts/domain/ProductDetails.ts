/* Declareer hier het type ProductDetails */
import { Badge } from './Badge';

export type ProductDetails = {
  id: number;
  description: string;
  primary: Badge | undefined;
  secondary: Badge[];
};
