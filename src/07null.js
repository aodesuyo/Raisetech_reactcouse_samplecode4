let defaultMessage = "エラーなし";
//??はnull/undefinedの時左辺を評価する

let errorMessage = null;
let message = errorMessage ?? defaultMessage;
console.log(message); //右辺がnullなので左辺のエラーなしが返される

errorMessage = undefined;
message = errorMessage ?? defaultMessage;
console.log(message); //右辺がundefinedなので左辺のエラーなしが返される

errorMessage = "";
message = errorMessage ?? defaultMessage;
console.log(message); //右辺で完結し左辺の評価に向かわず空白が返される

const emptyStr = "";
const zero = 0;
const emptyArr = [];
const nullVal = null;
const undefinedVal = undefined;

emptyStr ?? console.log("A");
//左辺が空白なので右辺まで到達しない
emptyStr || console.log("B");
//左辺が空白でFalseとなるため、またはを満たさないか右辺にまで移動する
zero ?? console.log("C");
//左辺が0でFlaseとなるため、右辺にまで到達しない
zero || console.log("D");
//左辺が0でFalseなのでまたはを満たすか右辺に移る
emptyArr ?? console.log("E");
//左辺がtrueなので右辺に行かず終了
emptyArr || console.log("F");
//左辺がtrueなので右辺に行かず終了
nullVal ?? console.log("G");
//左辺がnullなのでtrue。右辺に行かず終了
nullVal || console.log("H");
//左辺がnullでfalseなのでまたはを満たすか右辺に移る
undefinedVal ?? console.log("I");
//左辺がnullなのでtrue。右辺に行かず終了
undefinedVal || console.log("J");
//左辺がnullでfalseなのでまたはを満たすか右辺に移る
