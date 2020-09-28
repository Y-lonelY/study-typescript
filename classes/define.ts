class Person {
  name: string

  constructor(message: string) {
      // if you haven't define the name, you will get error
      // Property 'name' does not exist on type 'Person'.(2339)
      this.name = message
  }

  say() {
      return `hello, ${this.name}`
  }
}

// 通过 extends 关键字来实现继承
class SuperMan extends Person {
  age: number
  
  constructor(name: string) {
      super(name)
      this.age = 10
  }
  // a case to override the say()
   say () {
        console.log("override the say function")
        return super.say()
    }

    fly () {
        return `${this.name} can fly at the age of ${this.age}`
    }
}

const p1 = new Person("xiaoming")