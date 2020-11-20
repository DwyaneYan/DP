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
    // 判断用户是否登入，没有这两个字符都视作没有登录
    const user = sessionStorage.getItem("token");
    const permisssions = sessionStorage.getItem("permissions"); 
    //没有登录强制导航到登录页
    if (!user||!permisssions) {
      return this.router.parseUrl("/login");    
    } else {
      isLogin = true;
    }
    return isLogin;
  }
  //
  canActivateChild(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot){  
      // 未登入跳转到登入界面
    let isLogin: boolean;
    // 判断用户是否登入
    const user = sessionStorage.getItem("token");
    const permisssions = sessionStorage.getItem("permissions");
    //没有登陆并且没有权限但有vim(现在不会出现这种情况了，除非用户把vim新打开窗口会出现这样)，要带上参数跳到登录页
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
