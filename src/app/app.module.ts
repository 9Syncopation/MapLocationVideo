import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { HomeComponent } from './container/home/home.component';
import { AboutComponent } from './container/about/about.component';
import { CameraListComponent } from './components/camera-list/camera-list.component';
import { MapComponent } from './components/map/map.component';
import { CameraEventsComponent } from './components/camera-events/camera-events.component';
import { StoreModule } from '@ngrx/store';
import {camerasReducer } from './store/reducers/cameras.reducers';

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
    StoreModule.forRoot({
     cameraState: camerasReducer}),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBhQ6D7rp0T7VlSH89eBcb3mhDemyrZEC8',
    }),
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
