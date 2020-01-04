import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-bending',
  templateUrl: './bending.component.html',
  styleUrls: ['./bending.component.css']
})
export class BendingComponent implements OnInit {

  public materialId

  constructor(
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.materialId = params.get('materialId');
      })
  }

}
