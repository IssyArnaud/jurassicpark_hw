class Park{
    constructor(name, ticketPrice){
        this.name = name
        this.ticketPrice = ticketPrice
        this.collectionOfDinosaurs = []
    }
    addDinosaur(dinosaur){
        this.collectionOfDinosaurs.push(dinosaur)
    }
    removeDinosaur(dinosaur){
        const indexToRemove = this.collectionOfDinosaurs.indexOf(dinosaur)
        if (indexToRemove !== -1){
            this.collectionOfDinosaurs.splice(indexToRemove, 1)
        }
        else {
            return
        }
    }
    findMostPopularDino(){
        const guestNumbers = []
        let topDino
        let highScore
        for (let dino of this.collectionOfDinosaurs){
            guestNumbers.push(dino.guestsAttractedPerDay)
            }
        highScore = Math.max(guestNumbers)
        for (let dino of this.collectionOfDinosaurs){
            if(dino.guestsAttractedPerDay === highScore){
                topDino = dino.name
            }
        }
        return topDino
    }
    findAllDinosOfSpecies(species){
        const listBySpecies = []
        for (let dino of this.collectionOfDinosaurs){
            if (dino.species === species){
                listBySpecies.push(dino)
            }
        }
        return listBySpecies
    }
    calculateVisitorsPerDay(){
        let runningTotal
        for (let dino of this.collectionOfDinosaurs){
            runningTotal += dino.guestsAttractedPerDay
        }
        return runningTotal
    }
    calculateVisitorsPerYear(){
        let visitorsPerYear = this.calculateVisitorsPerDay() * 365
        return visitorsPerYear
    }
    calculateRevenuePerYear(){
        let RevPerYear = this.calculateVisitorsPerYear() * this.ticketPrice
        return RevPerYear
    }
    }

module.exports = Park
