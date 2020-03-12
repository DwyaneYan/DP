import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import {Router ,ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-page-contrast',
  templateUrl: './page-contrast.component.html',
  styleUrls: ['./page-contrast.component.css']
})

export class PageContrastComponent implements OnInit {

  constructor( private router: Router,
    private routerinfo:ActivatedRoute) { }
    contrastID
  ngOnInit() {  
      $('nz-table').addClass('vertical').find('th, td').wrapInner('<div>');
      //$('table').addClass('vertical');//数字会变垂直，不能用
      this.contrastID = this.router
      .routerState.root.firstChild
      .snapshot.paramMap.get('contrastID');
      console.log(this.contrastID)
  }

}
