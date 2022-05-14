function pattern(number){
string="";
for(let i=1;i<=number;i++){
    
for(let j=0;j<i;j++){
    string += "*";
}
  string +="\n";
}
console.log(string);
}
pattern(5);