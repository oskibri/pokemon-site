const str = "Hello there, my friend";

//let reg = /e/gi, res, arr = [];
//while (res = reg.exec(str)) {
//    console.log(res);
//    arr.push(res.index);
//}
//console.log(arr);

const arr = [], reg = /e/g;
while (regObj = reg.exec(str)) {arr.push(regObj.index)};
console.log(arr);

const a = "sni";
console.log(a[1]);
console.log(a[1].toUpperCase());
a[1] = a[1].toUpperCase();
console.log(a[1]);
