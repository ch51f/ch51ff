const curry = require('lodash').curry;
const compose = require('lodash').flowRight;
const output = function(x) {
	console.log(x);
}
/*function timeout(ms) {
	return new Promise((resolve, reject) => {
		if(false) {
			setTimeout(resolve, ms, 'done');
		} else {
			setTimeout(reject, ms, 'reject');
		}
	})
}

timeout(100).then((value) => {
	console.log(value);
}, error => console.log(error))*/

/*
let promise = new Promise(function(resolve, reject) {
	console.log('Promise');
	resolve();
});

promise.then(function() {
	console.log('Resolved.');
});

console.log('Hi!');
*/

/*function loadImageAsync(url) {
	return new Promise(function(resolve, reject) {
		var image = new Image();

		image.onload = function() {
			resolve(image);
		};

		image.onerror = function() {
			reject(new Error('Could not load image at ' + url));
		};

		image.src = url;
	})
}*/

/*var getJSON = function(url) {
	var promise = new Promise(function(resolve, reject) {
		var client = new XMLHttpRequest();
		client.open("GET", url);
		client.onreadystatechange = handler;
		client.responseType = "json";
		client.setRequestHeader("Accept", "application/json");
		client.send();

		function handler() {
			if(this.readyState !== 4) {
				return;
			}
			if(this.status === 200) {
				resolve(this.response);
			} else {
				reject(new Error(this.statusText));
			}
		};
	});

	return promise;
};

getJSON("./posts.json").then(function(json) {
	console.log('Contents: ' + json);
}, function(error) {
	console.error('出错了', error);
});*/

/*var p1 = new Promise(function(resolve, reject) {
	setTimeout(() => reject(new Error('fail')), 3000)
});

var p2 = new Promise(function(resolve, reject) {
	setTimeout(() => resolve(p1), 1000)
});

p2.then(result => console.log(result)).catch(error => console.log(error))*/

/*let thenable = {
	then: function(resolve, reject) {
		resolve(42);
	}
};

let p1 = Promise.resolve(thenable);
p1.then(function(value) {
	console.log(value);
});*/

/*var p = Promise.resolve('Hello');
p.then(function(s) {
	console.log(s)
});*/

/*setTimeout(function() {
	console.log('three');
}, 0);

Promise.resolve().then(function() {
	console.log('two');
});

console.log('one');*/

/*var p = Promise.reject('出错了');

// var p = new Promise((resolve, reject) => reject('出错了'));

p.then(null, function(s) {
	console.log(s)
});*/

/*const preloadImage = function(path) {
	return new Promise(function(resolve, reject) {
		var image = new Image();
		image.onload = resolve;
		image.onerror = reject;
		image.src = path;
	});
};*/

/*function getFoo() {
	return new Promise(function(resolve, reject) {
		resolve('foo');
	});
};

var g = function*() {
	try {
		var foo = yield getFoo();
		console.log(foo);
	} catch(e) {
		console.log(e);
	}
};

function run(generator) {
	var it = generator();

	function go(result) {
		if(result.done) return result.value;

		return result.value.then(function(value) {
			return go(it.next(value));
		}, function(error) {
			return go(it.throw(error));
		});
	}

	go(it.next());
}

run(g);*/

/*var it = makeIterator(['a', 'b']);

console.log(it.next())
console.log(it.next())
console.log(it.next())

function makeIterator(array) {
	var nextIndex = 0;
	return {
		next: function() {
			return nextIndex < array.length ? 
				{value: array[nextIndex++], done: false} :
				{value: undefined, done: true};
		}
	};
}*/

/*let arr = ['a', 'b', 'c'];
let iter = arr[Symbol.iterator]();

console.log(iter.next())
console.log(iter.next())
console.log(iter.next())
console.log(iter.next())*/

/*class RangeIterator {
	constructor(start, stop) {
		this.value = start;
		this.stop = stop;
	}

	[Symbol.iterator]() {return this;}

	next() {
		var value = this.value;
		if(value < this.stop) {
			this.value++;
			return {done: false, value: value};
		}
		return {done: true, value: undefined};
	}
}

function range(start, stop) {
	return new RangeIterator(start, stop);
}

for(var value of range(0, 3)) {
	console.log(value);
}*/

/*function Obj(value) {
	this.value = value;
	this.next = null;
}

Obj.prototype[Symbol.iterator] = function() {
	var iterator = {
		next: next
	};
	var current = this;
	function next() {
		if(current) {
			var value = current.value;
			current = current.next;
			return {
				done: false,
				value: value
			};
		} else {
			return {
				done: true
			};
		}
	}
	return iterator;
}

var one = new Obj(1);
var two = new Obj(2);
var three = new Obj(3);

one.next = two;
two.next = three;

for(var i of one) {
	console.log(i);
}*/

/*var obj = new Proxy({}, {
	get: function(target, key, receiver) {
		console.log(`getting ${key}`);
		return Reflect.get(target, key, receiver);
	},
	set: function(target, key, value, receiver) {
		console.log(`setting ${key}`);
		return Reflect.set(target, key, value, receiver);
	}
});

obj.count =  1;

++obj.count;*/

/*var proxy = new Proxy({}, {
	get: function(target, property) {
		return 35;
	}
});

console.log(proxy.time)
console.log(proxy.name)
console.log(proxy.title)*/

/*var proxy = new Proxy({}, {
	get: function(target, property) {
		return 35;
	}
});

let obj = Object.create(proxy);

console.log(obj.time)*/

/*var handler = {
	get: function(target, name) {
		if(name === 'prototype') {
			return Object.prototype;
		}
		return 'Hello, ' + name;
	},

	apply: function(target, thisBinding, args) {
		return args[0];
	},

	construct: function(target, args) {
		return {value: args[1]};
	}
}

var fproxy = new Proxy(function(x, y) {
	return x + y;
}, handler);

console.log(fproxy(1, 2))
console.log(new fproxy(1, 2))
console.log(fproxy.prototype === Object.prototype)
console.log(fproxy.foo)*/

/*var person = {
	name: "张三"
};

var proxy = new Proxy(person, {
	get: function(target, property) {
		if(property in target) {
			return target[property];
		} else {
			throw new ReferenceError("Property \"" + property + "\" dose not exist.");
		}
	}
})

console.log(proxy.name)
console.log(proxy.age)*/

/*let proto = new Proxy({}, {
	get(target, propetyKey, receiver) {
		console.log('GET ' + propetyKey);
		return target[propetyKey];
	}
})

let obj = Object.create(proto);
obj.xxx*/

/*function createArray(...elements) {
	let handler = {
		get(target, propKey, receiver) {
			let index = Number(propKey);
			if(index < 0) {
				propKey = String(target.length + index);
			}
			return Reflect.get(target, propKey, receiver);
		}
	};

	let target = [];
	target.push(...elements);
	return new Proxy(target, handler);
}

let arr = createArray('a', 'b', 'c');
console.log(arr[-1])*/

/*var pipe = (function() {
	return function(value) {
		var funcStack = [];
		var oproxy = new Proxy({}, {
			get: function(pipeObject, fnName) {
				if(fnName === 'get') {
					return funcStack.reduce(function(val, fn) {
						return fn(val)
					}, value);
				}
				funcStack.push(window[fnName]);
				return oproxy;
			}
		});
		return oproxy;
	}
}());

var double = n => n * 2;
var pow = n => n * n;
var reverseInt = n => n.toString().split("").reverse().join("") | 0;

pipe(3).double.pow.reverseInt.get;*/

/*function* helloWorldGenerator() {
	yield 'hello';
	yield 'world';
	return 'ending';
}

var hw = helloWorldGenerator();

console.log(hw.next())
console.log(hw.next())
console.log(hw.next())
console.log(hw.next())
console.log(hw.next())*/

/*console.log(1)
function* f() {
	console.log('执行了');
}
var generator = f();
console.log(2)
setTimeout(function() {
	generator.next();
}, 2000)*/

/*var arr = [1, [[2, 3], 4], [5, 6]];

var flat = function* (a) {
	a.forEach(function(item) {
		if(typeof item !== 'number') {
			yield* flat(item);
		} else {
			yield item;
		}
	})
};

for(var f of flat(arr)) {
	console.log(f)
}*/

/*var arr = [1, [[2, 3], 4], [5, 6]];

var flat = function* (a) {
	var length = a.length;
	for(var i = 0; i < length; i++) {
		var item = a[i];
		if(typeof item !== 'number') {
			yield* flat(item);
		} else {
			yield item;
		}
	}
};

for(var f of flat(arr)) {
	console.log(f);
}*/

/*var myIterable = {};
myIterable[Symbol.iterator] = function* () {
	yield 1;
	yield 2;
	yield 3;
};
console.log([...myIterable])*/

/*function* f() {
	for(var i = 0; true; i++) {
		var reset = yield i;
		if(reset) {i = -1;}
	}
}
var g = f();
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next(true))
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next())
console.log(g.next(true))*/

/*function* foo(x) {
	var y = 2 * (yield (x + 1));
	var z = yield(y / 3);
	return (x + y + z);
}

var a = foo(5);
console.log(a.next())
console.log(a.next())
console.log(a.next())

var b = foo(5);
console.log(b.next())
console.log(b.next(12))
console.log(b.next(13))*/

/*function wrapper(generatorFunction) {
	return function(...args) {
		let generatorObject = generatorFunction(...args);
		generatorObject.next();
		return generatorObject;
	};
}

const wrapped = wrapper(function* () {
	console.log(`First input: ${yield}`);
	return 'DONE';
});

wrapped().next('hello!')*/

/*function* dataConsumer() {
	console.log('Started');
	console.log(`1.${yield}`);
	console.log(`2.${yield}`);
	return 'result';
}

let genObj = dataConsumer();
genObj.next();
genObj.next('a');
genObj.next('b');*/

/*function* foo() {
	yield 1;
	yield 2;
	yield 3;
	yield 4;
	yield 5;
	yield 6;
	return 7;
}

for(let v of foo()) {
	console.log(v);
}
*/

/*function* fibonacci() {
	let [prev, curr] = [0, 1];
	for(;;) {
		[prev, curr] = [curr, prev + curr];
		yield curr;
	}
}

for(let n of fibonacci()) {
	if(n > 1000) break;
	console.log(n)
}
*/

/*function* objectEntries(obj) {
	let propKeys = Reflect.ownKeys(obj);
	for(let propKey of propKeys) {
		yield [propKey, obj[propKey]];
	}
}
let jane = {first: 'Jane', last: 'Doe'};
for(let [key, value] of objectEntries(jane)) {
	console.log(`${key}: ${value}`);
}
*/

/*function* objectEntries() {
	let propKeys = Object.keys(this);
	for(let propKey of propKeys) {
		yield [propKey, this[propKey]];
	}
}
let jane = {first: 'Jane', last: 'Doe'};
jane[Symbol.iterator] = objectEntries;

for(let [key, value] of jane) {
	console.log(`${key}: ${value}`);
}
*/

/*function* numbers() {
	yield 1
	yield 2
	return 3
	yield 4
}

console.log([...numbers()])
console.log(Array.from(numbers()))

let [x, y] = numbers();
console.log(x, y)

for(let n of numbers()) {
	console.log(n)
}
*/

/*var g = function* () {
	try {
		yield;
	} catch(e) {
		console.log('内部捕获', e);
	}
};
var i = g();
i.next();
try {
	i.throw('a');
	i.throw('b');
	i.throw('c');
	i.throw('d');
} catch(e) {
	console.log('外部捕获', e);
}
*/

/*var g = function* () {
	try {
		yield;
	} catch (e) {
		console.log(e);
	}
};
var i = g();
i.next();
i.throw(new Error('出错了!'));*/

// let match = curry(function(what, str) {
// 	return str.match(what);
// });
// let replace = curry(function(what, replacement, str) {
// 	return str.replace(what, replacement);
// });
// let filter = curry(function(f, ary) {
// 	return ary.filter(f);
// });
// let map = curry(function(f, ary) {
// 	return ary.map(f);
// });

// console.log(match(/\s+/g, 'hello world'));
// console.log(match(/\s+/g)('hello world'));
// let hasSpaces = match(/\s+/g);
// console.log(hasSpaces('hello world'));
// console.log(hasSpaces('spaceless'));
// console.log(filter(hasSpaces, ['tori_spelling', 'tori amos']));
// let findSpaces = filter(hasSpaces);
// console.log(findSpaces(['tori_spelling', 'tori amos']));
// let noVowels = replace(/[aeiou]/ig);
// var censored = noVowels("*");
// console.log(censored('Chocolate Rain'));
// let split = curry(function(what, str) {
// 	return str.split(what);
// })
// let words = split(' ');
// let sentences = map(words);
// console.log(words('hello world'));
// console.log(sentences(['hello world', 'i am ch51ff']));
// let fQ = match(/q/i);
// console.log(fQ('iq eq dq'))
// let filterQs = filter(fQ);
// console.log(filterQs(['iq', 'fch', 'ffq']));
// let _keepHighest = function(x, y) {
// 	return x >= y ? x : y;
// };

// var toUpperCase = function(x) {
// 	return x.toUpperCase();
// }
// var toLowerCase = function(x) {
// 	return x.toLowerCase();
// }
// var exclaim = function(x) {
// 	return x + '!';
// }
// var exclaim_1 = function(x) {
// 	return x + '_1'
// }
// var shout = compose(exclaim, toUpperCase);
// var shout_1 = compose(exclaim_1, exclaim, toUpperCase);

// console.log(shout('send in the clowns'))
// console.log(shout_1('send in the clowns'))

// // var snakeCase = function(word) {
// // 	return word.toLowerCase().replace(/\s+/ig, '_');
// // };
// var snakeCase = compose(replace(/\s+/ig, '_'), toLowerCase);

// console.log(snakeCase('SEND in The ClownS'))

// var head = function(x) {return x[0]}

// // var initials = function(name) {
// // 	return name.split(' ').map(compose(toUpperCase, head)).join('. ');
// // };
// var initials = compose(join('. '), map(compose(toUpperCase, head)), split(' '));

// console.log(initials("hunter stockton thompson"))

// var Container = function(x) {
// 	this.__value = x;
// }

// Container.of = function(x) {return new Container(x)};

// Container.prototype.map = function(f) {
// 	return Container.of(f(this.__value))
// }

// // console.log(Container.of(3))
// // console.log(Container.of('hotdogs'))
// // console.log(Container.of(Container({name: 'yoda'})))
// output(Container.of(2).map(function(two) {return two + 2}));
// output(Container.of('flamethrowers').map(function(s) {return s.toUpperCase(0)}))
// // output(Container.of('bombs').map(concat(' away')).map(_.prop('length')))

var Maybe = function(x) {
	this.__value = x;
}

Maybe.of = function(x) {
	return new Maybe(x);
}

Maybe.prototype.isNothing = function() {
	return (this.__value === null || this.__value === undefined);
}

Maybe.prototype.map = function(f) {
	return this.isNothing() ? Maybe.of(null) : Maybe.of(f(this.__value))
}