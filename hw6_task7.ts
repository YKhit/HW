const users = ['Darya', 'Masha', 'Denis', 'Vitaliy', 'Polina', 'Anton'];
const newUsers = users.map((element, i) => {
    return `member${i+1}: ` + element;
});
console.log(newUsers);