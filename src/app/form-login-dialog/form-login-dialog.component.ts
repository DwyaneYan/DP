import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormGroup,
  Validators,
  FormControl,
} from "@angular/forms";
import { ApiService } from "src/app/api.service";
import { CookieService } from "ngx-cookie-service";
import { NzMessageService } from "ng-zorro-antd/message";
import { Router, ActivatedRoute, Params } from "@angular/router";
import { HttpHeaders } from "@angular/common/http";
import {initRouter} from "../init-routers"

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
  submitForm(): void {
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
        if (res.code != 200) {
          if(res.msg == ''){
            this.message.create("error", '验证码失效'); 
            this.getCode();
          }
          else{this.message.create("error", res.msg); 
          this.getCode();}
        } else {
          sessionStorage.setItem("token", res.token);//token存到session
          let httpOptions = {
            headers: new HttpHeaders({
              Authorization: "Bearer" + " " + res.token,
            }),
          };
          this.ApiService.getInfo(httpOptions).then((res: any) => {
            window.sessionStorage.setItem("permissions", JSON.stringify(res));
              if (window.location.search.indexOf("type=vim") != -1) {
               let position = window.location.search.slice(1).replace(/=&/g, '/').lastIndexOf("/");
                let url = window.location.search.slice(1).replace(/=&/g, '/').slice(0,position)
              this.router.config = this.ApiService.selfReloadRouter(initRouter())
              this.router.navigateByUrl(`${url}`)
              } else {
    this.router.config = this.ApiService.selfReloadRouter(initRouter())
     this.router.navigateByUrl("/platform")//路由导航和在导航栏直接导航的区别,手动导航就会执行路由配置文件
              }
          });
        }

      });
    }
  }

  constructor(
    private fb: FormBuilder,
    private ApiService: ApiService,
    private cookies: CookieService,
    private message: NzMessageService,
    public router: Router,
    private routeInfo: ActivatedRoute,
    // private initRouter:initRouter,
  ) {}

  ngOnInit(): void {
    // this.validateForm = this.fb.group({
    //   userName: [null, [Validators.required]],
    //   password: [null, [Validators.required]],
    //   code: [null, [Validators.required]],
    //   // uuid: [null],
    //   remember: [false],
    // });
    //  debugger;
    this.getCookie();
    this.getCode();
    //this.getCookie();
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
