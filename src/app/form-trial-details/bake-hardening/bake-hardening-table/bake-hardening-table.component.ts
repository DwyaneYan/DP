import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-bake-hardening-table',
  templateUrl: './bake-hardening-table.component.html',
  styleUrls: ['./bake-hardening-table.component.css']
})
export class BakeHardeningTableComponent implements OnInit {
public materialId
  constructor(private route: ActivatedRoute,) { }

  ngOnInit() {this.route.paramMap.subscribe(params => {
    this.materialId = params.get('materialId');
    })
  }

}
