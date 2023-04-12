// Sync code (notion of stack)
// https://www.freecodecamp.org/news/synchronous-vs-asynchronous-in-javascript/

function f1() {
    console.log("f1")
}
function f2() {
    console.log("f2")
}
function f3() {
    console.log("f3")
}

// Invoke the functions one by one
f1();
f2();
f3();