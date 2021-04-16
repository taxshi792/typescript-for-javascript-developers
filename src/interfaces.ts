export {}

// アノテーションを直接指定
let object: {name: string; age: number} = {
    name: "nakatsugawa",
    age: 43
}

// 型エイリアスを準備してアノテーションを指定
type Object = {
    name: string
    age: number
}

let object2: Object = {
    name: "nakatsugawa",
    age: 43
}

// インターフェイスを準備してアノテーションを指定
interface ObjectInterface {
    name: string
    age: number
}

let object3: ObjectInterface = {
    name: "nakatsugawa",
    age: 43
}




