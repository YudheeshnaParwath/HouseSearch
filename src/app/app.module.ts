import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpModule } from '@angular/http';
import {HouseService} from './service/house.service';
import { AppComponent } from './app.component';
import { HouseListComponent } from './house-list/house-list.component';
import { HouseDisplayComponent } from './house-display/house-display.component';


@NgModule({
  declarations: [
    AppComponent,
    HouseListComponent,
    HouseDisplayComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [HouseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
