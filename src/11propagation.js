const propagationchild = document.getElementById("propagationChild");
propagationChild.addEventListener("click", () => {
  alert("プロパゲーション子要素です");
});

const propagationParent = document.getElementById("propagationParent");
propagationParent.addEventListener("click", () => {
  alert("プロパゲーション親要素です");
});

const child = document.getElementById("child");
console.log("子要素", child);
child.addEventListener("click", (e) => {
  e.stopPropagation();
  alert("子要素です");
});

const parent = document.getElementById("parent");
parent.addEventListener("click", () => {
  alert("親要素です");
});
