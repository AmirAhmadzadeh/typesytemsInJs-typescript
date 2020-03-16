


const profile = { 
  name : 'alex'  , 
  age:20  , 
  coords : { 
    lat:0  , 
    lng : 2
  }  ,
  setAge(number : number){
    this.age = number  ; 
  }
}; 

const { age } :{ age : number}  =  profile ; 

const {coords : { lat , lng }} : { coords:{lat:number ; lng:number}} = profile ; 