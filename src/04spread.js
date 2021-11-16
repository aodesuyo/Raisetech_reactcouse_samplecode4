//スプレッド構文
//配列
const spread1 = ["a", "b"];
//配列の展開
console.log(spread1); //["a", "b"]
console.log(...spread1); //a b

//配列をまとめる
const spread2 = [1, 2, 3, 4, 5];
const [n1, n2, ...sublist] = spread2;
//...配列名で配列の一部を新しい配列としてまとめて格納できる
console.log(n1, n2, sublist);

//配列のコピー
const spread3 = [1, 2];
const spread4 = [3, 4];

const spread5 = [...spread3];
console.log(spread5);

const spread6 = [...spread3, ...spread4];
console.log(spread6);

//オブジェクト
const spread7 = {
  title: "t1",
  content: "c1"
};
const spread8 = { ...spread7 };
console.log(spread8);

//コピーの仕方
const spread9 = [1, 2];

const spread10 = spread9;
spread10[0] = 10;
//配列丸ごと代入すると値をしまっている場所そのものをコピーしてしまう
console.log(spread9[0]); //10
console.log(spread10[0]); //10

//配列を展開してコピーすることで別の場所にspread10の配列の値を仕舞える
const spread11 = [...spread10];
spread11[0] = 11;
console.log(spread9[0]); //10
console.log(spread10[0]); //10
console.log(spread11[0]); //10
