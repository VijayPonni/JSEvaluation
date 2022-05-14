let a = [{id: 1, name: 'edison' }, {id: 2, name: 'Annand' }, {id: 3, name: 'Vasnath'}];


function fun(acc){
    for(let i=0;i<=a.length;i++){
  acc=a[i]["id"];
    }
   console.log( acc );
}

a.reduce(fun);