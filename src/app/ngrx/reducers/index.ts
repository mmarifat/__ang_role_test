import {Action, ActionReducer, createReducer, on} from '@ngrx/store';
import {FormField} from "../../interfaces/form-field.interface";
import {updateFormField} from "../actions";

export const initialFormFieldState: FormField = {
  image: null,
  url: '',
  animation: ''
}

const _formFieldReducer: ActionReducer<FormField> = createReducer(
  initialFormFieldState,
  on(updateFormField, (state, payload) => ({...state, ...payload.formField}))
);

export function formFieldReducer(state: FormField | undefined, action: Action) {
  return _formFieldReducer(state, action)
}
