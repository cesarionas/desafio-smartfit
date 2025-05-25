import { Component, Input, OnInit } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Location } from '../../types/location.interface';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cards-list',
  templateUrl: './cards-list.component.html',
  imports: [
    CardComponent,
    CommonModule
  ],
  styleUrls: ['./cards-list.component.scss']
})
export class CardsListComponent implements OnInit {
  @Input() unitsList: Location[] = [];

  constructor() { }

  ngOnInit(): void { }

}