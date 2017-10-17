var data = Mock.mock({
  'name|1-3': 'name',
  'newname|3': 'name',
  'num|+1': 100,
  'num1|1-100': 1000,
  'num2|1-100.1-10': 10000,
  'bool|1': true,
  'bool1|0-1': true,
  'arr|1': ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
  'arr1|2-4': ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
  'arr2|5': ['a', 'b', 'c', 'd', 'e', 'f', 'g'],
  'copyname': function(){
    return this.name;
  },
  'name1': {
    first: '@FIRST',
    middle: '@FIRST',
    last: '@LAST',
    full: '@first @middle @last'
  }
})

var R = Mock.Random;


console.log(R.email())