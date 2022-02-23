import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';
import { CarouselConfig } from 'ngx-bootstrap/carousel';

interface Skills {
  name: string;
  status: string;
}
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  providers: [
    {
      provide: CarouselConfig,
      useValue: { noPause: false, showIndicators: true },
    },
  ],
  animations: [
    trigger('flipState', [
      state(
        'active',
        style({
          transform: 'rotateY(180.0deg)'
        })
      ),
      state(
        'inactive',
        style({
          transform: 'rotateY(0)',
        })
      ),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in')),
    ]),
  ],
})
export class SkillsComponent {
  skillCard: Skills[] = [
    {
      name: 'html',
      status: 'inactive',
    },
    {
      name: 'angular',
      status: 'inactive',
    },
    {
      name: 'python',
      status: 'inactive',
    },
    {
      name: 'cSharp',
      status: 'inactive',
    },
    {
      name: 'java',
      status: 'inactive',
    },
    {
      name: 'automation',
      status: 'inactive',
    },
    {
      name: 'vba',
      status: 'inactive',
    },
  ];

  constructor() {}

  toggleFlipCard(id: number) {
    this.skillCard[id]['status'] =
      this.skillCard[id]['status'] === 'inactive' ? 'active' : 'inactive';
  }
}
