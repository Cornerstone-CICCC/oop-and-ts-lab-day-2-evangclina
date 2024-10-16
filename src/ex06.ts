// Create a generic function `addValues` that accepts either an array of numbers or an array of strings.
// - If it's an array of numbers, return the sum. If it's an array of strings, return them concatenated.
// - Implement function overloading with appropriate return types: `number` for numbers, `string` for strings.

function addValues(...values: number[]): number
function addValues(...values: number[]): number
function addValues(...values: any): any{

    if (typeof values[0][0] === "number") {
        const sum = values[0].reduce((acc: number, curr: number) => acc + (curr as number), 0);
        console.log(sum)
    } 
    else {
        console.log(values[0].join(' '))
    }
}

// Expected output:
addValues([1, 2, 3]) // 6
addValues(["Hello", " ", "World"]) // "Hello World"