import { Component, Output, EventEmitter,Input } from '@angular/core';
import { NzCascaderOption } from 'ng-zorro-antd/cascader';

const options = [
  {
    value: 'lihuaxingneng',
    label: '理化性能',
    children: [
      {
        value: 'StaticTension',
        label: '静态拉伸',
        isLeaf: true
          },
      {
        value: 'Bending',
        label: '弯曲', 
        isLeaf: true  
          },
      {
        value: 'Compress',
        label: '压缩',  
        isLeaf: true
              },
      {
        value: 'HighSpeedStrech',
        label: '高速拉伸',  
        isLeaf: true
              },
      {
        value: 'LowCycleFatigue',
        label: '低周疲劳', 
        isLeaf: true 
        },
      {
        value: 'HighCycleFatigueing',
        label: '高周疲劳',
        isLeaf: true  
        },
      {
        value: 'Metallographic',
        label: '金相',  
        isLeaf: true
          },
      {
        value: 'PhysicalPerformance',
        label: '物理性能', 
        isLeaf: true 
          },
      {
        value: 'ChemicalElement',
        label: '化学成分',
        isLeaf: true  
          }, 
      {
        value: 'ProhibitedSubstance',
        label: '禁用物质', 
        isLeaf: true 
          },
      {
        value: 'SurfaceProperty',
        label: '表面性能', 
        isLeaf: true
          },                
        ]
      },
     
  {
    value: 'gongyixingneng',
    label: '工艺性能',
    children: [
      {
        value: 'DentResistance',
        label: '抗凹性能',
        isLeaf: true
      },
      {
        value: 'SecondaryWorkingEmbrittlement',
        label: '二次加工脆性',
        isLeaf: true
      },
      {
        value: 'FlangingClasp',
        label: '翻边扣合性能',
        isLeaf: true
      },
      {
        value: 'HydrogenInducedDelayedFracture',
        label: '氢致延迟开裂',
        isLeaf: true
      },
      {
        value: 'Welding',
        label: '焊接性能',
        isLeaf: true
      },
      {
        value: 'Cementing',
        label: '胶结性能',
        isLeaf: true
      },
      {
        value: 'Painting',
        label: '涂装性能',
        isLeaf: true
      },
      {
        value: 'FLD',
        label: '成型极限',
        isLeaf: true
      },
      {
        value: 'Rebound',
        label: '回弹性能',
        isLeaf: true
      },
      {
        value: 'BakeHardening',
        label: '烘烤硬化',
        isLeaf: true
      },
    ]
    }
];

@Component({
  selector: 'app-form-cascader-option',
  templateUrl: './form-cascader-option.component.html',
  styleUrls: ['./form-cascader-option.component.css']
})
export class FormCascaderOptionComponent {
  nzOptions: NzCascaderOption[] = options;


@Output()//与@input相反
checkvalue = new EventEmitter<any>();//用属性checkvalue来存放自定义事件
  values: any[] = []; 

  onChanges(values: string[]){
    this.checkvalue.emit(values[1]);//触发事件，并传入values[1]作为消息载荷。父指令通过绑定到这个属性来监听事件，并通过 $event 对象来访问载荷。
console.log(values)
  }
}
