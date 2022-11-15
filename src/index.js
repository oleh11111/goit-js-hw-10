import { createListMarckup } from './create_marckup';
import { createCountryInfo } from './create_marckup';
import './css/styles.css';
import { fetchCountries } from './fetchCountries';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import 'notiflix/dist/notiflix-3.2.5.min.css';
import debounce from 'lodash.debounce';

const DEBOUNCE_DELAY = 300;

const InputSearch = document.querySelector('#search-box');
const countryInfoDivEl = document.querySelector('.country-info');
const countryListUlEl = document.querySelector('.country-list');

let debounceFn = debounce(onInput, DEBOUNCE_DELAY);
InputSearch.addEventListener('input', debounceFn);

function onInput(event) {
  let name = event.target.value.trim();
  if (name === '') {
    return;
  }

  fetchCountries(name).then(response => {
    console.log(response);

    if (response.length === 1) {
      clearDocument();
      const { name, flag, capital, population, languages } = response[0];
      countryInfoDivEl.insertAdjacentHTML(
        'beforeend',
        createCountryInfo(name, flag, capital, population, languages)
      );
      // додаю в дом дерево те що повертає createCountryInfo
      return;
    }
    if ((response.length > 2) & (response.length < 10)) {
      clearDocument();
      response.map(country => {
        const { name, flag } = country;
        countryListUlEl.insertAdjacentHTML(
          'beforeend',
          createListMarckup(name, flag)
        );
        console.log(country);
      });
      // додаю в дом дерево те що повертає createListMarckup
      return;
    }

    if (response.length > 10) {
      Notify.info(
        'Too many matches found. Please enter a more specific name.',
        { timeout: 3000 }
      );
    } else {
      Notify.failure(`❌ Oops, there is no country with that name"`, {
        timeout: 3000,
      });
      clearDocument();
    }
  });
}

function clearDocument() {
  countryInfoDivEl.innerHTML = '';
  countryListUlEl.innerHTML = '';
}

//   перебрати масив респонс , створити лішки, добавити їх в дом в юл
//   якщо ресронс пустий вивести помилку
// якщо довжина 1 виводити дів інфо
