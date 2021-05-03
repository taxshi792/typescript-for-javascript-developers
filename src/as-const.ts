export {}

let name = 'takeshi'
// stringなので上書き可能
name = 'shiketa'

// ↓

let nickname = 'shiketa' as const
// 文字リテラルとして定義されるので、'shiketa'以外は代入できなくなる
nickname = 'takeshi'
nickname = 'shiketa'  // エラーにならない




let profile = {
    name: 'takeshi',
    height: 180
}
// 上書き可能
profile.name = 'aaaa'
profile.height = 190

// ↓

let profile2 = {
    name: 'takeshi',
    height: 180
} as const
// readonlyとして指定されるので、上書きできなくなる（同じ値であっても）
profile2.name = 'aaaa'
profile2.height = 190

profile2.name = 'takeshi' // エラーになる

