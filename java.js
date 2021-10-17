// let apps = new Vue({
//     el: '#apps',
//     data: {
//         hello: 'hello world'
//     }
// })
// let coding = new Vue({
//     el: "#coding",
//     data: {
//         everthing: `is possible and how to speak that is not hard learn `
//     }
// })
// let app2 = new Vue({
//     el: "apps_2",
//     data: {
//         message2: 'hello world so you can say hello world' + new Date().toLocaleString()
//     }
// }); 
// var app3 = new Vue({
//     el: '#app-3',
//     data: {
//         seen: false
//     }
// })

// Math topics
// let username;
// console.log(username);
// bigInt

// let a = BigInt("100000000000000000000000000000008");
// console.log(a)

// this adds string
// let a = "20",
//     b = "15";
// console.log(+a + +b)

// let a = 0;
// b = "hello";
// t = "billion";
// while (a < 10004) {
//     console.log(a)
//     if (a == 100) {
//         console.log(`hello:${a}:${t}`)
//     } else if (a < 0) {
//         console.log(b)
//     }
//     a--;
// }
// let i = 1;
// while (i <= 50) {
//     let s = 1 / i
//     s+=1/i;
//     console.log(s);
//     i++;

// }
// let i = 0;
// i <= 5;
// i++;
// for (let a = 5; a <= 10; a++) {
//     if (a<=7)break
//     console.log(a)
// }

// let i = 1000000;
// while (i) {
//     if (i <= -200) {
//         break
//     }
//     console.log(i + "   " + "hello ");
//     i--;
// }
// let President = {
//     name: "Otabek",
//     lastname: "Abdulazizov",
//     age: 22,
//     bornplace: "Uzbekistan"
// }
// console.log(President["age"])


// Practise masallar ___________________________________

//1

// let v = 6,
//     c = 2,
//     t;
// t = s / v;
// console.log(S);

//2

// let v = 4,
//     s = 11,
//     t = s / v;
// console.log(t)

//3

// let h=2,
//   g=9.8,
//   t;
//   t=Math.sqrt(2*h/g);
//   console.log(t);

//4

// let h = 3,
//     g = 9.8,
//     t;
// t = Math.sqrt(3 * h / g);
// console.log(t);

//5

// let h = 3,
//     r = 5,
//     p = 3.14,
//     v = 1 / 3 * p * r ** 2 * h;
// console.log(v)

// 6

// let h = 19,
//     r = 6,
//     p = 3.14,
//     v = 1 / 3 * p * r ** 2 * h;
// console.log(v);

//7 
// let x = 4.48;
// let y = 7.14;
// t = Math.max(x),
//     g = Math.max(y);
// console.log(t, g);

//8
// let x = 3.96,
//     y = 3.58,
//     z = 2.83;
// t = Math.max(x);
// q = Math.max(y);
// l = Math.max(z)
// console.log((Math.max(t, q, l)));

//9
// let a = 1,
//     t = 0;
// if (a <= 2) {
//     console.log('wrong number')
// } else if (a == 0 || t <= 1) {
//     console.log("correct number")
// }




//_________________________________

// Dom
// in this we can call HTMl body and change tags
// let a = document.getElementById("text");
// a.innerText = "you can change smth";
// document.getElementById("call").style.backgroundColor = "red"

// function click_me() {
//     alert("welcome The USA")
// }

// function changeColor(element) {
//     let colors = element.style.
//     backgroundColor;
//     if (colors == "red") {
//         element.style.
//         backgroundColor = 'green';
//     }
// }

//__________________________

// let name__of_city = "Newyork and Vashigton";
// console.log(name__of_city.length);
// console.log(name__of_city.toUpperCase());
// console.log(name__of_city.substring(0, 4));
// let a = "ota",
//     b = "bek";
// console.log(a + b);
// console.log(`${a}${b}`);
// //_FUNCTION________________________
// function addNumabers(n1, n2) {
//     let addition = n1 * n2;
//     return addition;
// };
// let result = addNumabers(10, 20);
// console.log(result);
// //__OBEJECT_________________________
// let person = {
//     name: "otabek",
//     lastname: "Abdulazizov",
//     age: 22
// }
// console.log(Object.values(person));
// console.log(Object.keys(person));
// console.log("otabek".toUpperCase());
// console.log("otabek".indexOf("e"));

//__LOOPS__________________________
// let names = ["King", "otabek", "lingard", "qosim", "beki", "jonten"];
// for (let a = 0; a < names.length; a++) {
//     console.log(names[a])
// };

// console.log()

// for (const lore of names) {
//     console.log()
// };

// console.log()

// names.forEach(function (name) {
//     console.log(name)
// });
// let a = 0;
// while (a <= 10) {
//     console.log(a);
//     a = a + 1
// }
// do {
//     console.log("salom")
// } while (true);
new Vue({
    el: "#name1",
    data: {
        gretting: "hey body"
    }
});
new Vue({
    el: "#demo",
    data: {
        count: 3
    }
});
new Vue({
    el: '#colo',
    data: {
        basic: 5
    }
})