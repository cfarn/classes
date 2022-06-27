const log = console.log

class Car {
    constructor(brand, speed){
        this.brand = brand
        this.speed = speed
    }

    accelerate = (speed) => {
        this.speed = speed
    }

    brake = (brake) => {
        this.brake = brake
    }

    describe = (brand, speed) => {
        // log(`${this.brand} running at ${this.speed} km/h` )
        // log(this.brand + "running at" + this.speed + "km/h" )
        log(brand + "running at" + speed + "km/h" )
    }
}

let ford = new Car ("ford", 0)
// log(ford)
ford.accelerate("50")
ford.brake("25")
ford.describe()
log(ford)

let bmw = new Car ("bmw", 0)
bmw.accelerate("100")
bmw.brake("30")
log(bmw)






