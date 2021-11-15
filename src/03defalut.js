//プロパティのデフォルト値を指定する
const userDefalut = {
  year: "20"
};
const { guest = "ゲスト", year } = userDefalut;
console.log(guest, year);

//関数の引数にデフォルトを設定する
const welcomeMessage = (username = "ゲスト") => {
  const message = `こんにちは、${username}さん`;
  console.log(message);
};
welcomeMessage("テッくん");
welcomeMessage();
