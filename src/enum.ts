export {}

enum Months {
    jan = 1,
    feb,
    mar,
    apl,
    may,
    jun,
    jul,
    aug,
    sep,
    oct,
    nov,
    dec
}

console.log(Months.jan)
console.log(Months.feb)
console.log(Months.mar)
console.log(Months.dec)

enum COLORS {
    RED = '#FF0000',
    WHITE = '#FFFFFF',
    BLACK = '#000000',
    BLUE = '#0000FF',
    GREEN = '#00FF00'
}

let green = COLORS.GREEN
console.log(green)

// console.log(COLORS.YELLOW)  // JavaScriptとちがって、存在しないときはエラーを出してくれる

// 追加できる
enum COLORS {
    YELLOW = "#FFFF00"
}

console.log(COLORS.YELLOW)


