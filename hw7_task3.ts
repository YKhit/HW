class Cars{ 
    constructor(private doorsNumber: number, private rudderSide: string){
    }
    getInfo(){
        console.log(`This car has ${this.doorsNumber} doors and this is ${this.rudderSide} drive car`);
    }
}
const firstCar = new Cars(3, 'left-hand');
const secondCar = new Cars(5, 'right-hand');
firstCar.getInfo();
secondCar.getInfo();