export {}

// 通常の表記
class Person {
    public name: string
    protected age: number
    
    constructor(name: string, age: number) {
        this.name = name
        this.age = age
    }
}

const me = new Person("たけし", 45)
console.log(me)

// 省略の表記
class Person2 {
    constructor(public name: string, protected age: number) {
        // 引数にアクセス修飾子を記述することで初期化を省略できる
    }
}

const me2 = new Person2("たけし", 45)
console.log(me2)

