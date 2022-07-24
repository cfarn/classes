const log = console.log
// 3 - Video games - airbnb

class Home {
    constructor (city, type, nbRoom) {
        this.city = city
        this.type = type
        this.nbRoom = nbRoom
        this.greatSight = false
    }

    describe = () => {
        log(`Type de logement : ${this.type}, Ville : ${this.city}, Nombre de pièces :  ${this.nbRoom}, Belle vue : ${this.greatSight}`)
    }
}

JohnHome = new Home ("Londres", "appartement", 3, true)
JohnHome.describe()

CeliaHome = new Home ("Bordeaux", "maison", 5)
CeliaHome.describe()

