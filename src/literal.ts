export {}

let dayOfTheWeek: string = "日"
dayOfTheWeek = "月"
dayOfTheWeek = "火"
dayOfTheWeek = "1976/01/22"  // 曜日以外も受け付けてしまう

let dayOfTheWeek2: "日" | "月" | "火" | "水" | "木" | "金" | "土" = "日"
dayOfTheWeek2 = "月"
dayOfTheWeek2 = "火"
dayOfTheWeek2 = "1976/01/22"  // エラーで弾ける

let month: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 = 1
month = 12
month = 100  // エラーで弾ける

// booleanもリテラル型にできるが、どんな使い道があるのか…？
let TRUE: true = true
TRUE = false  // エラーで弾ける
