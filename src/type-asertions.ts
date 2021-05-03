export {}

let name: any = 'takeshi'

let length = name.length
// このままだと、型推論上、lengthはany型なので、文字列で上書きができてしまう
length = 'foo'

// 型が分かっている場合、型推論に依存せず、型アサーションを人力でしてあげることでエラーを防ぐことができる

let length2 = name.length as number // lengthプロパティに対して
length2 = 'foo'

let length3 = (name as string).length // nameに対して①
length3 = 'foo'

let length4 = (<string>name).length // nameに対して②、ただしこちらは非推奨、jsx？といわれるreact？で使われるものに似ているため
length4 = 'foo'
