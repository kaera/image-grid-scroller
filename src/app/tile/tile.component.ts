import { Component, Input, OnInit } from '@angular/core';
import { Image } from '../image';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-tile',
  templateUrl: './tile.component.html',
  styleUrls: ['./tile.component.scss'],
  animations: [
    trigger('fadeAnimation', [
      state('in', style({ opacity: 1})),
      transition(':enter', [
        style({ opacity: 0 }),
        animate(600)
      ]),
      transition(':leave', animate(600, style({ opacity: 0 })))
    ])
  ]
})
export class TileComponent implements OnInit {
  @Input() image: Image;
  constructor() { }

  ngOnInit() {
  }

}
