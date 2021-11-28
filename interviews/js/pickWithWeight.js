// const peoples = [
//   { n: "p1", w: 200 },
//   { n: "p2", w: 100 },
//   { n: "p3", w: 1 },
// ];

// const rand = function (peoples) {
//   // 总权重
//   const weight = peoples.reduce((value, item) => value + item.w, 0);

//   // 随机值
//   let random = Math.floor(Math.random() * weight);

//   for (const { w, n } of peoples) {
//     if (random < w) return n;
//     random -= w;
//   }
// };

// // 测试结果
// const result = { p1: 0, p2: 0, p3: 0 };
// for (let i = 0; i < 1000000; i++) {
//   result[rand(peoples)]++;
// }
// console.log(result);

let peoples = [
  { n: "p1", w: 100 },
  { n: "p2", w: 200 },
  { n: "p3", w: 100 },
];
let rand = function (p) {
  p.sort((a, b) => a.w - b.w);
  const sum = p.reduce((total, item) => {
    total += item.w;
    return total;
  }, 0);
  p.reduce((total, item) => {
    total += item.w;
    item.w = total / sum;
    return total;
  }, 0);
  console.log(p);
  const random = Math.random();
  return p.find((item) => random <= item.w).n;
};
console.log(rand(peoples));
