import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, delay } from "rxjs/operators";
import { ICameras } from "../store/modelsStore/camera.model";
@Injectable({
  providedIn: 'root',
})
export class CameraService {
  cameras: Observable<any> | undefined;
  constructor(private httpService: HttpClient,
  //   //  public markerChosen: Event
    ) {}
    
    getCameras(): Observable<any> {
      console.log(this.cameras)
      return this.cameras = this.httpService.get(
        '../../../assets/data/cameras.json'
        );
        
      }
    }
