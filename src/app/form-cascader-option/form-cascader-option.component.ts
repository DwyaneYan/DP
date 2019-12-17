import { Component } from '@angular/core';
import { NzCascaderOption } from 'ng-zorro-antd/cascader';

const options = [
  {
    value: 'zhejiang',
    label: '力学性能',
    children: [
      {
        value: 'hangzhou',
        label: '内在性能',
        children: [
          {
            value: 'xihu',
            label: '化学成分',
            isLeaf: true
          }
        ]
      },
      {
        value: 'ningbo',
        label: '烘烤硬化值',
        isLeaf: true
      }
    ]
  },
  {
    value: 'jiangsu',
    label: '表面性能',
    children: [
      {
        value: 'nanjing',
        label: '图层性能',
        children: [
          {
            value: 'zhonghuamen',
            label: '图层质量',
            isLeaf: true
          }
        ]
      }
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

  values: any[] = [{
    value: 'zhejiang',
    label: 'Zhejiang'
  }, {
    value: 'hangzhou',
    label: 'Hangzhou'
  }, {
    value: 'xihu',
    label: 'West Lake'
  }]; 

  onChanges(values: string[]): void {
    console.log(values, this.values);
  }
}
