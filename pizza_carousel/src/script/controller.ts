import { fetchPizzas } from './service';
import type { Pizza } from './domain';

export function initCarousel(container: HTMLElement) {
  fetchPizzas()
    .then((pizzas) => {
      renderCarousel(container, pizzas);
    })
    .catch((error) => {
      container.innerHTML = `<p class="text-red-500">Error: ${error.message}</p>`;
    });
}

function renderCarousel(container: HTMLElement, pizzas: Pizza[]) {
  const slides = pizzas
    .map((pizza, index) => {
      const prev = index === 0 ? pizzas.length - 1 : index - 1;
      const next = index === pizzas.length - 1 ? 0 : index + 1;
      console.log(pizza);
      return `
        <div id="slide${index}" class="carousel-item relative w-full h-64">
          <img src="http://localhost:3000/${pizza.image}" class="w-full h-full object-cover" />
          
          <div class="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 justify-between">
            <a href="#slide${prev}" class="btn btn-circle">❮</a>
            <a href="#slide${next}" class="btn btn-circle">❯</a>
          </div>

            <div class="absolute bottom-0 left-0 bg-black/50 text-white p-4 w-full">
                <h3 class="text-lg font-bold">${pizza.name}</h3>
                <p>Prijs: ${pizza.price}</p>
            </div>
        </div>
      `;
    })
    .join('');

  container.innerHTML = `
      ${slides}
  `;
}
