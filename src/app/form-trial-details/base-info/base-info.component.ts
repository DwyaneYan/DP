import { Component, OnInit, Input , Output, EventEmitter} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-base-info',
  templateUrl: './base-info.component.html',
  styleUrls: ['./base-info.component.css']
})
export class BaseInfoComponent implements OnInit {

  @Input() materialId:string;
  //材料基本信息
  public baseInfo = []
  @Output()checkvalue = new EventEmitter<any>();//材料名称传给路由出口组件
  constructor(
    public http: HttpClient,
    private ApiService: ApiService,
  ) { }

  ngOnInit() {
    this.GetBaseInfo()
  }

   GetBaseInfo(){
    let params= {
      Id: this.materialId, 
    }
     this.ApiService.GetMater(params)
    .then((res:any)=>{
      this.baseInfo = res.items;
      this.checkvalue.emit(this.baseInfo[0].name);
    })  
  }
}
