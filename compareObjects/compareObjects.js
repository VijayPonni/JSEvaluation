let object1 = {
    id : 1,
    name : "edison",
    age : 10
}
let object2 = {
    id : 1,
    name : "edison",
    age : 10
}
let object3 = {
    id : 1,
    name : "edison",
    age : 10
}
let object4 = {
    id : 2,
    name : "edison",
    age : 10
}
let a = JSON.stringify(object1);
let b = JSON.stringify(object2);
let c = JSON.stringify(object3);
let d = JSON.stringify(object4);

(a===b) ? console.log("True") : console.log("False");
(c===d) ? console.log("True") : console.log("False");
