var person = (function () {
    function person(name, age) {
        this.name = name;
        this.age = age;
    }
    person.prototype.sayHello = function () {
        console.log("Hello World!!");
    };
    return person;
}());
var oliver = new person("oliver", 12);
console.log(oliver.name);
var emily = new person("emily", 23);
//# sourceMappingURL=hello.js.map