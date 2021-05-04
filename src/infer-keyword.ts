export {}

function add(a: number, b: number): number {
    return a + b
}
console.log(add(1, 2))

// 戻り値の型を抽出
type ReturnTypeFromAdd = ReturnType<typeof add>

// 解説
// 「(...args: any)」は実質functionを意味しているので、「T extends (...args: any)」でTが関数であることを制限している
// 「<T extends (...args: any) => any>」の戻り値（「=> any」のanyの部分）を受け取る方法が、「=> infer R」の「infer R」の部分
//                                                          （inferは推定するという意味。戻り値を推定してRにセットしているニュアンス？）
// 条件式の結果は実質100%なので、R（戻り値の型）を戻している
type MyReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : any;


