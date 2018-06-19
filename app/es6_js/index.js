/*
* @Author: ww
* @Date:   2018-06-14 13:51:43
* @Last Modified by:   ww
* @Last Modified time: 2018-06-14 16:44:56
*/
const name="jos";
const age=20;
for(let i=0;i<10;i++){
	setTimeout(()=>{
		console.log(i);
	}, 1000)
}
let [a,b,c] = [1,2,3];
"\u{20BB7}"
"\u{41}\u{42}\u{43}"
'\u{1F680}' === '\uD83D\uDE80'
console.log('hello'.repeat(2));
// alert`123`;
let d = 5;
let e = 10;
d=1000
function fun(x =666,y = 1000){
	console.log(x, y);
}
fun(10,99999)
v=>v;
var sum = (m,n) =>{
	console.log("m");
}
sum()
var mama = ()=>({a : 1})
let fn = () => void doesNotReturn();
// let nums = [1,2,3,4];
const numbers = (...nums) => console.log(nums);
numbers(9,9,9,9,9,9)
const pipeline = (...funcs) =>
  val => funcs.reduce((a, b) => b(a), val);
  function factorial(n, total) {
    if (n === 1) return total;
    return factorial(n - 1, n * total);
  }

  factorial(5, 1) 

  const arr = [
    ...(x > 0 ? ['a'] : []),
    'b',
  ];