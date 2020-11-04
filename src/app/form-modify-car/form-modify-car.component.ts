import { Component, OnInit ,Input,Output,EventEmitter,OnChanges,SimpleChanges} from '@angular/core';
import { NzMessageService } from 'ng-zorro-antd/message';
import { FormBuilder } from '@angular/forms';
import { ApiService } from '../api.service'

@Component({
  selector: 'app-form-modify-car',
  templateUrl: './form-modify-car.component.html',
  styleUrls: ['./form-modify-car.component.css']
})
export class FormModifyCarComponent implements OnInit {
  @Input() isVisible
  @Input() carId //父组件传来的车型id
  @Input() form
  @Input() mater  //修改车型信息需要材料id
  @Output() private outer=new EventEmitter<string>(); //自定义事件名，点击修改触发，在父组件中监听
  @Output() private outer1=new EventEmitter<string>(); //自定义事件名，点击关闭触发，在父组件中监听
  value = '' //车型名称
  profileForm //修改表单
  maUrl1 = ''//车型图片上传地址
  maUrl2 = ''//车型文件上传地址
  formDataList = []
  returnFalse = false
  formData = new FormData();
  constructor(
    private fb: FormBuilder,
    // public http: HttpClient,
    private msg: NzMessageService,
    public ApiService: ApiService,

    ) { }

  ngOnInit() {
    this.profileForm = this.fb.group({
      jiankuang: [this.form.breif],
      lingjian: [this.form.suppliedPart],
      yaoqiu: [this.form.requirement],
      })
      this.value = this.form.vehicleType
      this.maUrl1=`/api/hangang/trialdatadetail/ApplicationCasePicturePut?Id=${this.carId}`
      this.maUrl2=`/api/hangang/trialdatadetail/ApplicationCaseDocumentPut?Id=${this.carId}`
  }
  
  handleCancel(): void {
    this.isVisible = false;
    this.outer1.emit(this.isVisible)
  }
  update() {
    this.outer.emit() 
  }

    //提交修改车型信息
  submitForm(value): void {
    let form = {
      id: this.carId,
      vehicleType:this.value,
      materialId:this.mater,
      breif:value.jiankuang,
      suppliedPart:value.lingjian,
      requirement:value.yaoqiu}
    this.ApiService.updateCar(form).then((res: any) => {
      this.msg.info('已修改')
      this.outer.emit()
    })

  }
}
