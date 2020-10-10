// generic interface
interface GenericInterface<T> {
  (name: T): T
}

const i: GenericInterface<string> = (name) => {
  return name
}

// generic class
class GenericClass<T> {
  age: T
  say: (param: T) => T
}

const c = new GenericClass<number>()
c.age = 11
c.say = (data) => data