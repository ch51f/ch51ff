// function timeout(ms) {
//   return new Promise((resolve, reject) => {
//     setTimeout(resolve, ms, 'done');
//   })
// }

// timeout(100).then((value) => {
//   console.log(value);
// })

// let promise = new Promise(function(resolve, reject) {
//   console.log('Promise');
//   resolve();
// });

// promise.then(function() {
//   console.log('resolved.')
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
//   });
// }

// var getJSON = function(url) {
//   var promise = new Promise(function(resolve, reject) {
//     var client = new XMLHttpRequest();
//     client.open("GET", url);
//     client.onreadystatechange = handler;
//     client.responseType = 'json';
//     client.setRequestHeader("Accept", "application/json");
//     client.send();

//     function handler() {
//       if(this.readyState !== 4) {
//         return;
//       }
//       if(this.status === 200) {
//         console.log(this)
//         resolve(this.response);
//       } else {
//         reject(new Error(this.statusText));
//       }
//     }
//   });
//   return promise;
// };

// getJSON("/asset/posts.json").then(function(json) {
//   console.log('Contents: ' + json);
// }, function(error) {
//   console.error('出错了', error);
// });

// var p1 = new Promise(function (resolve, reject) {
//   setTimeout(() => reject(new Error('fail')), 3000)
// })

// var p2 = new Promise(function (resolve, reject) {
//   setTimeout(() => resolve(p1), 1000)
// })

// p2.then(result => {
//   console.log(result)
//   console.log(1)
// }).catch(error => console.log(error))

let birth = '1989/05/01';

const Person = {
  name: 'fch',
  birth,
  hello() {
    console.log('name', this.name, 'birth', this.birth)
  }
}

Person.hello();