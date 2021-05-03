export {}

type Profile = {
    name: string
    age: number
}

const me: Profile = {
    name: 'takeshi',
    age: 45
}

me.age++;

console.log(me)

// ------------------------------------------

type PersonalDataType = Readonly<Profile>

const friend: PersonalDataType = {
    name: 'yamada',
    age: 40
}

// // readonlyなので、エラーになる
// friend.age++;

console.log(friend)

// ------------------------------------------

type MyReadOnly<T> = {
    readonly [P in keyof T]: T[P]
}




