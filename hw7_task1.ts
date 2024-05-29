class Car{ 
    constructor(private maker: string = "Mersedes", private engine: string = "Diesel", private maxSpeed: number = 250, private price: number = 250000){
    }
    getCarMaker(){
        return this.maker;
    }
    getCarEngine(){
        return this.engine;
    }
    getMaxSpeed(){
        return this.maxSpeed;
    }
    getPrice(){
        return this.price;
    }
}
class SportsCar extends Car{
    constructor(maker: string, engine: string, maxSpeed: number, price: number, private tires: string){
        super(maker, engine, maxSpeed, price);
    }
    getTires(){
        return this.tires;
    }
}
class LuxCar extends Car{
    constructor(private interior: string){
        super();
    }
    getInterior(){
        return this.interior;
    }
}
const fullSportsCar = new SportsCar('BMW', 'Benzin', 300, 100000, 'Pirelli');
const fullLuxCar = new LuxCar('Alcantara');
console.log(`This is ${fullSportsCar.getCarMaker()}. It has ${fullSportsCar.getCarEngine()} engine and max speed equal to ${fullSportsCar.getMaxSpeed()}. Approximetly cost of the car is ${fullSportsCar.getPrice()}. It has ${fullSportsCar.getTires()} tires.`);
console.log(`This is ${fullLuxCar.getCarMaker()}. It has ${fullLuxCar.getCarEngine()} engine and max speed equal to ${fullLuxCar.getMaxSpeed()}. Approximetly cost of the car is ${fullLuxCar.getPrice()}. It has ${fullLuxCar.getInterior()} interior.`);