import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-dent-resistance',
  templateUrl: './dent-resistance.component.html',
  styleUrls: ['./dent-resistance.component.css']
})
export class DentResistanceComponent implements OnInit {
  public materialId
  constructor(private route: ActivatedRoute,) { }

  ngOnInit() {    this.route.paramMap.subscribe(params => {
    this.materialId = params.get('materialId');
    })
  }

}
