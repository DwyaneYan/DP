import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-form-material-db-background',
  templateUrl: './form-material-db-background.component.html',
  styleUrls: ['./form-material-db-background.component.css']
})
export class FormMaterialDbBackgroundComponent implements OnInit {

  //存放查询到的材料
  materials

  public params = {
    Name: '', 
  }


  constructor(
    public http: HttpClient,

  ) { }

  ngOnInit() {
  }

  public async SearchMaterialByName(){
    let params = this.params
    let api = "http://localhost:60001/api/hangang/material/materials";
    await this.http.get(api, {params})
    .toPromise()
    .then((res:any) =>{
      this.materials = res.items
    })
    console.log(this.materials)
  }

}
