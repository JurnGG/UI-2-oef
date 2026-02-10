// import { actrices } from './actrices.js';
// can use JSON or array from .js file (firefox might not work with JSON)
import actrices from './actrices.json' with { type: 'json' };
import { getAge, avg, lastname } from './dataUtils.js';
import { createElementWithText } from './htmlUtils.js';

function makeActriceRow(actrice) {
  const tr = createElementWithText('tr');

  const tdName = createElementWithText('td', actrice.naam);
  const tdBirthYear = createElementWithText('td', actrice.geboorteJaar);
  const tdAge = createElementWithText('td', getAge(actrice.geboorteJaar));
  const tdDelete = createElementWithText('td');
  const deleteBtn = createElementWithText('button', 'Verwijder');
  // add eventhandeler to each button so its coupled to the row of the actrice
  deleteBtn.addEventListener('click', function () {
    let index = actrices.indexOf(actrice);
    if (index !== -1) actrices.splice(index, 1);
    tr.remove();
    showActrices();
  });

  // append can do several children at once
  tdDelete.append(deleteBtn);
  tr.append(tdName, tdBirthYear, tdAge, tdDelete);

  return tr;
}

export function showActrices() {
  // select table with id actrices-lijst and there from the tbody
  let table = document.querySelector('#actrices-lijst tbody');
  // use thead and tbody so only data gets refreshed and <th> doesn't get deleted
  table.replaceChildren();
  console.log(lastname(actrices[0].naam));
  console.log(actrices.length);
  const rows = actrices
    .sort((a, b) => lastname(a.naam).localeCompare(lastname(b.naam)))
    .map(makeActriceRow);

  // unpacks array into to several items with ...
  table.append(...rows);

  console.log('Het gemiddelde moet 5 zijn. Resultaat: ' + avg(8, 4, 5, 3));
}
