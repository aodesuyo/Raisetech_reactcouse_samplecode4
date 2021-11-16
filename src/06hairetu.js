const map1 = [1, 2, 3, 4, 5];
const map2 = map1.map((item, index) => {
  console.log(`要素:${item}`, `index:${index}`);
  return item * 2; //加工した値を返す
});
console.log(map2);

const filter1 = [10, 50, -40, 85, 100, 70];
const filter2 = filter1.filter((item, index) => {
  console.log(`要素${item}`, `index${index}`);
  return item >= 60; //絞り込んだ値を返す
});
console.log(filter2);

//for文で書くと
const map3 = [];
for (let index = 0; index < map1.length; index++) {
  const item = map1[index] * 2;
  map3.push(item);
}
console.log(map3);

const filter3 = [];
for (let index = 0; index < filter1.length; index++) {
  const item = filter1[index];
  if (item >= 60) {
    filter3.push(item);
  }
}
console.log(filter3);
