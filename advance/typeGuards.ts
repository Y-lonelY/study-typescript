interface SuperMan {
  age: number
  power: boolean
}

interface IronMan {
  age: number
  tech: boolean
}

let man: SuperMan | IronMan = {
  age: 12,
  power: true
}

// `in` operator
if ("power" in man) {
  console.log(man.age)
}

// assertion
let man2 = man as SuperMan

