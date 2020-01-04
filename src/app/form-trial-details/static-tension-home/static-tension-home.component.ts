import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-static-tension-home',
  templateUrl: './static-tension-home.component.html',
  styleUrls: ['./static-tension-home.component.css']
})
export class StaticTensionHomeComponent implements OnInit {

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
