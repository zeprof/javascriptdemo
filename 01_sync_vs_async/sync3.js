function f1() {
    console.log("f1");
}
function f2() {
    f1();
    console.log("f2");
}
function f3() {
    f2();
    console.log("f3");
}
f3();

// Execution stack in action