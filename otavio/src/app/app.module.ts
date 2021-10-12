import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { OutputComponent } from './output/output.component';
import { InputComponent } from './input/input.component';

@NgModule({
  declarations: [
    AppComponent,
    OutputComponent,
    InputComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
