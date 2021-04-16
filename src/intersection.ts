export {}

// 
type Pitcher1 = {
    throwingSpeed: number
}
type Batter1 = {
    battingAverage: number
}

// 
const DaimajinSasaki: Pitcher1 = {
    throwingSpeed: 154
}
const OchiaiHiromitsu: Batter1 = {
    battingAverage: 0.367
}

// 
type TwowayPlayer1 = {
    throwingSpeed: number
    battingAverage: number
}
const OtaniShohei1: TwowayPlayer1 = {
    throwingSpeed: 165,
    battingAverage: 0.286
}

// intersection型
type TwowayPlayer2 = Pitcher1 & Batter1
const OtaniShohei2: TwowayPlayer2 = {
    throwingSpeed: 165,
    battingAverage: 0.286
}





