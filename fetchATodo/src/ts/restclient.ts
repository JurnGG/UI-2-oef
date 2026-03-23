import type { ToDo } from './models/Todo.interface';

export async function fetchTodo(id: number): Promise<ToDo | null> {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${id}`,
  );
  if (response.ok) {
    const data: ToDo = await response.json();
    return data;
  } else {
    return null;
  }
}
