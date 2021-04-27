export {}

// シグネチャ
function double(value: number): number
function double(value: string): string

// 実体
function double(value: any): any {
//   if (typeof(value) === "number") {
//       return value * 2
//   } else if (typeof(value) === "string") {
//       return value + value
//   } else {
//       throw "numberでもstringでもないので、引数の型を確認してください。"
//   }

    // シグネチャで指定した型以外はこないので、以下のように省略してよい
    if (typeof(value) === "number") {
        return value * 2
    } else {
       return value + value
    }
}

console.log(double(100))
console.log(double("Go!"))
// console.log(double(true))   // シグネチャがないのでエラーになって型安全が保持される


