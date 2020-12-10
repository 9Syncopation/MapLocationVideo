import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { ICameras } from '../../store/modelsStore/camera.model';
import {CameraService}from'../../services/camera.service'

import {
  CamerasStoreActions,
  CamerasStoreSelectors,
  CamerasStoreState,
} from '../../store/index';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  error!: string | null;
  isLoading$!: Observable<boolean>;
  cameras$!: Observable<ICameras[]>;
  //  public markerChosen: Event
  constructor(private store$: Store<CamerasStoreState.State>) {}
  // childMapMarkerClicked(event: Event) {
  //   this.markerChosen = event;
  // }

  ngOnInit(): void {
    this.cameras$ = this.store$.select(CamerasStoreSelectors.selectCamerasList);
    this.store$
      .select(CamerasStoreSelectors.selectCamerasError)
      .subscribe((data) => {
        this.error = data;
      });

    this.isLoading$ = this.store$.select(
      CamerasStoreSelectors.selectCamerasIsLoading
    );
    this.store$.dispatch(new CamerasStoreActions.LoadCamerasRequestAction());
  }

  getEmployees() {
    this.store$.dispatch(new CamerasStoreActions.LoadCamerasRequestAction());

    this.store$
      .select(CamerasStoreSelectors.selectCamerasError)
      .subscribe((data) => {
        this.error = data;
      });
  }
}
