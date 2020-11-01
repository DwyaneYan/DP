import { Injectable } from "@angular/core";
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  CanActivateChild,
  UrlTree
} from "@angular/router";


import { ApiService } from "./api.service";
@Injectable({
  providedIn: "root",
})
export class LoginGuardService implements CanActivate, CanActivateChild{
  constructor(private router: Router, public ApiService: ApiService) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean|UrlTree  {
    let isLogin: boolean;
    // 判断用户是否登入
    const user = sessionStorage.getItem("token");
    //判断有没有权限
    const permisssions = sessionStorage.getItem("permissions");
    //没有权限或者没有登录都要跳到登录页
    if (!user||!permisssions) {
      return this.router.parseUrl("/login");    
    } else {
      isLogin = true;
    }
    return isLogin;
  }
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){  
      // 未登入跳转到登入界面
    let isLogin: boolean;
    // 判断用户是否登入
    const user = sessionStorage.getItem("token");
     //判断有没有权限
     const permisssions = sessionStorage.getItem("permissions");
    //没有登陆并且没有权限但有vim，要带上参数跳到登录页
      if ((!user||!permisssions) && window.location.search.indexOf("vim") != -1 ) {
      let p = window.location.pathname.slice(1)
      let name = p.replace(/\//g, '&')
      return  this.router.parseUrl("/login" + "?" + name + "&" + "type=vim");//要把pathname中的斜杠替换成&
      }
    //没有登陆，直接跳到登录页
      else if (!user ||!permisssions) {   
        return this.router.parseUrl("/login");     
      }
      else {
        isLogin = true;
      }
     return isLogin;
  }
  
}
