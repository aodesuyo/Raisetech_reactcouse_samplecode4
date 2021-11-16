let defaultMessage = "エラーなし";
//??はnull/undefinedの時評価される

let errorMessage = null;
let message = errorMessage ?? defaultMessage;
console.log(message); //エラーなし

errorMessage = undefined;
message = errorMessage ?? defaultMessage;
console.log(message); //エラーなし

errorMessage = "";
message = errorMessage ?? defaultMessage;
console.log(message); //""
