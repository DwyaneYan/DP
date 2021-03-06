import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-form-navigation',
  templateUrl: './form-navigation.component.html',
  styleUrls: ['./form-navigation.component.css']
})
export class FormNavigationComponent implements OnInit {
  system=false
  href=''
  toShouye = this.ApiService.toVIm + `/car-type?type=hangang`
  token=''
  userName = undefined //用户名,即登录名
  isVisible = false //登录过期提示框
  constructor(
    private ApiService: ApiService,
    public router:Router
  ) { }
  ngOnInit() {
    let res = JSON.parse(sessionStorage.getItem("permissions"))
    if(res && res.roles && (res.roles.indexOf('adminHG')!=-1 || res.roles.indexOf('admin')!=-1)){     //permissions的roles中包含权限字符adminHG或者admin才是管理员，只有管理员才能操作系统管理，可根据实际情况修改
        this.system=true
      }else{
        this.system = false
    }
    if (res && res.user) {
      this.userName = res.user.userName      
    }
  //获取用户名,token失效返回code是多少?，token失效则移除session中的token
    // this.ApiService.getUserProfile().then((res:any)=>{
    //   if(res.code==500){
    //     sessionStorage.removeItem("token")
    //     sessionStorage.removeItem("permissions")
    //     this.isVisible = true;
    //     this.userName = undefined
    //     }
    //   else if(res.code == 200){
    //   this.userName=res.data.userName
    //   }
    // })
    
  }
  // 点击系统管理前验证token是否失效,系统管理虽然是菜单，但是是在ry中管理的，在这边这个标签无法通过路由守卫管理，只能单独处理
  checkToken(){
    // if(sessionStorage.getItem("token")){
          //用token调若依的getInfo接口，如果返回不是操作成功表明token失效，那么移除sessionStorage中的token并且直接跳到登录页，
    //这个操作也可以写在请求拦截器里
      this.ApiService.getInfo().then((res:any)=>{
        if(res.msg!="操作成功"){
          sessionStorage.removeItem("token")
          sessionStorage.removeItem("permissions")
          // this.isVisible = true
          this.router.navigateByUrl("/login");
        }
        else{
        //如果操作成功表示token还未失效，那么带着token跳转到系统管理
          this.token = sessionStorage.getItem("token")
          window.open(`${this.ApiService.toRuoYi}/system/user?token=${this.token}`)
        }
      })
    // }else{
    //     this. isVisible=true
    // }
  }

  handleOk(): void {
    this.isVisible = false;
    this.router.navigateByUrl("/login");
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  out(){
    // sessionStorage.removeItem("token");
    // sessionStorage.removeItem("permissions");
    this.ApiService.logout().then((res: any) => {
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("permissions");
      this.router.navigateByUrl('/login')
    })
  }
  openPDF(){
    window.open(
              "../../../assets/邯钢汽车用钢数据信息化平台使用手册.pdf" ,
              "_blank"
            );
  }
}
