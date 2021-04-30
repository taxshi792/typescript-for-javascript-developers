export {}

class VisaCard {
    // readonly owner: string
    // constructor (owner: string) {
    //     this.owner = owner
    // }
    constructor (readonly owner: string) {
        
    }

}

let myVisaCard = new VisaCard("たけし")

console.log(myVisaCard.owner)

// myVisaCard.owner = "さとし"  // 変更できない

