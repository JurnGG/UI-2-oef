import {
  validateAddress,
  validateCity,
  validateName,
  validateZipcode,
} from './validators';

export function setEventListener() {
  const form = document.querySelector('form') as HTMLFormElement;
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    execute();
  });
}

function execute() {
  const form = document.querySelector('form') as HTMLFormElement;
  const formData = new FormData(form);

  const name = formData.get('name') as string;
  const address = formData.get('address') as string;
  const city = formData.get('city') as string;
  const zipcode = formData.get('zipcode') as string;
  const agreement = formData.get('agreement') != null;

  const validations = [
    { check: () => validateName(name), message: 'Ongeldige naam' },
    { check: () => validateAddress(address), message: 'Ongeldige adres' },
    { check: () => validateCity(city), message: 'Ongeldige gemeente' },
    { check: () => validateZipcode(zipcode), message: 'Ongeldige postcode' },
    {
      check: () => agreement,
      message: 'Je moet akkoord gaan met de voorwaarden',
    },
  ];

  const errors = validations.filter((v) => !v.check()).map((v) => v.message);
  const alert = document.querySelector('[name="alert"]') as HTMLDivElement;
  alert.classList.toggle('hidden', errors.length === 0);
  if (errors.length > 0) {
    showErrors(errors);
  }
}

function showErrors(errors: string[]) {
  const container = document.querySelector('[name="error"]') as HTMLDivElement;

  container.innerHTML = '';
  errors.forEach((message) => {
    const span = document.createElement('span');
    span.textContent = message;
    container.appendChild(span);
  });
}
