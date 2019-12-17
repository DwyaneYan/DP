import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { MaterialServiceService } from './material-service.service'

@Component({
  selector: 'app-page-material',
  templateUrl: './page-material.component.html',
  styleUrls: ['./page-material.component.css']
})

export class PageMaterialComponent implements OnInit {

  //#region 材料分类字段
  //冷轧
  public lengzha = [
    {value: '烘烤硬化钢'},
    {value: '高强IF钢'},
    {value: '低碳铝镇静钢'},
    {value: '低合金高强度钢'},
    {value: '双相钢'},
    {value: '淬火延性钢'},
    {value:'马氏体钢'},
    {value:'增强成形性双相钢'},
    {value:'IF钢'}
  ]

  //镀锌
  public duxin = [
    {value: '烘烤硬化钢'},
    {value: '高强IF钢'},
    {value: '低碳铝镇静钢'},
    {value:'低合金高强度钢'},
    {value:'双相钢'},
    {value:'IF钢'},
    {value:'增强成形性双相钢'}
  ]

  //热轧
  public rezha = [
    {value: '低碳钢'},
    {value: 'SAPH系列'},
    {value: 'QStE结构钢系列'},
    {value:'大梁钢'},
    {value:'车轮钢'},
    {value:'热轧双相钢'},
    {value:'箱体钢'},
    {value:'制动鼓用钢'}
  ]

  //中厚板
  public zhongban = [
    {value: '大梁钢'},
    {value: '车轮钢'},
    {value: '车桥钢'},
    {value:'自卸车厢体用耐磨钢'}
  ]
  //#endregion
  
  //#region 限制条件字段
  //厂家
  public listManufacturer = [    
    {
      value: '邯钢',
    },
    {
      value: 'BG',
    },
    {
      value: 'SG',
    },
    {value:'其他'}
  ]
    //型号规格
  public listModel = [    
    {
      value: '0.7mm',
    },
    {
      value: '1.2mm',
    },
    {
      value: '1.5mm',
    },
    {
      value: '6.0mm',
    },
  ]
    //屈服强度
  public listStrength = [    
    {
      value: '120~180MPa',
    },
    {
      value: '180~340MPa',
    },
    {
      value: '340~500MPa',
    },
    {
      value: '500~1200MPa',
    },
  ]
  //#endregion

  //查询条件表单
  public params = {
    materialType:'',  //材料分类
    manufacturer: '',  //生产厂家
    model: "",  //型号规格
    strength:"",}  //屈服强度
  

  constructor(
    private materialService: MaterialServiceService,)   { }  //实例化材料服务
  ngOnInit() {
  }


  //获取筛选条件
  filtrationMaterialType(item){
    this.params.materialType = item.value
    
    this.materialService.Getmaterial(this.params);
    
    console.log(this.params)
  }
  filtrationManufacturer(item) {
    this.params.manufacturer = item.value
    console.log(this.params)
  }
  filtrationModel(item) {
    this.params.model = item.value
    console.log(this.params)
  }
  filtrationStrength(item) {
    this.params.strength = item.value
    console.log(this.params)
  }

  clear(){
    this.params.materialType = '',
    this.params.manufacturer = '',
    this.params.model = '',
    this.params.strength = ''
    console.log(this.params)
  }

























}
