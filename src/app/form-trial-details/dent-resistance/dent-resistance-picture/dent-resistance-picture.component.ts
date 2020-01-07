import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-dent-resistance-picture',
  templateUrl: './dent-resistance-picture.component.html',
  styleUrls: ['./dent-resistance-picture.component.css']
})
export class DentResistancePictureComponent implements OnInit {
  public materialId
  constructor(private router: Router,) { }

  ngOnInit() { this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
  }

}
