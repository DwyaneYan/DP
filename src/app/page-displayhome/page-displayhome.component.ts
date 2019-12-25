import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-page-displayhome',
  templateUrl: './page-displayhome.component.html',
  styleUrls: ['./page-displayhome.component.css']
})
export class PageDisplayhomeComponent implements OnInit {

  public materialId

  constructor(
    private route: ActivatedRoute,

  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.materialId = params.get('materialId');
    })
    console.log(this.materialId);
  }

}
