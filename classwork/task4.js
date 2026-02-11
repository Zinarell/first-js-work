const words = ['Apple', 'Banana', 'avocado', 'Cherry', 'Bear', 'cat', 'Apricot'];

const groupWords = words.reduce((acc, word) => {
    // Получаем первую букву слова
    const key = word[0].toUpperCase();
    
    if (!acc[key]) {
        acc[key] = [];
    }
    acc[key].push(word);
    return acc;
}, {});

console.log(groupWords);