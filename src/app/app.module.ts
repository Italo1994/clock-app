import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainScreenComponent } from './components/main-screen/main-screen.component';
import { AreaClockComponent } from './components/area-clock/area-clock.component';
import { AreaApiComponent } from './components/area-api/area-api.component';
import { HiddenZoneComponent } from './hidden-zone/hidden-zone.component';

@NgModule({
  declarations: [
    AppComponent,
    MainScreenComponent,
    AreaClockComponent,
    AreaApiComponent,
    HiddenZoneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
