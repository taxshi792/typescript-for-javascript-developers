export {};

let profile: (string | number)[] = ["nakatsugawa", 43];
profile = [43, "nakatsugawa"];  // union型だと、順番が変わっても問題ないと扱われてしまう

let profile2: [string, number] = ["nakatsugawa", 43];
profile2 = ["takeshi", 100];     // taple型で指定すると、順番もチェックしてくれる
profile2 = [43, "nakatsugawa"];  // taple型で指定すると、順番もチェックしてくれる


