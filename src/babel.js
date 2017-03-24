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

var pipe = (function() {
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

pipe(3).double.pow.reverseInt.get;




















