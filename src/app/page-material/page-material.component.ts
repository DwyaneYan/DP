import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-page-material',
  templateUrl: './page-material.component.html',
  styleUrls: ['./page-material.component.css']
})

export class PageMaterialComponent implements OnInit {

  //冷轧
  public lengzha = [
    {value: 'IF钢'},
    {value: '双相钢'},
    {value: '马氏体钢'},
    {value: '铸铁'},
    {value: '低碳铝镇静钢'},
    {value: '其他'},
  ]

  //镀锌
  public duxin = [
    {value: '镀锌材料1'},
    {value: '镀锌材料2'},
    {value: '其他'},
  ]

  //热轧
  public rezha = [
    {value: '热轧材料1'},
    {value: '热轧材料2'},
    {value: '其他'},
  ]

  //中板
  public zhongban = [
    {value: '中板材料1'},
    {value: '中板材料2'},
    {value: '其他'},
  ]
  
  
  
  //厂家
  public listManufacturer = [    
    {
      value: '邯钢',
    },
    {
      value: '宝钢',
    },
    {
      value: '马钢',
    }
  ]
    //型号规格
  public listType = [    
    {
      value: '0.6mm',
    },
    {
      value: '1.2mm',
    },
    {
      value: '2.0mm',
    },
    {
      value: '2.5~5.4mm',
    },
  ]
    //强度
  public listStrength = [    
    {
      value: '200~500MPa',
    },
    {
      value: '500~800MPa',
    },
    {
      value: '800~1200MPa',
    },
    {
      value: '>1200MPa',
    },
  ]

  public params = {
    class:'',
    manufacturer: '',
    type: "",
    strength:"",}
  


  constructor() { }



  //获取筛选条件
  filtrationClass(item){
    this.params.class = item.value
    console.log(this.params)
  }
  filtrationManufacturer(item) {
    this.params.manufacturer = item.value
    console.log(this.params)
  }
  filtrationType(item) {
    this.params.type = item.value
    console.log(this.params)
  }
  filtrationStrength(item) {
    this.params.strength = item.value
    console.log(this.params)
  }

  clear(){
    this.params.class = '',
    this.params.manufacturer = '',
    this.params.type = '',
    this.params.strength = ''
    console.log(this.params)
  }























  ngOnInit() {
  }

}
