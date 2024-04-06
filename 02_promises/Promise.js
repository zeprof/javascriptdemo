const promise = new Promise((resolve, reject) => {
    let condition;

    if(condition) {  // if condition is true
        resolve('Promise is resolved successfully.');
    } else {
        reject('Promise is rejected');
    }
});

// There are 3 states of the Promise object:
//
//     Pending: by default, this is the Initial State, before the Promise succeeds or fails.
//     Resolved: Completed Promise
//     Rejected: Failed Promise

