let string="";
let length=5;
for(let i=1;i<=length;i++){
    for(let j=1;j<=length-i;j++){
        string += " ";
    }
        for(let k=1;k<=2*i-1;k++){
            string += "*";
        }
        string += "\n"
    }
// Reverse method
    for(let i=1;i<=length-1;i++){
        for(let j=1;j<i+1;j++){
            string += " ";
        }
            for(let k=1;k<=2*(length-i)-1;k++){
                string += "*";
            }
            string += "\n"
        }

console.log(string);