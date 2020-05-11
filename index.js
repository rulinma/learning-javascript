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

sumA= sumAll(1, 123, 500, 115, 44, 88);

function sumAll() {
    var i, sum = 0;
    for (i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

console.log(sumA);


var person = {
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
}
var person1 = {
    firstName:"Bill",
    lastName: "Gates",
}
var person2 = {
    firstName:"Steve",
    lastName: "Jobs",
}
var zz = person.fullName.call(person2);  // 将返回 "Steve Jobs"
console.log(zz);

var person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
}

var person1 = {
    firstName:"Bill",
    lastName: "Gates"
}
var aa = person.fullName.call(person1, "Seattle", "USA");

console.log(aa);

var person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + "," + city + "," + country;
    }
  }
var person1 = {
    firstName:"John",
    lastName: "Doe"
}
var bb = person.fullName.apply(person1, ["Oslo", "Norway"]);

console.log(bb);

// 变量 add 的赋值是自调用函数的返回值。
// 这个自调用函数只运行一次。它设置计数器为零（0），并返回函数表达式。
// 这样 add 成为了函数。最“精彩的”部分是它能够访问父作用域中的计数器。
// 这被称为 JavaScript 闭包。它使函数拥有“私有”变量成为可能。
// 计数器被这个匿名函数的作用域保护，并且只能使用 add 函数来修改。
// 闭包指的是有权访问父作用域的函数，即使在父函数关闭之后。
var add = (function () {
    var counter = 0;
    return function () {return counter += 1;}
})();

add();
add();

console.log(add())