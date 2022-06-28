const log = console.log

// 2 - TV
const defaultChannel = 1
const defaultVolume = 50


class Tv {
    constructor(brand){
        this.brand = brand
        this.channel = 1
        this.volume = 50
    }

    raise = () => {
        if(this.volume < 100) {
            this.volume = this.volume + 1
        }
    }

    lower = () => {
        if(this.volume > 0) {
            this.volume = this.volume -1
        }
    }

    changeChannel = (number) => {
        if(number >= 1 && number <= 50) {
            this.channel = number
        }
    }

    reset = () => {
        this.channel = 1
        this.volume = 50
    }

    describe = () => {
        log(`Marque : ${this.brand}, Chaine : ${this.channel}, Volume :  ${this.volume}`)
    }
}

const myTv = new Tv ("sony")
// augmenter le vol 5 fois
for(let i = 0; i < 5; i++) {
    myTv.raise()
}
myTv.describe()
// diminuer le vol 10 fois
for(let i = 0; i < 10; i++) {
    myTv.lower()
}
myTv.describe()

myTv.changeChannel(15)
myTv.describe()

myTv.changeChannel(60)
myTv.describe()

myTv.reset()
myTv.describe()
