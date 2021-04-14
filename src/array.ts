export {};

// 数値配列
let numbers: number[] = [1, 2, 3];
let numbers2: Array<number> = [1, 2, 3];

// 文字列配列
let strings: string[] = ["tokyo", "osaka", "kyoto"];
let strings2: Array<string> = ["tokyo", "osaka", "kyoto"];

// 二次元配列
let nijigenhairetsu: number[][] = [
    [1, 2],
    [3, 4]
];

// 型が混在する配列
let hairetsu: (number | boolean | string)[] = [1, false, "japan"];
let hairetsu2: any[] = [1, false, "japan"];

