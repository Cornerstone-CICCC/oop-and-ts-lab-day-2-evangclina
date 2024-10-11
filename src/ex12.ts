// Create a function `renameKeys` that accepts an object and a mapping of key renames.
// The function should return a new object where the keys are renamed according to the map.
// Return type: a new object with renamed keys.
interface Object{
    name: string
    age: number
}


function renameKeys<T extends Object, K extends keyof Object>(obj: T, keyMap: K): void {

}

// Expected output:
renameKeys({ name: "Alice", age: 30 }, { name: "fullName" })
// { fullName: "Alice", age: 30 }