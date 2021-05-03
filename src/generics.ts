export {}

// // 同じ名前ではエラーになる
// const echo = (arg: number): number => {
//     return arg
// }
// const echo = (arg: string): string => {
//     return arg
// }


// T：型引数と呼ばれる
const echo = <T>(arg: T): T => {
    return arg
}

// 型を＜＞で指定してあげる
console.log(echo<number>(100))
console.log(echo<string>("hello!"))
console.log(echo<boolean>(true))

// -----------------------------------------

class Mirror {
    constructor(public value: number) {}
    
    echo(): number{
        return this.value
    }
}
console.log(new Mirror(123).echo())


// genericsで実装
class Mirror2<T> {
    constructor(public value: T) {}
    
    echo(): T{
        return this.value
    }
}
console.log(new Mirror2<number>(123).echo())
console.log(new Mirror2<string>("hey!").echo())
console.log(new Mirror2<boolean>(false).echo())


// 型引数は複数でもOK、<T, U, R>といった感じで

