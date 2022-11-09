import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';


import { AppComponent } from './app.component';
import { SizerComponent } from './sizer/sizer.component';
import { FormsModule } from '@angular/forms';

import { NgxUi5WebComponentScopingDemoModule } from 'ngx-ui5-web-component-scoping-demo'


@NgModule({
  declarations: [
    AppComponent,
    SizerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgxUi5WebComponentScopingDemoModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
