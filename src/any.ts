import axios from 'axios';

export {};

let url:string = "http://udemy-utils.herokuapp.com/api/v1/articles?token=token123"

axios.get(url).then(function (response) {
    // let data = response.data  // any型として認識される

    // let data: object[] = response.data  // object型の配列

    interface Article{                  // Article型を準備
        id: number;
        title: string;
        description: string;
    }
    let data: Article[] = response.data  // Article型の配列
    
    console.log(data);

    data = [{
        id: 10,
        title: 'title_dummy',
        description: 'description_dummy'
    }]

    console.log(data);
});

