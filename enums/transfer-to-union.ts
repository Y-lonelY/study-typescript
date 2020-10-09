enum Person {
  Age = 17,
  Height,
  Name = "lucy"
}

//transfer to SuperPerson: "Age" | "Height" | "Name"
type SuperPerson = keyof typeof Person

let p: SuperPerson = "Age"