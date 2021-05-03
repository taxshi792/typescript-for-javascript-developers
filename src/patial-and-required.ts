export {}

// ---------------------------------------

type Profile = {
    name: string
    age: number
}

// ↓プロパティをオプショナルにしたい場合

type Profile2 = {
    name?: string
    age?: number
}

// めんどくさいし、追従させられないので
// partioalを使うことで、すべてをオプショナルにできる
type PartialType = Partial<Profile>


// ---------------------------------------

type Profile3 = {
    name: string
    age?: number
}

// 同様に、requiredを使うことで、すべてを必須にできる
type RequiredProfile = Required<Profile>


