// example
function Test<T>(data: T): T {
  // Property 'length' does not exist on type 'T'.
  // In this, data is like `any`
  console.log(data.length)
  return data
}

// solution 1: make sure data has length properity
function Solution1<T>(data: T[]):T[] {
  console.log(data.length)
  return data
}

// solutuin 2: by `extends` to explicitly declare the properity
interface HasLength {
  length: number
}
function solution2<T extends HasLength>(data: T):T {
  console.log(data.length)
  return data
}

// It's not a solution, it's a good practice to use T
function Parctice<T, K extends keyof T>(data: T, key: K) {
  return data[key]
}

let x = {a: 1, b: 2}
Parctice(x, 'a')
// Argument of type '"m"' is not assignable to parameter of type '"a" | "b"'.
Parctice(x, 'm')