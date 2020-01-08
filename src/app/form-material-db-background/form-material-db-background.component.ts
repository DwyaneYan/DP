import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-form-material-db-background',
  templateUrl: './form-material-db-background.component.html',
  styleUrls: ['./form-material-db-background.component.css']
})
export class FormMaterialDbBackgroundComponent implements OnInit {

  materialName='';

  constructor(
    public http: HttpClient,

  ) { }

  ngOnInit() {
  }
  
}
