import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-base-info',
  templateUrl: './base-info.component.html',
  styleUrls: ['./base-info.component.css']
})
export class BaseInfoComponent implements OnInit {

  @Input() materialId;

  public params = {
    Id: '', 
  }

  //存放
  public baseInfo
  mater = []

  constructor(
    public http: HttpClient,
    private ApiService: ApiService,

  ) { }

  ngOnInit() {
    // console.log(this.materialId)
    this.GetBaseInfo()
    
  }

  public async GetBaseInfo(){
    let params= {
      Id: '', 
    }
    params.Id = this.materialId
   // let api = "http://localhost:60001/api/hangang/material/materials";
    await this.ApiService.GetMater(params)
    .then((res:any)=>{
      this.baseInfo = res.items;
      // console.log(this.baseInfo)
    })

    
    this.checkvalue.emit(this.baseInfo[0].name);
  }
  @Output()//与@input相反
  checkvalue = new EventEmitter<any>();
}
