
let elements=[100,200,300,400,500];

let divide = (item) => {  return item/10 };   // Divide 10 for each element

let final = elements.map(divide);            // Using Array.map

console.log(final);                           //Array after map

console.log(elements);                       //Original array (Unchanged)


let multiply = (item) => { return (  item * 2 ) };   // forEach method will not return anything only undefined

 let mul = elements.forEach(multiply);                   

console.log(mul);            

let alter = (item) => { console.log(item * 2) }

let sec =  elements.forEach(alter);
