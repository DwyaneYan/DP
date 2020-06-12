import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { ApiService } from 'src/app/api.service';
import { CookieService } from 'ngx-cookie-service';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router} from '@angular/router';

@Component({
  selector: 'app-form-login-dialog',
  templateUrl: './form-login-dialog.component.html',
  styleUrls: ['./form-login-dialog.component.css']
})
export class FormLoginDialogComponent implements OnInit {
  validateForm!: FormGroup;
  codeUrl//验证码
uuid
token=''
  submitForm(): void { 
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm.valid){ 
if(this.validateForm.value.remember){
  this.cookies.set("userName",this.validateForm.value.userName)
  this.cookies.set("password",this.validateForm.value.password)
  this.cookies.set("remember",this.validateForm.value.remember)
}
else{
  this.cookies.delete("userName")
  this.cookies.delete("password")
  this.cookies.delete("remember")
}
let username=this.validateForm.value.userName
let password=this.validateForm.value.password
let code=this.validateForm.value.code
let uuid=this.uuid
console.log(uuid)

this.ApiService.login(
  username,
 password,
code,
uuid).then((res:any)=>{
// this.token=res.token
if(res.code==500){
  this.message.create("error", res.msg);
}
else{
this.ApiService.setToken(res.token)

  this.router.navigateByUrl('platform');}
// let storage = window.sessionStorage;  
//     storage.setItem('token', this.token); 
  })
}

  }
  // toDetail(){}
  constructor(
    private fb: FormBuilder,
    private ApiService: ApiService,
    private cookies: CookieService,
    private message: NzMessageService,
    public router:Router
    ) {}

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
      code: [null, [Validators.required]],
      uuid:[null],
      remember: [false],
    });
    this. getCode();
    this.getCookie()

    console.log(this.router)
  }
//获取验证码
 async getCode(){
 await this.ApiService.getCodeImg().then((res:any)=>{
  this.codeUrl= "data:image/gif;base64,"+res.img
  this.uuid=res.uuid

 })
  }

  getCookie(){
      const userName=this.cookies.get("userName")
      const password=this.cookies.get("password")
      const remember=this.cookies.get("remember")
      this.validateForm.value.userName= (userName===undefined) ? '':userName
      this.validateForm.value.password= (password===undefined) ? '':password
      this.validateForm.value.remember= (remember===undefined) ? '':remember

  }

}
