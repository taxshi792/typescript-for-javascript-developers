export {}

class Mahotsukai {}
class Souryo{}

// // 複数継承（多重継承）はできない
// class Taro extends Mahotsukai, Souryo {}
class Taro extends Mahotsukai {}



// シグネチャ
interface Kenja {
    ionazun(): void
}
interface Senshi {
    kougeki(): void
}

// インターフェースを使うことで、複数の継承のようなこと（実装）ができる
class Jiro implements Kenja, Senshi {
    ionazun(): void {
        console.log("イオナズンを唱えた！")
    }
    kougeki(): void{
        console.log("武器で攻撃した！")
    }
}

const jiro = new Jiro()
jiro.ionazun()
jiro.kougeki()

