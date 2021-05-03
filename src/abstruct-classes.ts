export {}

abstract class Animal {
    abstract cry(): string
}

class Lion extends Animal {
    cry() {
        return 'roar'
    }
}

// 抽象クラスにしておくことで実装忘れを防げるなど
class Tiger extends Animal {
    // cry() {
    //     return 'grrr'
    // }
}


