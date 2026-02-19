// // CLASS PROVODES A MORE STRUCTURED WAY TO WORK WITH OBJECTS ITS A BLUEPRINT FOR THE OBJECT

// class product {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }
//     getProDetails() {
//         return `Product name is ${this.name} and price is ${this.price}`;
//     }
// }

// let p1 = new product("iphone17", 80000)
// let p2 = new product("ps5", 50000)
// console.log(p1.getProDetails());
// console.log(p2.getProDetails()); 2

// // THIS KEYWORD REFERENCE TO THE OBJECT THISIS A WINDOW OBJECT AND THIS KEYWORD IS NOT WORK IN ARROW FUNCTION

// const person = {
//     name: "mohd arshad",
//     age: 23,
//     introduction: function () { console.log(`My name is ${this.name} and age is ${this.age}`) }
// }

// person.introduction;

// // CONSTRUCTOR SPECIAL METHOD OF CLASS AUTOMATICALLY INVOKED AND INITIALIZED ALL PROPERTIES

// class car {
//     constructor(brand, model, color) {
//         this.brand = brand;
//         this.model = model;
//         this.color = color;
//     }

//     get getDetails() {
//         return `Hey Dear customer your ${this.brand} car with model no ${this.model} and color is ${this.color} is booked`;
//     }
// }

// let car1 = new car("audi", 'q8', "white")
// console.log(car1.getDetails);


// // STATIC KEYWORD : KEYWORD THATS DEFINE PROPERTIES OR METHODS THAT BELONG TO A CLASS ITSELF RATHEN THAN THE OBJECT CREATED FROM THE CLASS

// class mathproperties {
//     static PI = 3.14;
//     static EulerNum = 2.7;
// }

// console.log(mathproperties.PI);
// console.log(mathproperties.EulerNum); // THERE IS NO NEED TO CREATE THE CLASS TO ACCESS THE STATIC PROPERTIES


// // INHERITANCE ALLOW A NEW CLASS TO INHERIT THE PROPERTIES OF EXISTING CLASS IT FOLLOWS ROOT CLASS TO BASE CLASS HELPS IN CODE REUSABILITY

// class Notification {
//     constructor(user) {
//         this.user = user;
//     }

//     send() {
//         console.log(`Preparing to send message to ${this.user}...`);
//     }
// }

// class Email extends Notification {
//     constructor(user, emailAddress) {
//         super(user); // SUPER KEYWORD IS USED TO CALL THE PARENT CLASS CONTRUCTOR
//         this.emailAddress = emailAddress;
//     }

//     sendEmail() {
//         this.send(); // Calls the parent method
//         console.log(`Email sent to ${this.emailAddress} ✅`);
//     }
// }

// let test = new Email("Arshad", "arshad27@gmail.com");
// test.sendEmail()


// // DESTRUCTURING EXTRACT VALUES FROM ARRAYS AND OBJECTS THEN ASSIGN THEM TO VARIABLES IN A CONVENIENT WAY
// // [] = TO PERFORM ARRAY DESTRUCTURING
// // {} = TO PERFORM OBJECT DESTRUCTURING


// const colors = ["red", "yellow", "green", "white"];

// // SWAPING ELEMENTS
// [colors[0], colors[1]] = [colors[1], colors[3]];
// console.log(colors);

// // ARRAY ELEMENTS TO ASSIGN TO VARIABLE 
// let [firstcolor, secondcolor, ...others] = colors;
// console.log(firstcolor)
// console.log(secondcolor)
// console.log(others)

// // IN OBJECTS DESTRUCTURING

// const stu = {
//     name: "arshad",
//     age: 23,
//     course: "bca"
// }

// let { sname, age } = stu;
// console.log(sname);
``