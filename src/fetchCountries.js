const BASE_URL = 'https://restcountries.com/v2';

export function fetchCountries(name) {
  const params = new URLSearchParams({
    fields: 'name,capital,population,flag,languages',
  });
  return fetch(`${BASE_URL}/name/${name}?${params}`).then(Response => {
    return Response.json();
  });
}
