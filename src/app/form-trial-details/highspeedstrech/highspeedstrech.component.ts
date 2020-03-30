import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-highspeedstrech',
  templateUrl: './highspeedstrech.component.html',
  styleUrls: ['./highspeedstrech.component.css']
})
export class HighspeedstrechComponent implements OnInit {
  public materialId
  name
  constructor(     private router: Router,) { }

  ngOnInit() {        this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
  }
  check($event){
this.name=$event
console.log(this.name)
  }
}
