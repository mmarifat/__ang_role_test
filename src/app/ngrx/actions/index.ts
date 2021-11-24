import {createAction, props} from "@ngrx/store";
import {FormField} from "../../interfaces/form-field.interface";
import {SET_FORM_FIELD} from "../actionTypes";

export const updateFormField = createAction(SET_FORM_FIELD, props<{ formField: FormField }>())
