export {}

let profile: { name?: string} = {}
profile.name = 'takeshi'

// // 定義されてないのは追加できない
// profile.age = 45

// -------------------------------------

// インデックスシグネチャの書き方
// { [ index: typeForIndex ]: tyepForValue }

let profile2: { [index: string]: string | number} = {}
// 未知のプロパティを設定してもOK
profile2.name = 'takeshi'
profile2.age = 45

// -------------------------------------

interface Profile3 {
    [index: string]: string | number
}

let profile3: Profile3 = {}
// 未知のプロパティを設定してもOK
profile3.name = 'takeshi'
profile3.age = 45

// -------------------------------------

interface Profile4 {
    underTwenty: boolean,                       // 普通のプロパティも混在できるが、
    [index: string]: string | number | boolean  // booleanを追加してあげる必要がある
}

let profile4: Profile4 = {underTwenty: true} // インデックスシグネチャ以外は設定する必要がある
// 未知のプロパティを設定してもOK
profile4.name = 'takeshi'
profile4.age = 45

