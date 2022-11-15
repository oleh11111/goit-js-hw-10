export function createListMarckup(name, flag) {
  return `<li class = "item-list"><svg class="icon-flag">
  <img src="${flag}"/>
    <p><b>country: ${name}</b></p>
    </li> 
    `;
}

export function createCountryInfo(name, flag, capital, population, languages) {
  return `<div class="wraper-info">
    <img src="${flag}"/>
    <h1><b>${name}</b></h1>
    <p><b>Capitale:${capital}</b></p>
    <p><b>population:${population}</b></p>
    <p><b>Languages:${languages}</b></p>
    </div>`;
}
