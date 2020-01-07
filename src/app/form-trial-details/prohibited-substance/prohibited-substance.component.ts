import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-prohibited-substance',
  templateUrl: './prohibited-substance.component.html',
  styleUrls: ['./prohibited-substance.component.css']
})
export class ProhibitedSubstanceComponent implements OnInit {

  public materialId
  constructor(    private route: ActivatedRoute,) { }

  ngOnInit() {    this.route.paramMap.subscribe(params => {
    this.materialId = params.get('materialId');
    })
  }

}
