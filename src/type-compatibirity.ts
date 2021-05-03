export {}

// ----------------------------------------------------

let fooCompatible: any
let barCompatible: string = "TypeScript"

// 最初は型がundefined
console.log(typeof fooCompatible)

// anyにstringを代入ができる
fooCompatible = barCompatible

// string型が代入された場合は、string型に遷移する
console.log(typeof fooCompatible)

// ----------------------------------------------------

let fooIncompatible: string
let barIncompatible: number = 1

// // 型に互換性がないためエラーになる
// fooIncompatible = barIncompatible

// ----------------------------------------------------

let fooString: string
let barString: string = "string"

// stringにstringに代入は当然問題ない
fooString = barString

// ----------------------------------------------------

let fooStringLiteral: 'fooStringLiteral' = 'fooStringLiteral'

// stringに、文字リテラル型は代入できる（文字リテラル型はstringの一種なので）
fooString = fooStringLiteral

// ----------------------------------------------------

let fooNumber: number
let fooNumberLiteral: 1976 = 1976

// Numberに、数値リテラル型は代入できる（数値リテラル型はnumberの一種なので）
fooNumber = fooNumberLiteral

// ----------------------------------------------------

interface Animal {
    age: number
}

class Person {
    constructor(public age: number){}
}

let me: Animal

// エラーはでない、代入される側（Animal）のメンバーを満たしていれば別クラスでも代入できる
me = new Person(43)





