// 这里利用 keyof 来获取所有的键
function get<T, K extends keyof T>(o: T, targets: K[]): T[K][] {
  return targets.map(item => o[item])
}

interface Indexs {
  a: string
  b: number
}

let a: Indexs = {
  a: 'a',
  b: 7
}

// res type will be recongnized as union type: (string | number)[]
let res = get(a, ['a', 'b'])