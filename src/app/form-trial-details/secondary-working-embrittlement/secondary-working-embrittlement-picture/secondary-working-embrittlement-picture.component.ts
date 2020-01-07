import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-secondary-working-embrittlement-picture',
  templateUrl: './secondary-working-embrittlement-picture.component.html',
  styleUrls: ['./secondary-working-embrittlement-picture.component.css']
})
export class SecondaryWorkingEmbrittlementPictureComponent implements OnInit {
  public materialId
  constructor(private router: Router,) { }

  ngOnInit() { this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
  }

}
