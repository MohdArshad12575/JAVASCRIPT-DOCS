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