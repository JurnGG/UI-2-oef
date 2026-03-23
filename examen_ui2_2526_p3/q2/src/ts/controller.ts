import { getBasisProducten, getProducten, SHOP_URL } from './restClient.ts';
import type { BasisProduct } from './domain/Product.ts';
/*
Gebruik  GEEN async/await in deze file!
 */

export function controller(products: HTMLElement, toast: HTMLDivElement) {
  hideErrors(toast);
  products.innerHTML = '';
  getBasisProducten()
    .then((response) => {
      if (response) {
        const slides = response
          .map((product) => {
            return renderProduct(product);
          })
          .join('');
        products.innerHTML = `
      ${slides}
  `;
      }
    })
    .catch(() => {
      showError('test', toast);
    });
  getProducten().then((products) => {
    console.log(products);
  });
}

function renderProduct(product: BasisProduct) {
  return `  <div class="card bg-base-200 shadow-sm">
            <figure>
                <img src="json/public/${product.image}" alt="${product.title}"/>
            </figure>
            <div class="card-body">
                <div class="card-title">
                    Card Title
                    <div class="badge badge-primary">NEW</div>
                </div>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div class="card-actions justify-end">
                    <div class="badge badge-outline">Fashion</div>
                    <div class="badge badge-outline">Products</div>
                </div>
            </div>
        </div>`;
}

function hideErrors(toast: HTMLDivElement) {
  toast.classList.add('hidden');
}

function showError(error: string, toast: HTMLDivElement) {
  toast.classList.remove('hidden');
}
