export {}

type Prefectures = 'Tokyo' | 'Chiba' | 'Tottori' | 'Shiga'

type Covid19InfectionInfo = {
    kanji_name: string
    confirmed_cases: number
}

const covid19Japen: {
    Tokyo: Covid19InfectionInfo
    Chiba: Covid19InfectionInfo
    Tottori: Covid19InfectionInfo
    Shiga: Covid19InfectionInfo
} = {
    Tokyo: {kanji_name: '東京', confirmed_cases: 1960},
    Chiba: {kanji_name: '鳥取', confirmed_cases: 249},
    Tottori: {kanji_name: '千葉', confirmed_cases: 2},
    Shiga: {kanji_name: '滋賀', confirmed_cases: true}, // 型チェックさせるには、アノテーションを書く必要があるがめちゃめちゃめんどい
}

// 上記のような簡単に定義できる
// Record<K, T>

const covid19Japen2: Record<Prefectures, Covid19InfectionInfo> = {
    Tokyo: {kanji_name: '東京', confirmed_cases: 1960},
    Chiba: {kanji_name: '鳥取', confirmed_cases: 249},
    Tottori: {kanji_name: '千葉', confirmed_cases: 2},
    Shiga: {kanji_name: '滋賀', confirmed_cases: true}, // 型チェックできている
}

