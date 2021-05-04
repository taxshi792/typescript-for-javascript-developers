export {}

type DetailedProfile = {
    name: string
    height: number
    weight: number
}

// -------------------------------------------

// 必要なプロパティだけ抽出したい
type SimpleProfile = Pick<DetailedProfile, 'name' | 'weight'>

// type Pick<T, K extends keyof T> = {
//     [P in K]: T[P]
// }

// -------------------------------------------

// 不要ものだけ除外したい
type SmallProfile = Omit<DetailedProfile, 'height'>

// type Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>
// ↓
// type Omit<T> = Pick<T, Exclude<keyof T, 'height'>>
// ↓
// type Omit = Pick<DetailedProfile, 
//                  Exclude<'name' | 'height' | 'weight', 'height'>
//                 >
// ↓
// type Omit = Pick<DetailedProfile, 'name' | 'weight'>  // 上のSimpleProfileと同じ

