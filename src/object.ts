export {};

// object全般
let profilel1: object = { name: "nakatsugawa"};
profilel1 = { year: 1976 };  // objectならなんでも受け付ける


// object全般
let profilel2: {} = { name: "nakatsugawa" };
profilel2 = { year: 1976 };  // objectならなんでも受け付ける


// objectの中身も指定
let profilel3: { name: string; } = { name: "nakatsugawa" };
// profilel3 = { year: 1976 };  // プロパティが合ってない
// profilel3 = { name: 1976 };  // 型が合ってない
profilel3 = { name: "takeshi" };  // OK




