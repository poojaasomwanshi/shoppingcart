import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Geolocation } from '@ionic-native/geolocation/ngx';
import { NativeGeocoder,NativeGeocoderOptions, NativeGeocoderResult } from '@ionic-native/native-geocoder/ngx';

@Component({
  selector: 'app-address',
  templateUrl: './address.page.html',
  styleUrls: ['./address.page.scss'],
})
export class AddressPage implements OnInit {

  latitude: any = 0; //latitude
  longitude: any = 0; //longitude
  address: string;


  constructor( private router: Router,private geolocation:Geolocation,  private nativeGeocoder: NativeGeocoder) { }

  ngOnInit() {
    
  }
 

  getCurrentCoordinates(){
this.geolocation.getCurrentPosition({timeout:10000,enableHighAccuracy:true}).then((res)=>{
  this.latitude=res.coords.latitude;
  this.longitude=res.coords.longitude;
  console.log(this.latitude)
console.log(this.longitude)

}).catch((e)=>{
  console.log(e)
})
}
// options = {
//   timeout: 10000, 
//   enableHighAccuracy: true, 
//   maximumAge: 3600
// };
// // use geolocation to get user's device coordinates
// async () {
//  await this.geolocation.getCurrentPosition().then((resp) => {
//     console.log(resp)
//     this.latitude = resp.coords.latitude;
//     this.longitude = resp.coords.longitude;
//     console.log(this.latitude)
//     console.log(this.longitude)


//     this.getAddress(this.latitude, this.longitude);
//    }).catch((error) => {
//      console.log('Error getting location', error);
//    });
// }
// // geocoder options
// nativeGeocoderOptions: NativeGeocoderOptions = {
//   useLocale: true,
//   maxResults: 5
// };
// // get address using coordinates
// getAddress(lat,long){
//   this.nativeGeocoder.reverseGeocode(lat, long, this.nativeGeocoderOptions)
//   .then((res: NativeGeocoderResult[]) => {
//     this.address = this.pretifyAddress(res[0]);
//   })
//   .catch((error: any) => {
//     alert('Error getting location'+ JSON.stringify(error));
//   });
// }
// // address
// pretifyAddress(address){
//   let obj = [];
//   let data = "";
//   for (let key in address) {
//     obj.push(address[key]);
//   }
//   obj.reverse();
//   for (let val in obj) {
//     if(obj[val].length)
//     data += obj[val]+', ';
//   }
//   return address.slice(0, -2);
// }
}


