import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss'],
  animations: [
    trigger('flipState', [
      state('active', style({
        transform: 'rotateY(179.9deg)'
      })),
      state('inactive', style({
        transform: 'rotateY(0)'
      })),
      transition('active => inactive', animate('500ms ease-out')),
      transition('inactive => active', animate('500ms ease-in'))
    ])
  ]
})
export class SkillsComponent implements OnInit {



  ngOnInit(): void {
  }

  flip: string = 'inactive';
  flip1: string = 'inactive';
  flip2: string = 'inactive';
  flip3: string = 'inactive';
  flip4: string = 'inactive';
  flip5: string = 'inactive';


  constructor() {}

  toggleFlipHTML() {
    this.flip = (this.flip == 'inactive') ? 'active' : 'inactive';
  }
  toggleFlipAngular() {
    this.flip1 = (this.flip1 == 'inactive') ? 'active' : 'inactive';
  }
  toggleFlipCsharp() {
    this.flip2 = (this.flip2 == 'inactive') ? 'active' : 'inactive';
  }
  toggleFlipJava() {
    this.flip3 = (this.flip3 == 'inactive') ? 'active' : 'inactive';
  }
  toggleFlipAuto() {
    this.flip4 = (this.flip4 == 'inactive') ? 'active' : 'inactive';
  }
  toggleFlipVBA() {
    this.flip5 = (this.flip5 == 'inactive') ? 'active' : 'inactive';
  }

}
