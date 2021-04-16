export {}

type Mojiretsu = string

const fooString: string = "hello"
const fooMojiretsu: Mojiretsu = "hello"

const example1 = {
    name: "nakatsugawa",
    age: 43
}

// 型を自分で指定する
type Profile = {
    name: string;
    age: number;
}

const example2: Profile = {
    name: "nakatsugawa",
    age: 43
}

// example1の型をtypeofで調べて、それをセットする
// タイプミスがなくなったり、exapmle1の変化に応じて自動的に変化してくれる
type Profile2 = typeof example1;

const example3: Profile2 = {
    name: "nakatsugawa",
    age: 43
}








