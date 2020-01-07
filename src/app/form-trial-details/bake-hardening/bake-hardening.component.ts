import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-bake-hardening',
  templateUrl: './bake-hardening.component.html',
  styleUrls: ['./bake-hardening.component.css']
})
export class BakeHardeningComponent implements OnInit {
public materialId
  constructor(private route: ActivatedRoute,) { }

  ngOnInit() {   this.route.paramMap.subscribe(params => {
    this.materialId = params.get('materialId');
    })
  }

}
