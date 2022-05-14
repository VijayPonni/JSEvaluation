console.table(["car","bike","lorry"]);

let object = {
    name : "vijay",
    age : 21
}
console.table(object);

function show(name , gender){
    this.name = name;
    this.gender = gender;
}

let info = new show("vijay","male");
console.table(info);