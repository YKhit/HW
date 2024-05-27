const students = ['Polina', 'Dasha', 'Masha'];
//Используя присваивание
students[students.length-1] = 'Borya';
students[0] = 'Andrey';
//Используя методы
//Последний элемент:
students.pop();
students.push('Yahor');
//Первый элемент:
students.shift();
students.unshift('Valera');
console.log(students);