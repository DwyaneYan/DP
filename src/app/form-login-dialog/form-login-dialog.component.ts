import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
} from "@angular/forms";
import { ApiService } from "src/app/api.service";
import { CookieService } from "ngx-cookie-service";
import { NzMessageService } from "ng-zorro-antd/message";
import { Router, ActivatedRoute, Params } from "@angular/router";
import {initRouter} from "../init-routers" //不是服务，一个普通ts文件

@Component({
  selector: "app-form-login-dialog",
  templateUrl: "./form-login-dialog.component.html",
  styleUrls: ["./form-login-dialog.component.css"],
})
export class FormLoginDialogComponent implements OnInit {
  validateForm!: FormGroup;
  codeUrl; //验证码
  uuid;
  token = "";
  loading = false;
  submitForm(): void {
    this.loading = true
    //校验状态
    for (const i in this.validateForm.controls) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }
    if (this.validateForm.valid) {
      if (this.validateForm.value.remember) {
        this.cookies.set("userName", this.validateForm.value.userName);
        this.cookies.set("password", this.validateForm.value.password);
        this.cookies.set("remember", this.validateForm.value.remember);
      } else {
        this.cookies.delete("userName");
        this.cookies.delete("password");
        this.cookies.delete("remember");
      }
      let username = this.validateForm.value.userName;
      let password = this.validateForm.value.password;
      let code = this.validateForm.value.code;
      let uuid = this.uuid;
      console.log(uuid);
      this.ApiService.login(username, password, code, uuid).then((res: any) => {
        //登录失败
        if (res.code != 200) {
          if(res.msg == ''){
            this.message.create("error", '验证码失效'); 
            this.getCode();
          }
          else{
            this.message.create("error", res.msg); 
            this.getCode();
          }
          this.loading = false
        }
        //登录成功
        else {
          sessionStorage.setItem("token", res.token);//获取token并存到session
          //获取权限相关信息
          this.ApiService.getInfo().then((res: any) => {
            sessionStorage.setItem("permissions", JSON.stringify(res));//权限相关信息存到seesion
            //从vim跳转过来的
            if (window.location.search.indexOf("type=vim") != -1) {
              let position = window.location.search.slice(1).replace(/=&/g, '/').lastIndexOf("/");
              let url = window.location.search.slice(1).replace(/=&/g, '/').slice(0,position)
              this.router.config = this.ApiService.selfReloadRouter(initRouter())
              this.router.navigateByUrl(`${url}`)
            }
            //直接进入平台首页
            else {
              this.router.config = this.ApiService.selfReloadRouter(initRouter())
              this.router.navigateByUrl("/platform")//路由导航和在导航栏直接导航的区别,手动导航就会执行路由配置文件
            }
          });
        }

      });
    }
  }
//注入服务
  constructor(
    private fb: FormBuilder,
    private ApiService: ApiService,
    private cookies: CookieService,
    private message: NzMessageService,
    public router: Router,
    private routeInfo: ActivatedRoute,
  ) {}

  ngOnInit(): void {
    this.getCookie();
    this.getCode();
    console.log(this.validateForm);
  }
  //获取验证码
  getCode() {
    this.ApiService.getCodeImg().then((res: any) => {
    this.codeUrl = "data:image/gif;base64," + res.img;
    this.uuid = res.uuid;
    });
  }

  getCookie() {
    const userName = this.cookies.get("userName");
    const password = this.cookies.get("password");
    const remember = this.cookies.get("remember");
    this.validateForm = this.fb.group({
      userName: [userName === undefined ? "" : userName, [Validators.required]],
      password: [password === undefined ? "" : password, [Validators.required]],
      code: [null, [Validators.required]],
      remember: [remember == 'true' ? true : false],
    });

  }
 
}
