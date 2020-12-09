import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
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
  // ngOnChanges(changes: SimpleChanges): void {
  //   debugger
  //   if(changes?.cameraList?.currentValue)
  //   this.camerasList = [...changes.cameraList.currentValue] as any
  // }

  ngOnInit(): void {}

  cameraClicked() {
    // emit to home components
  }
}
