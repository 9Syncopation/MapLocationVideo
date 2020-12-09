import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  camerasList: Observable<any> | undefined;
  constructor(private httpService: HttpClient,
    //  public markerChosen: Event
     ) {}

  // childMapMarkerClicked(event: Event) {
  //   this.markerChosen = event;
  // }

  ngOnInit(): void {
    this.camerasList = this.httpService.get(
      '../../../assets/data/cameras.json'
    );
  }
}
