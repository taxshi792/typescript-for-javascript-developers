export {}

const debugProfile = (name: string, age: number) => {
    console.log({name, age})
}

debugProfile('takeshi', 45)


// 引数の型を抽出する
type Profile = Parameters<typeof debugProfile>

// 抽出した型で定数を作る
const profile: Profile = ['you', 70]
// const profile2: Profile = ['you', true] // エラー出してくれる

debugProfile(...profile)    // ...が必要



// 解説
// 引数の型をinfer Pしているので、引数の型を推定して返している
type MyPrameters<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never
