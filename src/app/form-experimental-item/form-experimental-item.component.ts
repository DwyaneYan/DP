import { Component, OnInit, Input } from '@angular/core';
import { ExperimentalItemService } from './experimental-item.service'



@Component({
  selector: 'app-form-experimental-item',
  templateUrl: './form-experimental-item.component.html',
  styleUrls: ['./form-experimental-item.component.css']
})
export class FormExperimentalItemComponent implements OnInit {
  @Input() materialId
// table1=["静态拉伸","弯曲","压缩","高速拉伸","低周疲劳","高周疲劳","金相","物理性能","化学成分",
// "禁用物质","表面性能","抗凹性能","二次加工脆性","翻边扣合性能","氢致延迟开裂","焊接性能",
// "胶结性能","涂装性能","成型极限FLD","回弹性能","烘烤硬化"]
  constructor(
    private experimentalItem: ExperimentalItemService,


  ) { } 

  ngOnInit() {

}


}
