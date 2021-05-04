export {}

function add(a: number, b: number): number {
    return a + b
}
console.log(add(1, 2))

// 戻り値の型を抽出
type ReturnTypeFromAdd = ReturnType<typeof add>




