"use strict";
// Create a function `generateSummary` that accepts an array of objects representing users with `name`, `age`, and `active` properties.
// The function should return a summary object containing the number of active users and the average age of active users.
// Return type: { activeCount: number, averageAge: number }
function generateSummary(users) {
    let counter = 0;
    let allAges = 0;
    users.forEach(user => {
        if (user.active === true) {
            counter++;
        }
        return counter;
    });
    users.forEach(user => {
        allAges = allAges + user.age;
        return allAges;
    });
    const average = allAges / users.length;
    const newObject = {
        activeCount: counter,
        averageAge: average
    };
    console.log(newObject);
}
// Expected output:
generateSummary([
    { name: "Alice", age: 30, active: true },
    { name: "Bob", age: 25, active: false },
    { name: "Charlie", age: 35, active: true }
]);
// { activeCount: 2, averageAge: 32.5 }
