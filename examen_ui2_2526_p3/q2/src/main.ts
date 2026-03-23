import { controller } from './ts/controller.ts';
const products = document.getElementById('products') as HTMLElement;
const toast = document.querySelector('.toast') as HTMLDivElement;
controller(products, toast);
