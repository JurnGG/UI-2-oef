import { fetchTodo } from './restclient';

export function init() {
  const btn = document.querySelector('button') as HTMLButtonElement;
  btn.addEventListener('click', () => {
    const idInput = document.getElementById('id') as HTMLInputElement;
    const alert = document.getElementById('alert') as HTMLDivElement;
    const value = idInput.value;
    if (value === '' || isNaN(Number(value))) {
      alertError(alert, 'Please enter a valid number');
      return;
    }
    getAndShowTodo(Number(idInput.value));
  });
}

async function getAndShowTodo(id: number) {
  const titleInput = document.getElementById('title') as HTMLInputElement;
  const completedInput = document.getElementById(
    'completed',
  ) as HTMLInputElement;
  const alert = document.getElementById('alert') as HTMLDivElement;

  alert.replaceChildren();

  const result = await fetchTodo(id);
  if (!result) {
    alertError(alert, `Todo with id ${id} not found.`);
    return;
  }
  alert.classList.add('hidden');
  titleInput.value = result.title;
  completedInput.checked = result.completed;
}

function alertError(alert: HTMLDivElement, message: string) {
  alert.replaceChildren();

  const span = document.createElement('span');
  span.textContent = message;

  alert.appendChild(span);
  alert.classList.remove('hidden');
}
