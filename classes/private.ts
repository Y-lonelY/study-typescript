// ECMAScript case
class Animal {
  #name: string
  constructor(data: string) {
    this.#name = data
  }
}

const a1 = new Animal("amine")

// Property '#name' is not accessible outside class 'Animal' because it has a private identifier.ts(18013)
console.log(a1.#name)

// then we use `private` to declare a class
class Sheep extends Animal {
  private weight: number
  constructor (name: string, data: number) {
    super(name)
    this.weight = data
  }
}

class Horse extends Animal {
  private weight: number
  constructor (name: string, data: number) {
    super(name)
    this.weight = data
  }
}


let s1 = new Sheep('dolly', 12)
const h1 = new Horse('dolly', 12)

// then you will caught an error
// Type 'Horse' is not assignable to type 'Sheep'.
// Types have separate declarations of a private property 'weight'.
s1 = h1