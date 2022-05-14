
function removeDuplicate(array){

    let result = array.filter((thing,index,self) => index===self.findIndex((t) => t.id===thing.id && t.name===thing.name))
    console.log(result);

}
removeDuplicate([{id: 1, name: "Stephen covey" }, {id: 2, name: "Robin Sharma" }, {id: 3, name:
    "Tolstoy"}, {id: 3, name: "Tolstoy"}, {id: 5, name: "James clear"}])