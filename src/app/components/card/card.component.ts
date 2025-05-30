import { Component, Input, OnInit } from '@angular/core';
import { Location } from '../../types/location.interface';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() card!: Location;

  constructor() { }

  ngOnInit(): void {
  }

}