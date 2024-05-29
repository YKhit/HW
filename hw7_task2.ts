class People{ 
    constructor(private name: string = 'Yahor'){
    }
    getName(){
        console.log(`My name is ${this.name}`);
    }
}
const firstPerson = new People();
const secondPerson = new People('Pagrom');
firstPerson.getName();
secondPerson.getName();