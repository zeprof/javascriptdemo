function printMe() {
    console.log('print me');
}

function test() {
    console.log('test');
}

setTimeout(printMe, 2000);
test();

// Task queue (FIFO)