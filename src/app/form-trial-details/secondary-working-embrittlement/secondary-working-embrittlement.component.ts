import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-secondary-working-embrittlement',
  templateUrl: './secondary-working-embrittlement.component.html',
  styleUrls: ['./secondary-working-embrittlement.component.css']
})
export class SecondaryWorkingEmbrittlementComponent implements OnInit {
  public materialId
  constructor(    private route: ActivatedRoute,) { }

  ngOnInit() {    this.route.paramMap.subscribe(params => {
    this.materialId = params.get('materialId');
    })
  }

}
