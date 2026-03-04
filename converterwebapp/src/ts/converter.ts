import {
  camelCase,
  kebabCase,
  constantCase,
  pascalCase,
  upperCaseFirst,
} from 'text-case';

import '../css/style.css';

const btn = document.getElementById('convertButton') as HTMLButtonElement;
const input = document.getElementById('input') as HTMLTextAreaElement;
const selectLan = document.getElementById('selectLan') as HTMLSelectElement;
const selectEl = document.getElementById('selectEl') as HTMLSelectElement;

btn.addEventListener('click', () => {
  const message: string = input.value;
  const language: string = selectLan.value;
  const element: string = selectEl.value;

  convert(message, language, element);
});

function convert(
  message: string,
  language: string | null = null,
  element: string | null = null,
): void {
  let rs: string;

  switch (language) {
    case 'JavaScript':
      switch (element) {
        case 'class':
          rs = pascalCase(message);
          break;
        case 'constant':
          rs = constantCase(message);
          break;
        default:
          rs = camelCase(message);
          break;
      }
      break;

    case 'html':
      rs = kebabCase(message);
      break;

    case 'English':
      rs = upperCaseFirst(message);
      break;

    default:
      rs = message;
  }

  input.value = rs;
}
