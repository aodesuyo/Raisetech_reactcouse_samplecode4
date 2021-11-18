const title = document.getElementById("title");
const contentsitem = document.getElementsByClassName("content");
//DOMへのアクセス
console.log("タイトル要素", title);
console.log("コンテンツ要素", contentsitem);

//DOMの作成

//入れるアイテムを作成する
//createElementでdiv要素を作成する変数を宣言
const content = document.createElement("div");
//innerHTMLで作成したdiv要素内のHTMLを指定する
content.innerHTML = "<p>SPAとは</p>";

//idをハブにして差し込み先のHTML要素を読み込む
const contents = document.getElementById("contents");
//読み込んだ中にアイテムを差し込む
contents.appendChild(content);

//DOMの削除
const deletecontent = document.createElement("div");
const deletecontentclass = deletecontent;
deletecontentclass.classList.add("deleteclass");
deletecontentclass.setAttribute("id", "deleteid");
deletecontent.innerHTML = "<p>jsで追加した要素だからか取得できない？</p>";

contents.appendChild(deletecontent);
const deleteid = document.getElementById("content");
deleteid.remove();
