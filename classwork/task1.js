const citiesData = [
    { country: 'Россия', city: 'Москва' },
    { country: 'США', city: 'Нью-Йорк' },
    { country: 'Беларусь', city: 'Минск' },
    { country: 'Россия', city: 'Санкт-Петербург' },
    { country: 'США', city: 'Лос-Анджелес' },
    { country: 'Россия', city: 'Казань' },

];

const groupedCities = citiesData.reduce((acc, item) => {
    // 1. Получаем ключ для группировки (название страны)
    const key = item.country;
    
    // 2. Если в нашем аккумуляторе (объекте) еще нет такого ключа...
    if (!acc[key]) {
        // ...создаем его и присваиваем ему пустой массив.
        acc[key] = [];
    }
    
    // 3. Добавляем текущий город в массив по соответствующему ключу.
    acc[key].push(item.city);
    
    // 4. Возвращаем обновленный аккумулятор для следующей итерации.
    return acc;
}, {}); // Начинаем с пустого объекта!

console.log(groupedCities);