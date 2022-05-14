let string="";
let temp=1;
for(let i=1;i<=4;i++){
    for(let j=1;j<=4-i;j++){
        string += " ";
    }
    for(let k=1;k<=i;k++){
      string += " "+temp;
      temp++;
    
    }
  string += "\n"
}
console.log(string);