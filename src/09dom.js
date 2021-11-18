const title = document.getElementById("title");
const contentsitem = document.getElementsByClassName("content");
//DOMへのアクセス
console.log("タイトル要素", title);
console.log("コンテンツ要素", contentsitem);

//DOMの作成・追加

//入れるアイテムを作成する
//createElementでdiv要素を作成する変数を宣言
const content = document.createElement("div");
//innerHTMLで作成したdiv要素内のHTMLを指定する
content.innerHTML = "<p>SPAとは</p>";

//idをハブにして差し込み先のHTML要素を読み込む
const contents = document.getElementById("contents");
//読み込んだ中にアイテムを差し込む
contents.appendChild(content);
