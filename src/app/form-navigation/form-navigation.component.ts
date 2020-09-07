import { Component, OnInit } from '@angular/core';
import { FormExperimentalItemComponent } from '../form-experimental-item/form-experimental-item.component';
import { ApiService } from 'src/app/api.service';
import { HttpHeaders } from '@angular/common/http';
import { Router} from '@angular/router';

@Component({
  selector: 'app-form-navigation',
  templateUrl: './form-navigation.component.html',
  styleUrls: ['./form-navigation.component.css']
})
export class FormNavigationComponent implements OnInit {
  system=false
  href=''
  toShouye = this.ApiService.toVIm + `/view/car-type?type=hangang`
  constructor(
    private FormExperimentalItemComponent: FormExperimentalItemComponent,
    private ApiService: ApiService,
    public router:Router


  ) { }
  // target=''
token=''
userName = ''
  ngOnInit() {
//     let httpOptions = {
//       headers: new HttpHeaders({
//         'Authorization': 'Bearer' + ' '+sessionStorage.getItem("token"),
//          //'host':'172.20.10.5:60001'
//       }),
//       param: {}  
//     };
//     this.ApiService.getInfo(httpOptions).then((res:any)=>{
// console.log( res.roles)
let res=JSON.parse(sessionStorage.getItem("permissions"))
      if(res.roles.indexOf('adminHG')!=-1 || res.roles.indexOf('admin')!=-1){     //permissions的roles中包含权限字符adminHG或者admin才是管理员，只有管理员才能操作系统管理，可根据实际情况修改
        this.system=true
            }else{
              this.system = false
            }
  //  this.token= sessionStorage.getItem("token")
  //  this.href=`http://10.130.53.6:80/usermanage?token=${this.token}`
  // this.href='#'
  // this.target = '_self'
  //调若依的接口获取用户的基本信息,token失效返回code是多少?，token失效则移除session中的token
    this.ApiService.getUserProfile().then((res:any)=>
      {
        if(res.code==500){
          sessionStorage.removeItem("token")
        this. isVisible=true;
      this.userName = ''}
        else if(res.code == 200){
        this.userName=res.data.userName
        }
        console.log( this.userName)}
      )
    
  }
  isVisible=false
  // 点击系统管理前验证token是否失效
  checkToken(){
    // this.href='#'
  // this.target = '_self'
  //如果sessionStorage中有token
    if(sessionStorage.getItem("token")){
    let httpOptions = {
            headers: new HttpHeaders({
              'Authorization': 'Bearer' + ' '+sessionStorage.getItem("token"),
            }),
          };
          //用token调若依的getInfo接口，如果返回不是操作成功表明token失效，那么移除sessionStorage中的token并且提示重新登录
    this.ApiService.getInfo(httpOptions).then((res:any)=>{
      if(res.msg!="操作成功"){
  sessionStorage.removeItem("token")
       this. isVisible=true

      }
      else{
//this.href=`http://10.130.53.4:80/index?token=${sessionStorage.getItem("token")}`
// debugger;
//如果操作成功表示token还未失效，那么带着token跳转到系统管理
         this.token= sessionStorage.getItem("token")
         window.open(`${this.ApiService.toRuoYi}/system/user?token=${this.token}`)
// this.target = '_blank'
// console.log(this.href,this.target)
      }
    })}else{
      this. isVisible=true

  //  this.href=`http://10.130.53.6:80/usermanage`

    }
  }

  handleOk(): void {

    this.isVisible = false;
    // debugger;
    this.router.navigateByUrl("/login");
    location.reload()

  }

  handleCancel(): void {

    this.isVisible = false;
  }

  out(){
  sessionStorage.removeItem("token");
  sessionStorage.removeItem("permissions");
  this.ApiService.logout().then(()=>
  this.router.navigateByUrl('login')
  // this.router.parseUrl("/login")
  )
//location.reload()
  }
  openPDF(){
    window.open(
              "../../../assets/邯钢汽车用钢数据信息化平台使用手册.pdf" ,
              "_blank"
            );
  }
}
