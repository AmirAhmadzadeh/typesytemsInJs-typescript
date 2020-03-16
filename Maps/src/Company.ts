import faker from 'faker';
import ObjectOnMap from './ObjectOnMap';
import { Mappeble }  from './CustomMap';


export class Comapny extends ObjectOnMap implements Mappeble{
  cmpName: string;
  cmpCatchPhrase: string;
  constructor() {
    super(faker.address.latitude(), faker.address.longitude());
    this.cmpName = faker.company.companyName();
    this.cmpCatchPhrase = faker.company.catchPhrase();
  }

  markerContent(): string {
    return `companyName : ${this.cmpName} </br> companycatchPhrase  : ${this.cmpCatchPhrase}`
  }
}
