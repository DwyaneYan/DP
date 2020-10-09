import { Component, OnInit, Input } from '@angular/core';
import {button} from 'src/app/picture'



@Component({
  selector: 'app-children-nav',
  templateUrl: './children-nav.component.html',
  styleUrls: ['./children-nav.component.css']
})
export class ChildrenNavComponent implements OnInit {
  @Input() p1
  @Input() p2
  @Input() p3
  @Input() p4
  button = button

  constructor() { }

  ngOnInit() {
  }
}
