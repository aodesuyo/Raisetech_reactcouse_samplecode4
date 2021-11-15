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
