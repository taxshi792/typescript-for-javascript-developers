export {}

const kansu = (): number => 43

let numberAny: any = kansu()
let numberUnknown: unknown = kansu()

let sumAny = numberAny + 10
// let sumUnknown = numberUnknown + 10

// console.log(typeof numberUnknown)
if (typeof numberUnknown === "number") {
    let sumUnknown = numberUnknown + 10
}

// 上記のような処理を、タイプガード・型ガードと呼ぶ
