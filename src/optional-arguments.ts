export {}

let bmi: (height: number, weight: number) => number = (
    height: number, 
    weight: number
): number => weight / (height * height)


bmi(1.8, 90)

// bmi2(身長, 体重, console.logで出力するかどうか？)
let bmi2: (height: number, weight: number, printale?: boolean) => number = (
    height: number, 
    weight: number,
    printable?: boolean
): number => {
    const tmp = weight / (height * height)
    
    if (printable) {
        console.log(tmp)
    }
    
    return tmp
}

console.log("TRUE-----")
bmi2(1.8, 90, true)
console.log("FALSE-----")
bmi2(1.8, 90, false)
console.log("なし-----")
bmi2(1.8, 90)

