const transactions =  [
{ id: 1, amount: 100, category: 'Еда' }, 
{ id: 2, amount: 250, category: 'Транспорт' },
{ id: 3, amount: 80, category: 'Еда' }
]

const transactionsAnalises = transactions.reduce((acc, item) => {

    // Подсчёт общей суммы
    if (!acc['totalAmount']) {
        acc['totalAmount'] = 0;
    }
    acc['totalAmount'] += item.amount;

    // Подсчёт количества транзакций
    if (!acc['transactionCount']) {
        acc['transactionCount'] = 0;
    }
    acc['transactionCount']++;

    // Подсчёт суммы по категориям
    if (!acc['amountByCategory']) {
        acc['amountByCategory'] = {};
    }
    if (!acc['amountByCategory'][item.category]) {
        acc['amountByCategory'][item.category] = 0;
    }
    acc['amountByCategory'][item.category] += item.amount;
    
    return acc
}, {})

console.log(transactionsAnalises);