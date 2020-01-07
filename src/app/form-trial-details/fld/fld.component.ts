import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-fld',
  templateUrl: './fld.component.html',
  styleUrls: ['./fld.component.css']
})
export class FLDComponent implements OnInit {
  public materialId
  constructor(  private route: ActivatedRoute,) { }

  ngOnInit() {    this.route.paramMap.subscribe(params => {
    this.materialId = params.get('materialId');
    })
  }

}
