"use strict";
function logDetails(data) {
    console.log(`Name: ${data[0]}, Age: ${data[1]}`);
}
// Expected output:
logDetails(["Alice", 30]); // "Name: Alice, Age: 30"
logDetails([42, "Alice"]); // "ID: 42, Name: Alice"
