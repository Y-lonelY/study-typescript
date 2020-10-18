// define a type
type Person = {
  name: string
}

// extend Person
type SpiderMan = Person & {
  age: number
}


let a: SpiderMan = {
  name: 'ylonely',
  age: 18
}

// define interface
interface Animal {
  name: string
}

// extend to Animal
interface Panda extends Animal {
  age: number
}

interface Panda {
  weight: number
}

let p:Panda = {
  name: 'kitty',
  age: 18,
  weight: 100
}