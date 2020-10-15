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

// by assertion
let man2 = man as SuperMan

// user-defined function
function isSuper(man: SuperMan | IronMan): man is SuperMan {
  return (man as SuperMan).power !== undefined
}

if (isSuper(man)) {
  console.log('man is superMan')
} else {
  console.log('man is ironMan')
}

