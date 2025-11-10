import { Component, Input , OnInit, Optional, Injector} from '@angular/core';
import { ControlValueAccessor, FormsModule, NgControl } from '@angular/forms';

@Component({
  selector: 'custom-input',
  imports: [FormsModule],
  templateUrl: './form-input.html',
  styleUrl: './form-input.scss',
})
export class FormInput implements OnInit, ControlValueAccessor {
  @Input() disabled: boolean;
  @Input() label: string;
  @Input() placeholder: string = "";
  @Input() type: 'text' | 'email' | 'password' = 'text';

  value: any = '';
  onChange = (value: any) => {};
  onTouched = () => {};

  constructor(
    @Optional()
    private ngControl: NgControl,
    private injector: Injector
  ) {
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  ngOnInit() {
    console.log(this.ngControl)
    console.log(this.ngControl.valueAccessor)
    console.log(this.ngControl.name)
  }

  writeValue(value: any): void {
    this.value = value ?? '';
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  set controlValue(value: any) {
    this.ngControl.control?.setValue(value)
  }












}
