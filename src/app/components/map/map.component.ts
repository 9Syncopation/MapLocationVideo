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
    console.log(event);
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
  }
  @Output() eventClicked = new EventEmitter<Event>();
  clickedMarker(event: Event): void {
    this.eventClicked.emit(event);
  }
  // mapClicked($event: MouseEvent) {
  //   this.camerasList.push({
  //     latitude: $event.coords.lat,
  //     longitude: $event.coords.lng,
  //     id: 123,
  //     country: 'string',
  //     city: 'string',
  //     active: true,

  //   });
  // }
}
