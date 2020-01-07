import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-compression',
  templateUrl: './compression.component.html',
  styleUrls: ['./compression.component.css']
})
export class CompressionComponent implements OnInit {

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
