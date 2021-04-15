export {};

// 呼び元に戻らないものは、never型
function err_msg(message: string): never {
    throw new Error(message);
}


try{
    let result = err_msg("test");
    console.log({ result });
} catch (error) {
    // console.log({ error });
    console.log({ error });
}

let foo: void = undefined;
// let bar: never = undefined;  // never型には他の型は設定できない
let bar: never = err_msg("test"); // never型をリターンする関数ならエラーにならない

