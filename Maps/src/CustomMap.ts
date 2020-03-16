export interface Mappeble {
  location: {
    lat: number;
    lng: number;
  };
  markerContent():string
}

export class CustomMap {
  private googleMap: google.maps.Map;
  
  constructor(divId) {
    this.googleMap = new google.maps.Map(document.querySelector(`#${divId}`), {
      zoom: 1,
      center: {
        lat: 0,
        lng: 0
      }
    });
  }

  addMarker(mappeble: Mappeble): void {
    const marker = new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mappeble.location.lat,
        lng: mappeble.location.lng
      }
    });

    marker.addListener('click', () => {
      new google.maps.InfoWindow({
        content: mappeble.markerContent()
      }).open(this.googleMap, marker);
    });
  }
}
