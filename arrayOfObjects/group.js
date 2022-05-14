function groupById(nameList){
let group_id = nameList.reduce ((arr,nameList) => {
   arr.push(nameList.id);
   return arr;
},[] )
console.log(group_id);
}
groupById([{id: 1, name: "edison" }, {id: 2, name: "Annand" }, {id: 3, name: "Vasnath"}]);