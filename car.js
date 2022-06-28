const log = console.log

// 1 - Batmobile

class Car {
    constructor(brand, speed){
        this.brand = brand
        this.speed = speed
    }

    accelerate = number => {
        this.speed = this.speed + number
    }

    brake = number => {
        this.speed = this.speed - number
    }

    describe = () => {
        // log(`${this.brand} running at ${this.speed} km/h` )
        log(this.brand + " running at " + this.speed + " km/h" )
    }
}

let ford = new Car ("ford", 0)
ford.describe()
ford.accelerate(50)
ford.describe()
ford.brake(25)
ford.describe()

let bmw = new Car ("bmw", 20)
bmw.describe()
bmw.accelerate(100)
bmw.describe()
bmw.brake(30)
bmw.describe()