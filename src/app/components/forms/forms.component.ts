import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { GetUnitsService } from '../../services/get-units.service';
import { Location } from '../../types/location.interface';

@Component({
  selector: 'app-forms',
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './forms.component.html',
  styleUrl: './forms.component.scss'
})
export class FormsComponent {
  results: Location[] = [];
  filteredResults: Location[] = [];
  formGroup!: FormGroup

  constructor(private formBuilder: FormBuilder, private uniteService: GetUnitsService) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: true
    })
    this.uniteService.getAllUnits().subscribe(data => {
      this.results = data.locations;
      this.filteredResults = data.locations;
    });
  }

  onSubmit() {
    if(!this.formGroup.value.showClosed) {
      this.filteredResults = this.results.filter(location => location.opened === true);
    } else {
      this.filteredResults = this.results;
    }
  }

  onClean() {
    this.formGroup.reset();
    console.log('clean');
  }


}
