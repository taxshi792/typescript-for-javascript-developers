export {}

namespace Japanese {
    // 外の空間から参照できるようにexportをつける必要がある
    export namespace Tokyo {
        // 外の空間から参照できるようにexportをつける必要がある
        export class Person {
            constructor(public name: string) {
            }
        }
    }
    // 外の空間から参照できるようにexportをつける必要がある
    export namespace Osaka {
        // 外の空間から参照できるようにexportをつける必要がある
        export class Person {
            constructor(public name: string) {
            }
        }
    }
}

namespace English{
    // 外の空間から参照できるようにexportをつける必要がある
    export class Person {
        constructor(
            public firstName: string, 
            public middleName: string, 
            public lastName: string
        ) {}
    }
}

const me = new Japanese.Tokyo.Person("たけし")
console.log(me.name)

const you = new Japanese.Tokyo.Person("あなた")
console.log(you.name)

const michael = new English.Person("マイケル", "ジョセフ", "ジャクソン")
console.log(michael)
