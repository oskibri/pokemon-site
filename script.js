//let x = await fetch("./names.json")
//    .then(res => res.json())
//    .then(val => {
//        let y = 1;
//        setInterval(() => {y++}, 10)
//        setTimeout(() => {
//            console.log([val[0], y])
//        }, 1009);
//    });

//setTimeout(() => console.log(x), 2000);


//let x = await fetch("./names.json").then(res => res.json()).then(val => val);
//console.log(x);

let y = 0;
let x = setInterval(() => {y++}, 1);
const res = await fetch("./names.json"), 
      json = await res.json();
clearInterval(x);

console.log(json[1], y);
