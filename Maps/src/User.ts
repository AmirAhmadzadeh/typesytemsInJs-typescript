import faker from 'faker'  ;
import ObjectOnMap from './ObjectOnMap';
import { Mappeble } from './CustomMap';

export class User extends ObjectOnMap implements Mappeble{
 
  name:string ; 
   
  constructor(){
     super(faker.address.latitude(), faker.address.longitude());
     this.name = faker.name.firstName() ;    
  }

  markerContent():string{ 
    return `userName : ${this.name}`
  }
}