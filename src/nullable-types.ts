export {}

// nullableは設定ではなく、union型で局所的に回避するようにするのがよい
let profile: { name: string; age: number | null } = {
    name: 'takeshi',
    age: null
}

console.log({profile})

