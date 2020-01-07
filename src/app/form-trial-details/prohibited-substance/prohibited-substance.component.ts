import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-prohibited-substance',
  templateUrl: './prohibited-substance.component.html',
  styleUrls: ['./prohibited-substance.component.css']
})
export class ProhibitedSubstanceComponent implements OnInit {

  public materialId
  constructor(   private router: Router,) { }

  ngOnInit() {   this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
  }

}
