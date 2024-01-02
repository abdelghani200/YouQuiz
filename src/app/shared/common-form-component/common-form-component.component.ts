import { Component, Input, forwardRef } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-common-form-component',
  templateUrl: './common-form-component.component.html',
  styleUrls: ['./common-form-component.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CommonFormComponentComponent),
      multi: true
    }
  ],
  
})
export class CommonFormComponentComponent implements ControlValueAccessor{

  @Input() label!: string;
  @Input() labelFor!: string;
  
  @Input() inputName!: string;
  @Input() inputId!: string;
  @Input() formControlName!: string;
  @Input() placeholder!: string;
  @Input() isRequired = false;
  @Input() max?: number;
  @Input() min?: number;
  @Input() selectOptions?: any[] = [];

  @Input() inputType: string | 'select' = 'text';



  @Input() formGroup!: FormGroup;

































  



  // template: `
  //   <div [formGroup]="formGroup">
  //     <label>{{ label }}</label>
  //     <input [type]="inputType" [formControlName]="formControlName" [placeholder]="placeholder">
  //   </div>
  // `

  // The internal value of the input
  private innerValue: any = '';

  // Function to call when the input is touched (needed for validation)
  private onTouchedCallback: () => void = () => {};

  // Function to call when the input value changes
  private onChangeCallback: (_: any) => void = () => {};

  // Set the value of the input and call the onChange callback
  writeValue(value: any): void {
    this.innerValue = value;
    this.onChangeCallback(value);
  }

  // Register the onChange callback
  registerOnChange(fn: any): void {
    this.onChangeCallback = fn;
  }

  // Register the onTouched callback
  registerOnTouched(fn: any): void {
    this.onTouchedCallback = fn;
  }

  // Set the disabled state and call the onTouched callback
  setDisabledState?(isDisabled: boolean): void {
    this.onTouchedCallback();
  }

  // Handle the input value changes and call the onChange callback
  handleChange(event: any): void {
    this.innerValue = event.target.value;
    this.onChangeCallback(this.innerValue);
  }


}
