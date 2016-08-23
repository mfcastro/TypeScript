class person{
    name: string;
    age: number;

    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }

    sayHello (){
        console.log("Hello World!!");
    }
}


let oliver = new person("oliver",12);

console.log(oliver.name);

let emily = new person("emily", 23);



