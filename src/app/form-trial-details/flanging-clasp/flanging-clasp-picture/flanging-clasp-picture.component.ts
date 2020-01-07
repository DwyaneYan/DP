import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-flanging-clasp-picture',
  templateUrl: './flanging-clasp-picture.component.html',
  styleUrls: ['./flanging-clasp-picture.component.css']
})
export class FlangingClaspPictureComponent implements OnInit {
  public materialId
  constructor( private router: Router,) { }

  ngOnInit() {this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
  }

}
