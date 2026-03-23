import {
  validateAddress,
  validateCity,
  validateName,
  validateZipcode,
  zipcodeInAntwerp,
} from './validate';

export default function init() {
  const nameInput = document.getElementById('name') as HTMLInputElement;
  const adresInput = document.getElementById('address') as HTMLInputElement;
  const zipcodeInput = document.getElementById('zipcode') as HTMLInputElement;
  const cityInput = document.getElementById('city') as HTMLInputElement;
  const agreementInput = document.getElementById(
    'agreement',
  ) as HTMLInputElement;
  const success = document.getElementById('success') as HTMLDivElement;
  const alert = document.getElementById('alert') as HTMLDivElement;
  const span = document.createElement('span');
  span.textContent =
    'Er zijn voordelige studententarieven voor het openbaar vervoer!';

  attachValidation(cityInput, validateCity, 'Ongeldige stad');

  attachValidation(nameInput, validateName, 'Ongeldige naam');

  attachValidation(adresInput, validateAddress, 'Ongeldige Adres');

  attachValidation(zipcodeInput, validateZipcode, 'Ongeldige Postcode');
  attachValidation(
    agreementInput,
    () => agreementInput.checked,
    'Agreement moet aanvaard zijn',
  );

  zipcodeInput.addEventListener('input', () => {
    if (zipcodeInAntwerp(zipcodeInput.value)) {
      alert.classList.remove('hidden');
      success.appendChild(span);
    } else {
      alert.classList.add('hidden');
      if (success.contains(span)) {
        success.removeChild(span);
      }
    }
  });
}

function attachValidation(
  input: HTMLInputElement,
  validator: (value: string) => boolean,
  message: string,
) {
  input.addEventListener('input', () => {
    if (validator(input.value)) {
      input.setCustomValidity('');
      input.classList.remove('is-invalid');
    } else {
      input.setCustomValidity(message);
      input.classList.add('is-invalid');
    }

    input.reportValidity();
  });
}
