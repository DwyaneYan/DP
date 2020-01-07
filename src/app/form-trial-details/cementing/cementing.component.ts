import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-cementing',
  templateUrl: './cementing.component.html',
  styleUrls: ['./cementing.component.css']
})
export class CementingComponent implements OnInit {
  public materialId
  constructor( private route: ActivatedRoute,) { }

  ngOnInit() {   this.route.paramMap.subscribe(params => {
    this.materialId = params.get('materialId');
    })
  }

}
