import { BrowserModule } from '@angular/platform-browser';
import { NgModule,APP_INITIALIZER } from '@angular/core';

import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './components/layout/header/header.component';
import { HomeComponent } from './container/home/home.component';
import { AboutComponent } from './container/about/about.component';
import { CameraListComponent } from './components/camera-list/camera-list.component';
import { MapComponent } from './components/map/map.component';
import { CameraEventsComponent } from './components/camera-events/camera-events.component';
import { StoreModule } from '@ngrx/store';
import {LoadCamerasRequestAction} from './store/actions/cameras.actions';
import {ICameras}from './store/modelsStore/camera.model';
import { Store } from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    CameraListComponent,
    MapComponent,
    CameraEventsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ }),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBhQ6D7rp0T7VlSH89eBcb3mhDemyrZEC8',
    }),
    HttpClientModule,
  ],
  providers: [ {
    provide: APP_INITIALIZER,
    useFactory: (store: Store<ICameras>) => {
      return () => {
        store.dispatch(new LoadCamerasRequestAction());
      };
    },
    multi: true,
    deps: [Store]
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
