

interface Veichle { 
  name : string ,
  year:number  , 
  broken : boolean   
}
const veichle = { 
  name :'test1'  , 
  year : 1999   , 
  broken : false 
}

function logVeichle(v : Veichle ):void{ 
  console.log(`
    Info : '
        name : ${v.name} , 
        year : ${v.year} , 
        broken : ${v.broken}
    '
  `)
}