"use strict";

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/*
* @Author: ww
* @Date:   2018-06-14 13:51:43
* @Last Modified by:   ww
* @Last Modified time: 2018-06-14 16:44:56
*/
var name = "jos";
var age = 20;

var _loop = function _loop(i) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
};

for (var i = 0; i < 10; i++) {
  _loop(i);
}
var a = 1,
    b = 2,
    c = 3;

"\uD842\uDFB7";
"ABC";
"\uD83D\uDE80" === "\uD83D\uDE80";
console.log('hello'.repeat(2));
// alert`123`;
var d = 5;
var e = 10;
d = 1000;
function fun() {
  var x = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 666;
  var y = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1000;

  console.log(x, y);
}
fun(10, 99999);
(function (v) {
  return v;
});
var sum = function sum(m, n) {
  console.log("m");
};
sum();
var mama = function mama() {
  return { a: 1 };
};
var fn = function fn() {
  return void doesNotReturn();
};
// let nums = [1,2,3,4];
var numbers = function numbers() {
  for (var _len = arguments.length, nums = Array(_len), _key = 0; _key < _len; _key++) {
    nums[_key] = arguments[_key];
  }

  return console.log(nums);
};
numbers(9, 9, 9, 9, 9, 9);
var pipeline = function pipeline() {
  for (var _len2 = arguments.length, funcs = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    funcs[_key2] = arguments[_key2];
  }

  return function (val) {
    return funcs.reduce(function (a, b) {
      return b(a);
    }, val);
  };
};
function factorial(n, total) {
  if (n === 1) return total;
  return factorial(n - 1, n * total);
}

factorial(5, 1);

var arr = [].concat(_toConsumableArray(x > 0 ? ['a'] : []), ['b']);