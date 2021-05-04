export {}

type DebugType = () => void
type SomeTypes = string | number | DebugType

// -------------------------------------------

// 型を除外したい
type FunctionType = Exclude<SomeTypes, string | number>     // functionだけ残す（orですべて指定）

// Excludeの定義内容
// type Exclude<T, U> = T extends U ? never : T
// ↓　分解
// type Exclude<T> = T extends string | number ? never : T
// ↓　分解
// type Exclude<> = (string extends string | number ? never : string) 
//                   | (number extends string | number ? never : number)
//                   | (DebugType extends string | number ? never : DebugType)
// ↓　分解
// type MyExclude<> = (never) 
//                   | (never)
//                   | (DebugType)
// ↓　分解
// type MyExclude<> = DebugType  // functionだけ残る


// -------------------------------------------

// 型を抽出したい
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>          // DebagTypeのみ抽出

// -------------------------------------------

// nullとかundefinedを削除したい
type NullableTypes = string | number | null | undefined
type NonNullableTypes = NonNullable<NullableTypes>

// -------------------------------------------



