import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-metallographic',
  templateUrl: './metallographic.component.html',
  styleUrls: ['./metallographic.component.css']
})
export class MetallographicComponent implements OnInit {
  public materialId
  constructor(    private route: ActivatedRoute,) { }

  ngOnInit() {    this.route.paramMap.subscribe(params => {
    this.materialId = params.get('materialId');
    })
  }

}
