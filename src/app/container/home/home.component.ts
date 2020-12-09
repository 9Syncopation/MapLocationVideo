import { Component, OnInit } from '@angular/core';
// import { CameraService } from 'src/app/services/camera.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { ICamera } from 'src/app/models/models';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  camerasList: Observable<any> | undefined;
  constructor(
    // private cameraService: CameraService,
    private httpService: HttpClient,
    public markerChosen: Event
    ) {}

  childMapMarkerClicked(event: Event) {
    this.markerChosen = event;
  }

  ngOnInit(): void {
    
    this.camerasList = this.httpService.get(
      '../../../assets/data/cameras.json'
    );
  }
}
