import { Component, Input } from '@angular/core';
import { GetUnitsService } from '../../services/get-units.service';
import { Location } from '../../types/location.interface';

@Component({
  selector: 'app-cards-list',
  imports: [],
  templateUrl: './cards-list.component.html',
  styleUrl: './cards-list.component.scss'
})
export class CardsListComponent {

 @Input() unitsList: Location[] = []
  constructor() { }

  ngOnInit(): void {
  }

}
