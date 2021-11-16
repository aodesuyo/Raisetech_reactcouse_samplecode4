//オブジェクトの省略記法
const syoryakuname = "テッくん";
const age = 20;

const syoryakuInfo = {
  syoryakuname: syoryakuname,
  age: age
};
console.log(syoryakuInfo);
//プロパティの値に変数の値を代入している
//{syoryakuname: "テッくん", age: 20}

const syoryakuInfo2 = {
  syoryakuname,
  age
};
console.log(syoryakuInfo2);
//プロパティ名＝変数名なら省略しても同じ
//{syoryakuname: "テッくん", age: 20}
