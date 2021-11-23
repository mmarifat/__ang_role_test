import {NgModule} from "@angular/core";
import {ButtonModule} from "primeng/button";

const modules = [ButtonModule]

@NgModule({
  imports: [...modules],
  exports: [...modules]
})
export class PrimeModule {
}
