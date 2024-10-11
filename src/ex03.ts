// Create a function `logDetails` that accepts either a tuple of a string and number, or a number and string.
// - Use function overloading and type guards to log different formats based on the input types.
// - Return type: void.
type data1 = [string, number]
type data2 = [number, string]


function logDetails(data: data1): data1
function logDetails(data: data2): data2
function logDetails(data: any): any {
    console.log(`Name: ${data[0]}, Age: ${data[1]}`)
}

// Expected output:
logDetails(["Alice", 30]) // "Name: Alice, Age: 30"
logDetails([42, "Alice"]) // "ID: 42, Name: Alice"