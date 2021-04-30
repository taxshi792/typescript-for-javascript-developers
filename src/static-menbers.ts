export {}

// 動的メンバー変数
class Me {
    isProgrammer: boolean = true
    firstName: string = "takeshi"
    lastName: string = "nakatsugawa"
    
    work() {
        return `Hello! ${this.firstName}`
    }
}

let me = new Me()
console.log(me.isProgrammer)
console.log(me.work())

// console.log(Me.isProgrammer)  // エラーになる


// 動的メンバー変数
class Me2 {
    static isProgrammer: boolean = true
    static firstName: string = "takeshi"
    static lastName: string = "nakatsugawa"

    static work() {
        // return `Hello! ${Me2.firstName}`  // 動くが、クラス名を使うためMe2に依存してしまうのがいまいち
        return `Hello! ${this.firstName}`
    }
}

// let me2 = new Me2()
// console.log(me2.isProgrammer)  // エラーになる

console.log(Me2.isProgrammer)
console.log(Me2.work())

