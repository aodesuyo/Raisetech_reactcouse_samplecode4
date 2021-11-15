//配列
const list = ["a", "b"];
//従来の書き方
const item0 = list[0];
const item1 = list[1];
console.log(item0, item1); //a b
//分割代入
const [item2, item3] = list;
console.log(item2, item3); // a b

//オブジェクト
const userInfo = {
  name: "テッくん",
  age: "20"
};
//従来の値の取り出し方
const userName = userInfo.name;
const userAge = userInfo.age;
console.log(userName, userAge);
//分割代入
const { name, age } = userInfo;
//変数宣言するときに{}で囲み、オブジェクトのプロパティ名を指定する
console.log(name, age);

const { name: newName, age: newAge } = userInfo;
//既に変数名が使われているときは:を使って変数名を変更できる
console.log(newName, newAge);
