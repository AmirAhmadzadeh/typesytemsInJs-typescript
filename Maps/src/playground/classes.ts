class Vehicle {
  public color : string  ;   
  constructor(c){
    this.color = c ;
  }
  
  private sayIamHere(): void {
    console.log('hello I am here');
    console.log('I am color' + this.color ) ;  
  }
  protected drive(): void {
    console.log('drive method in  the  Vehicle');
  }

  protected honk(): void {
    console.log('honk method in  the  Vehicle'); 
    this.sayIamHere() ; 
  }
}

const v2 = new Vehicle('yellow') ; 
v2.color ;   // red  


class Car extends Vehicle {
  constructor(public color:string){
    super(color) ; 
  }
  drive(): void {
    console.log('hello form dirve method in the car class {subclass}');
  }
  private ddd(): void {
    console.log('hello amir is here');
  }

  public logInfo() {
    this.ddd();
    this.drive();
    //parenet methods 
    // this.sayIamHere() ; 
    this.honk(); 
  }
}


const car = new Car('yellow');

car.drive();

const v = new Vehicle('red');
