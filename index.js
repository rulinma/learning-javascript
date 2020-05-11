console.log("hello world");

var a = {"userId":1};
var b = {...a, "userName":"rollinma"};
console.log(a);
console.log(b);
console.log(b.userId);
console.log(b.userName);

var person = {
    firstName: "Bill",
    lastName : "Gates",
    id       : 678,
    fullName : function() {
      return this.firstName + " " + this.lastName;
    }
  };

console.log(person);
console.log(person.fullName)
console.log(person.fullName())

var myObj = { name:"Bill Gates",  age:62, city:"Seattle" };
var myJSON =  JSON.stringify(myObj);

console.log("json: " ,myJSON);

var myObj2 =  JSON.parse(myJSON);

console.log(myObj2.name);

// 匿名函数
var x = function(a,b) {
    return a + b;
}

var z = x(3,4)
console.log(z)

// Function构造器
var myFunction = new Function("a", "b", "return a * b");
var z = myFunction(4, 3);
console.log(z);

// 立即函数
(function () {
    var x = "Hello!!";      // 我会调用我自己
    console.log("self invoke: " , x);
})();

// 箭头函数 简短语法
// ES6
const xx = (x, y) => x * y;
console.log(xx(2,3));

const yy = (x, y) => { return x * y; }
console.log(yy(3,4));
