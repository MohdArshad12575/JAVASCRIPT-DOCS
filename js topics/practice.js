// CLOSURE IN JS A FUNCTION DEFINED INSIDE A ANOTHER FUNC, THE INNER FUNC HAS ACCESS TO THE VARIABLE S AND SCOPE OF THE OUTER FUNC
// ALLOW FOR PRIVATE VARIABLES AND STATE MAINTAINANCE USED FREQUENTLY IN JS FRAMEWORK

function outer() {
    let a = 10
    console.log("OUTER FUNC INVOKED")
    function inner() {
        let b = 20;
        console.log(a)

    }
    inner();
}

outer();

// PRINT 1 TO 5 AFTER 1 SECOND TIME EACH

function x() {
    for (let i = 1; i <= 5; i++) {
        setTimeout(() => {
            console.log(i)
        }, i * 1000);
    }
}
x()


// 2. Number in Range (Tricky Boundaries)

// Check if a number lies strictly between 10 and 20 (not equal to 10 or 20).

// 👉 Example:
// Input: 15 → "Inside"
// Input: 10 → "Outside"

// 👉 This builds clarity on >, < vs >=, <=.


let num = 11

if (num > 10 && num < 20) {
    console.log("inside");
} else {
    console.log("outside");
}


// 3. Same Last Digit

// Check whether two numbers have the same last digit.

// 👉 Example:
// Input: 27, 57
// Output: "Same last digit"

let numLastDigitChecker = (a, b) => {
    let a_ld = a % 10;
    let b_ld = b % 10;

    if (a_ld == b_ld) {
        console.log("same last digit")
    } else {
        console.log("last digit is not same")
    }

}

numLastDigitChecker(27, 47);


// 4. Special Number Rule

// A number is “special” if:

// It is divisible by 3 or
// It ends with digit 7

// 👉 Example:
// Input: 27 → "Special"
// Input: 14 → "Not Special"

// 👉 This builds intuition for combining conditions(||).


let specialNumChecker = (num) => {
    if (num % 3 == 0 || num % 10 == 7) {
        console.log(num ,"IS A SPECAIL NUMBER")
    } else {
        console.log("IT IS NOT A SPECIAL NUMBER")
    }

}

specialNumChecker(22);



// 5. Smart Discount System(Real Logic)

// A shop gives discounts based on conditions:

// If price > 1000 → 20 % discount
// Else if price > 500 → 10 % discount
// Else → no discount

// 👉 BUT twist:
// If the user is a premium member, they get extra 5 % off(on top of above).

// 👉 Example:
// Input: price = 1200, premium = active
// Output: Final price after discount

// 👉 This builds layered thinking(nested logic).


let priceDiscountSystem = (price, premiumStatus) => {
    if (price > 1000) {
        if (premiumStatus == "active") {
            console.log("Congrats you are eligible for 20% discount and extra 5% discount for premium holders \nFinal Discounted Price is ", price - (price * 0.25))
        } else {
            console.log("Congrats you are eligible for 20% discount \nFinal Discounted Price is ", price - (price * 0.20))
        }
    } else if (price > 500) {
        if (premiumStatus == "active") {
            console.log("Congrats you are eligible for 10% discount and extra 5% discount for premium holders \nFinal Discounted Price is ", price - (price * 0.15))
        } else {
            console.log("Congrats you are eligible for 10% discount \nFinal Discounted Price is ", price - (price * 0.10))
        }
    } else {
        console.log("I m sorry you are not eligible for any discount")
    }
}

priceDiscountSystem(700, "active")



// LOOPS PRACTICE QUESTIONS


// 1. Reverse Only Digits(Not Strings)
// Reverse a number using loops (no string conversion).
// 👉 Example:
// Input: 1234 → 4321
// 👉 Forces: %, /, building number step-by-step.

let num = 1234
for (let i = 0; i < num.length; i++) {
    console.log(i)
}
