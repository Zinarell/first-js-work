const students = [
    { id: 1, name: 'Алиса' },
    { id: 2, name: 'Борис' },
    { id: 3, name: 'Виктор' },
];

const scores = [
    { studentId: 1, subject: 'Математика', score: 5 },
    { studentId: 2, subject: 'Математика', score: 4 },
    { studentId: 1, subject: 'Физика', score: 4 },
    { studentId: 3, subject: 'Физика', score: 5 },
    { studentId: 2, subject: 'Русский язык', score: 5 },
    { studentId: 1, subject: 'Русский язык', score: 5 },
];

const studentsScores = students.reduce((acc, student) => {
    const id = student.id;
    const name = student.name;
    count = 0;
    // Создание ключа для студента и его среднего балла
    if (!acc[name]){
        acc[name] = {id: id, average: 0};
    }
    // Подсчёт суммы баллов
    for (i in scores){
        if (scores[i].studentId === id){
            acc[name].average += scores[i].score;
            count++;
        }
    }
    // Подсчёт среднего балла
    if (count > 0){
        acc[name].average /= count;
    }
    return acc
}, {})

console.log(studentsScores);