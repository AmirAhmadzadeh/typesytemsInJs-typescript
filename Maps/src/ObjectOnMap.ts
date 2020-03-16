

class ObjectOnMap {
  location: {
    lat: number;
    lng: number;
  };
  constructor(lat:string, lng:string) {
    this.location = {
      lat: parseFloat(lat),
      lng: parseFloat(lng)
    };
  }
}

export default ObjectOnMap ; 