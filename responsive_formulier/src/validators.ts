import { steden } from './steden';

export function validateName(name: string): boolean {
  const nameParts = name.trim().split(' ');
  return nameParts.every((part) => part.length >= 2);
}

export function validateAddress(address: string): boolean {
  return /.*[0-9]$/.test(address);
}

export function validateCity(city: string): boolean {
  const stedenlist = new Set(steden);
  return stedenlist.has(city.toLowerCase());
}

export function validateZipcode(zipcode: string) {
  return /[0-9]{4}/.test(zipcode) && Number(zipcode) % 10 == 0;
}
