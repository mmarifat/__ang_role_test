import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PrimeModule} from "./prime/prime.module";
import {FormComponent} from './components/form/form.component';
import {PreviewFormComponent} from './components/preview-form/preview-form.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    PreviewFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PrimeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
