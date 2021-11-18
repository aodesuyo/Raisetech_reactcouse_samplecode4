//ボタンを押すとアラートが表示される
const button = document.getElementById("myButton");
button.addEventListener("click", () => {
  alert("クリックされました");
});
//入力するとその値がコンソールされる
const input = document.getElementById("inputId");
input.addEventListener("change", (event) => {
  console.log(event.target.value);
});
//イベントのアクションを防ぐ
const preventbutton = document.getElementById("nosubmitButton");
preventbutton.addEventListener("click", (event) => {
  event.preventDefault();
});
