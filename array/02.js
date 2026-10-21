// in array we can store multiple data types
let marvelHeroes=["Ironman","Spiderman","Thor"]
const dcHeroes=["Batman","Superman","Flash"]
// marvelHeroes.push(dcHeroes)// Take aarray is a data
// console.log(marvelHeroes[3][0])


 const alHeroes=marvelHeroes.concat(dcHeroes);
 console.log(alHeroes)
 //(concate) returns a new array; it does not modify the original array.


 //spread operator
const allHeroes=[...marvelHeroes,...dcHeroes];
console.log(allHeroes)

//convert into array
console.log(Array.isArray("Sufal"))
console.log(Array.from("Sufal"))