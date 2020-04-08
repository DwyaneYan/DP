import { Component, OnInit, Input } from '@angular/core';
import { ExperimentalItemService } from './experimental-item.service'



@Component({
  selector: 'app-form-experimental-item',
  templateUrl: './form-experimental-item.component.html',
  styleUrls: ['./form-experimental-item.component.css']
})
export class FormExperimentalItemComponent implements OnInit {
  @Input() materialId

  public trials
  public trialName=[]
  public staticTension
  public compress
  public highspeedTension
  public dizhoupilao
  public gaozhoupilao
  public jinxiang
  public wulixingneng
  public jinyongwuzhi
  public biaomianxn
  public bend
  public chemical
  public kangAoxn
  public ercijiagongcx
  public fanbiankouhexn
  public qingzhiyanchikl
  public hanjiexn
  public jiaojiexn
  public tuzhuangxn
  public FLD
  public huitanxn
  public hongkaoyh


  constructor(
    private experimentalItemService: ExperimentalItemService,


  ) { } 

  ngOnInit() {
    this.GetTrials(this.materialId)
    
}

public async GetTrials(materialId){
  await this.experimentalItemService.GetTrials(materialId).then((res:any) => {
    this.trials = res
  })
// console.log(this.trials)
this.trials.forEach((val,i,array) => {
  this.trialName.push(val.name)
});
// console.log(this.trialName)
this.staticTension = this.trialName.includes("静态拉伸1")
this.compress = this.trialName.includes("压缩1")
this.highspeedTension = this.trialName.includes("高速拉伸1")
this.dizhoupilao = this.trialName.includes("低周疲劳1")
this.gaozhoupilao = this.trialName.includes("高周疲劳1")
this.jinxiang = this.trialName.includes("金相1")
this.wulixingneng = this.trialName.includes("物理性能1")
this.jinyongwuzhi = this.trialName.includes("禁用物质1")
this.biaomianxn = this.trialName.includes("表面性能1")
this.bend = this.trialName.includes("弯曲1")
this.chemical =  this.trialName.includes("化学成分1")
this.kangAoxn = this.trialName.includes("抗凹性能1")
this.ercijiagongcx = this.trialName.includes("二次加工脆性1")
this.fanbiankouhexn = this.trialName.includes("翻遍扣合性能1")
this.qingzhiyanchikl = this.trialName.includes("氢致延迟开裂1")
this.hanjiexn = this.trialName.includes("焊接性能1")
this.jiaojiexn = this.trialName.includes("胶结性能1")
this.tuzhuangxn = this.trialName.includes("涂装性能1")
this.FLD = this.trialName.includes("成型极限1")
this.huitanxn = this.trialName.includes("回弹性能1")
this.hongkaoyh = this.trialName.includes("烘烤硬化1")
// console.log(this.bend,this.chemical)
}
}
