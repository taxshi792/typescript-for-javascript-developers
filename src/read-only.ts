export {}

class VisaCard {
    // readonly owner: string
    // constructor (owner: string) {
    //     this.owner = owner
    // }
    // ↓省略
    // constructor (public readonly owner: string) {
    // }
    // ↓省略
    constructor (readonly owner: string) {
    }

}

let myVisaCard = new VisaCard("たけし")

console.log(myVisaCard.owner)

// myVisaCard.owner = "さとし"  // 変更できない

