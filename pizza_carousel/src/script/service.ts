import type { Pizza } from './domain';

export function fetchPizzas(): Promise<Pizza[]> {
  return fetch('http://localhost:3000/pizzas').then((response) => {
    if (!response.ok) {
      throw new Error('Failed to fetch pizzas');
    }
    return response.json();
  });
}
