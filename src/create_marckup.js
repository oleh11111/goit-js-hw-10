export function createListMarckup(name, flag) {
  return `<li class = "item-list">
  <img class="img-flag" src="${flag}"/>
    <p class="country-name-list"><b class="category">country: </b>${name}</p>
    </li> 
    `;
}

export function createCountryInfo(name, flag, capital, population, languages) {
  return `<div class="basic-info">
  <img class="img-flag" src="${flag}"/>
  <h1 class="country-name"><b> ${name}</b></h1>
  </div>
  <p class="info-text"><b class="category">Capitale:</b> ${capital}</p>
  <p class="info-text"><b class="category">population:</b> ${population}</p>
  <p class="info-text"><b class="category">Languages:</b> ${languages.map(language =>language.nativeName)}</p>`
   
}
