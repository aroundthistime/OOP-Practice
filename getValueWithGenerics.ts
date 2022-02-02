const getValueWithGenerics=  <T, K extends keyof T> (object : T, key : K) : T[K] => {
    return object[key]
}

const person = {
    name : "John",
    age : 23
}

const book = {
    title : "a book title",
    price : 10000,
}

console.log(getValueWithGenerics(person, "name"));
console.log(getValueWithGenerics(person, "age"));
console.log(getValueWithGenerics(book, "title"));
console.log(getValueWithGenerics(book, "year"))