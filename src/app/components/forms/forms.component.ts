import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { GetUnitsService } from '../../services/get-units.service';

@Component({
  selector: 'app-forms',
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent {
  results = []
  formGroup!: FormGroup

  constructor(private formBuilder: FormBuilder, private uniteService: GetUnitsService) { }

  ngOnInit() {
    this.uniteService.getAllUnits().subscribe(data => console.log(data));
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
