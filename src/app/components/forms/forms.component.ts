import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-forms',
  imports: [
    ReactiveFormsModule
  ],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent {
  results = []
  formGroup!: FormGroup

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: false
    })
  }

  onSubmit() {
    console.log(this.formGroup.value);
    console.log('submit');
  }

  onClean() {
    this.formGroup.reset();
    console.log('clean');
  }


}
