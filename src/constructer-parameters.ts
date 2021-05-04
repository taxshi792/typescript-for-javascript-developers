export {}

class Person {
    constructor(public name: string, public age: number) {}
}

let taro = new Person("taro", 30)
console.log(taro)


// クラスのコンストラクタの引数を抽出
// クラスの型をConstructorParametersにわたす
type PersonType = typeof Person
type Profile = ConstructorParameters<PersonType>


const profile: Profile = ['takeshi', 45]
const taxshi = new Person(...profile)
console.log(taxshi)

// 解説
// 「T extends new (...args: any) => any」はTはクラスじゃないとダメだと言っている
type MyConstructorPrameters<T extends new (...args: any) => any> = T extends new (...args: infer P) => any ? P : never


