import { Component, OnInit, Input } from '@angular/core';
import { ICamera } from 'src/app/models/models';

@Component({
  selector: 'app-camera-list',
  templateUrl: './camera-list.component.html',
  styleUrls: ['./camera-list.component.css'],
})
export class CameraListComponent implements OnInit {
  @Input() camerasList: ICamera[] = [];
  constructor() {
    console.log(this.camerasList);
  }

  ngOnInit(): void {}

  cameraClicked() {
    // emit to home components
  }
}
