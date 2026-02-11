const visitLogs = [
    { year: 2023, month: 11, day: 20, visits: 150 },
    { year: 2023, month: 11, day: 21, visits: 180 },
    { year: 2024, month: 1, day: 1, visits: 300 },
    { year: 2023, month: 12, day: 25, visits: 500 },
    { year: 2024, month: 1, day: 2, visits: 250 },
    { year: 2023, month: 11, day: 20, visits: 200 }, // дубль для демонстрации
];

const groupedLogs = visitLogs.reduce((acc, item) => {
    const key1 = item.year;
    const key2 = item.month;
    const key3 = item.day;

    // Создание ключа с годом
    if (!acc[key1]) {
        acc[key1] = {};
    }
    // Создание в значения года ключ с месяцем
    if (!acc[key1][key2]) {
        acc[key1][key2] = {};
    }
    // Создание в значения месяца ключ с днем
    if (!acc[key1][key2][key3]) {
        acc[key1][key2][key3] = {};
    }
    // Посещения в заданную дату
    acc[key1][key2][key3] = item.visits;
    return acc;


}, {});

console.log(groupedLogs);