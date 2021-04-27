export {}

let bmi: (height: number, weight: number) => number = (
    height: number, 
    weight: number
): number => {
    return weight / (height * height)
}

console.log(bmi(1.78, 86))

// 関数の中身が1行ならretuen省略も可能
let bmi2: (height: number, weight: number) => number = (
    height: number, 
    weight: number
): number => weight / (height * height)

console.log(bmi2(1.8, 90))
