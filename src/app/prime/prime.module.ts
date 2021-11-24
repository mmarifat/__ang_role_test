import {NgModule} from "@angular/core";
import {ButtonModule} from "primeng/button";
import {DropdownModule} from "primeng/dropdown";
import {InputTextareaModule} from "primeng/inputtextarea";
import {InputTextModule} from "primeng/inputtext";
import {FileUploadModule} from "primeng/fileupload";
import {ToastModule} from "primeng/toast";
import {MessageService} from "primeng/api";
import {ImageModule} from "primeng/image";

const modules = [ButtonModule, DropdownModule, InputTextareaModule, InputTextModule, FileUploadModule, ToastModule, ImageModule];
const providers = [MessageService]

@NgModule({
  imports: [...modules],
  exports: [...modules],
  providers: [...providers]
})
export class PrimeModule {
}
