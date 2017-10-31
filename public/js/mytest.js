// function Point(x, y) {
//   this.x = x;
//   this.y = y;
// }

// Point.prototype.toString = function() {
//   return '(' + this.x + ', ' + this.y + ')';
// };

// var p = new Point (1, 2);

// // console.log(p.toString());

// class newPoint {
//   constructor(x, y) {
//     this.x = x;
//     this.y = y;
//   }
//   toString() {
//     return `(${this.x}, ${this.y})`;
//   }
// }

// var p1 = new newPoint(5, 4);
// // console.log(p1.toString());

// function* hwGenerator() {
//   yield 'hello';
//   yield 'world';
//   return 'ending';
// }

// var hw = hwGenerator();

// // console.log(hw.next());
// // console.log(hw.next());
// // console.log(hw.next());
// // console.log(hw.next());
// // console.log(hw.next());

// var arr = [1, [[2, 3], 4], [5, 6]];

// var flat = function* (a) {
//   // a.forEach(function(item) {
//   //   if(typeof item !== 'number') {
//   //     yield* flat(item);
//   //   } else {
//   //     yield 'item';
//   //   }
//   // })
//   var length = a.length;
//   for(var i = 0; i < length; i++) {
//     var item = a[i];
//     if(typeof item !== 'number') {
//       yield* flat(item);
//     } else {
//       yield item;
//     }
//   }
// }

// // for(var f of flat(arr)) {
// //   console.log(f);
// // }

// var myIterable = {};
// myIterable[Symbol.iterator] = function* () {
//   yield 1;
//   yield 2;
//   yield 3;
// };

// // console.log([...myIterable])

// function* f() {
//   for(var i = 0; true; i++) {
//     var reset = yield i;
//     if(reset) { i = -2;}
//   }
// }

// var g = f();

// // console.log(g.next())
// // console.log(g.next())
// // console.log(g.next())
// // console.log(g.next(true))
// // console.log(g.next())

// function* foo(x) {
//   var y = 2 * (yield(x + 1));
//   var z = yield(y / 3);
//   return (x + y + z)
// }

// var a = foo(5);
// // console.log(a.next())
// // console.log(a.next())
// // console.log(a.next())

// var b = foo(5);
// // console.log(b.next())
// // console.log(b.next(12))
// // console.log(b.next(13))

// function *foo1() {
//   for(var i =0; i < 7; i++) {
//     yield i;
//   }
//   return 7;
// }

// for(let v of foo1()) {
//   // console.log(v);
// }

// function* fibonacci() {
//   let [prev, curr] = [0, 1]
//   for(;;) {
//     [prev, curr] = [curr, prev + curr];
//     yield curr;
//   }
// }

// // for(let n of fibonacci()) {
// //   if(n > 1000) break;
// //   console.log(n);
// // }

// function* objectEntries(obj) {
//   let propKeys = Reflect.ownKeys(obj);

//   for(let propKey of propKeys) {
//     yield [propKey, obj[propKey]];
//   }
// }

// let jane = {first: 'Jane', last: 'Doe'};

// // for(let [key, value] of objectEntries(jane)) {
// //   console.log(`${key}: ${value}`);
// // }

// let s1 = Symbol('foo');
// let s2 = Symbol('bar');

// console.log(s1)
// console.log(s2)

// console.log(s1.toString())
// console.log(s2.toString())

// const obj = {
//   toString() {
//     return 'abc';
//   }
// };
// const sym = Symbol(obj);

// console.log(sym)

// let mySymbol = Symbol();

// let a = {};
// a[mySymbol] = 'Hello!';

// console.log(a[mySymbol]);

// var g = function* () {
//   try {
//     yield;
//   } catch(e) {
//     console.log('内部错误', e);
//   }
// };

// var i = g();
// i.next();

// try {
//   i.throw('a');
//   i.throw('b');
// } catch(e) {
//   console.log('外部捕获', e);
// }

// function timeout(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, ms, 'done');
//   });
// }

// timeout(1000).then((value) => {
//   console.log(value);
// })

// let promise = new Promise(function(resolve, reject) {
//   console.log('Promise');
//   resolve();
// });

// promise.then(function() {
//   console.log('resolved.');
// });

// console.log('Hi!');

// function loadImageAsync(url) {
//   return new Promise(function(resolve, reject) {
//     var image = new Image();

//     image.onload = function() {
//       resolve(image);
//     };

//     image.onerror = function() {
//       reject(new Error('Could not load image at ' + url));
//     };

//     image.src = url;
//   })
// }

//  