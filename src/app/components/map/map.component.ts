import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICamera } from 'src/app/models/models';
// import { MouseEvent } from '@agm/core';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent implements OnInit {
  ngOnInit(): void {}

  @Input() camerasList: ICamera[] = [];
  latitude = this.camerasList;
  longitude = this.camerasList;
  constructor() {}
  onChoseLocation(event: any) {
    console.log('onchosenlocation',event);
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
    this.camerasList.push({
      latitude: event.coords.lat,
      longitude: event.coords.lng,
      id: this.camerasList.length,
      country: 'string',
      city: 'string',
      active: true,

    });
    console.log(this.camerasList)
  }
  // @Output() eventClicked = new EventEmitter<Event>();
  clickedMarker(event: any){
    console.log(event)
  //   this.eventClicked.emit(event);
  }
  // mapClicked($event: MouseEvent) {
  //   console.log(MouseEvent)
  //   this.camerasList.push({
  //     latitude: $event.coords.lat,
  //     longitude: $event.coords.lng,
  //     id: this.camerasList.length,
  //     country: 'string',
  //     city: 'string',
  //     active: true,

  //   });
  // }
}
