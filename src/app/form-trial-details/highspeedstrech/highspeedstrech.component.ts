import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-highspeedstrech',
  templateUrl: './highspeedstrech.component.html',
  styleUrls: ['./highspeedstrech.component.css']
})
export class HighspeedstrechComponent implements OnInit {
  public materialId
  constructor( private route: ActivatedRoute,) { }

  ngOnInit() {    this.route.paramMap.subscribe(params => {
    this.materialId = params.get('materialId');
    })
  }

}
