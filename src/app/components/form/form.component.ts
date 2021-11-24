import {Component} from '@angular/core';
import {FormField} from "../../interfaces/form-field.interface";
import {Store} from "@ngrx/store";
import {initialFormFieldState} from "../../ngrx/reducers";
import {MessageService} from "primeng/api";
import {updateFormField} from "../../ngrx/actions";
import {AnimationOptionsEnum} from "../../enums/animation-options.enum";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  formField: FormField = {...initialFormFieldState};

  dropDownOption: string[] = [AnimationOptionsEnum.leftToRight, AnimationOptionsEnum.rightToLeft]

  constructor(
    private store: Store<{ formField: FormField }>,
    private messageService: MessageService
  ) {
  }

  onImageSelect = (file: any) => {
    this.formField.image = null;
    this.formField.image = file.currentFiles[0];
  }

  onImageClear = () => {
    this.formField.image = null;
  }

  updateForm = () => {
    if (this.formField.image) {
      this.store.dispatch(updateFormField({
        formField: this.formField
      }))
    } else {
      this.messageService.add({
        severity: 'error',
        detail: 'image needed!!',
        sticky: true
      })
    }
  }

  resetForm = () => {
    this.formField = {...initialFormFieldState}
  }

}
