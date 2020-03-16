// importing the Classes that  needed
import { User } from './User' ; 
import { Comapny }  from './Company' ;
import {CustomMap } from './CustomMap' ; 

// map Element Id on the Page 
const divId = 'map' ; 

// Instantation the Classes    
const user = new User() ;
const company = new Comapny() ;
const map = new CustomMap(divId) ;


// adding markers on the map ! 
map.addMarker(user) ;
map.addMarker(company)



