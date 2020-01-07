import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-prohibited-substance-picture',
  templateUrl: './prohibited-substance-picture.component.html',
  styleUrls: ['./prohibited-substance-picture.component.css']
})
export class ProhibitedSubstancePictureComponent implements OnInit {
  public materialId
  constructor(private router: Router,) { }

  ngOnInit() { this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
  }

}
