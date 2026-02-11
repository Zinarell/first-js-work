const groupedCities = {
  'Россия': ['Москва', 'Санкт-Петербург', 'Казань'],
  'США': ['Нью-Йорк', 'Лос-Анджелес'],
  'Беларусь': ['Минск'],
};

const citiesData = groupedCities.reduce((acc, [country, cities]) => {
  cities.forEach(city => {
    acc.push({ country, city });
  });
  return acc;
}, []);

console.log(citiesData);

