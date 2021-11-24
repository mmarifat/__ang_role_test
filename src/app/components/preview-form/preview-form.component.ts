import {Component} from '@angular/core';
import {Store} from "@ngrx/store";
import {FormField} from "../../interfaces/form-field.interface";
import {initialFormFieldState} from "../../ngrx/reducers";
import {AnimationOptionsEnum} from "../../enums/animation-options.enum";

@Component({
  selector: 'app-preview-form',
  templateUrl: './preview-form.component.html',
  styleUrls: ['./preview-form.component.scss']
})
export class PreviewFormComponent {
  formField: FormField = {...initialFormFieldState};

  constructor(private store: Store<{ formField: FormField }>) {
    this.store.select('formField').subscribe(res => {
      this.formField = res;
    })
  }

  gotoToLink = (link: string) => {
    window.open(link, "__target")
  }

  getStyleClass = (animation: string) => {
    if (animation === AnimationOptionsEnum.rightToLeft) {
      return 'preview-animation-left'
    }
    if (animation === AnimationOptionsEnum.leftToRight) {
      return 'preview-animation-right'
    }
    return 'preview-animation-default'
  }
}
