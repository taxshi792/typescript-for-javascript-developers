export {}

type DebugType = () => void
type SomeTypes = string | number | DebugType

// -------------------------------------------

// 型を除外したい
type FunctionType = Exclude<SomeTypes, string | number>     // functionだけ残す（orですべて指定）

type NonFunctionTyped = Exclude<SomeTypes, DebugType>       // functionだけ削除する（個別指定）
type TypeExcludingFunction = Exclude<SomeTypes, Function>   // functionだけ削除する（function一括）

// -------------------------------------------

// 型を抽出したい
type FunctionTypeByExtract = Extract<SomeTypes, DebugType>          // DebagTypeのみ抽出
type NonFunctionTypeByExtract = Extract<SomeTypes, string | number> // 個別指定で抽出
type FunctionTypeExtractingFunction = Extract<SomeTypes, Function>  // functionだけ抽出

// -------------------------------------------

// nullとかundefinedを削除したい
type NullableTypes = string | number | null | undefined
type NonNullableTypes = NonNullable<NullableTypes>




