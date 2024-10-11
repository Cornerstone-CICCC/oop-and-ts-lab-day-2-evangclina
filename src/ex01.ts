// Create a function `transformInput` that accepts either a string or a number. 
// - If it's a string, reverse the string.
// - If it's a number, return the factorial of the number.
// - If an unsupported type is passed, throw an error.
// - The function should have overloads for both the string and number types.
// - Return type: string for string inputs, number for number inputs.


function transformInput(x: string): string
function transformInput(x: number): number
function transformInput(x: any): any {
    if(typeof x === "string"){
        console.log( x.split("").reverse().join(""))
    }else if (typeof x === "number"){
        let result = 1
        for(let i = 1;  i <= x; i++){
            result *= i
        }
        console.log(result)
    }else{
        throw new Error("Unsupported type")
    }
}

// Expected output:
transformInput("TypeScript") // "tpircSepyT"
transformInput(5) // 120