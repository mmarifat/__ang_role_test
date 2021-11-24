import {Component} from '@angular/core';
import {FormField} from "../../interfaces/form-field.interface";
import {Store} from "@ngrx/store";
import {MessageService} from "primeng/api";
import {updateFormField} from "../../ngrx/actions";
import {AnimationOptionsEnum} from "../../enums/animation-options.enum";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {
  public formField = {
    image: null,
    url: '',
    animation: AnimationOptionsEnum.leftToRight
  }

  dropDownOption: string[] = [AnimationOptionsEnum.leftToRight, AnimationOptionsEnum.rightToLeft]

  constructor(
    private store: Store<{ formField: FormField }>,
    private messageService: MessageService
  ) {
  }

  onImageSelect = (file: any) => {
    this.formField = {
      ...this.formField,
      image: file.currentFiles[0]
    };
  }

  onImageClear = () => {
    this.formField = {
      ...this.formField,
      image: null
    };
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
}
