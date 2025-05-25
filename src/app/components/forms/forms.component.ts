import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { GetUnitsService } from '../../services/get-units.service';
import { Location } from '../../types/location.interface';
import { FilterUnitsService } from '../../services/filtered-results.service';

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

  constructor(
    private formBuilder: FormBuilder,
    private uniteService: GetUnitsService,
    private filterUnitsService: FilterUnitsService) { }

  ngOnInit() {
    this.formGroup = this.formBuilder.group({
      hour: '',
      showClosed: true
    })
    this.uniteService.getAllUnits().subscribe(data => {
      this.results = data;
      this.filteredResults = data;
    });
  }

  onSubmit() {
    let { showClosed, hour } = this.formGroup.value
    this.filteredResults = this.filterUnitsService.filter(this.results, showClosed, hour);
    this.uniteService.setFilteredUnits(this.filteredResults);
  }

  onClean() {
    this.formGroup.reset();
    console.log('clean');
  }


}
