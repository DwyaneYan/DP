import pdf from 'pdfobject'
import {ImgView} from './imgView'
import{ApiService } from './api.service'
import { Router } from '@angular/router';
var _Router:Router
var _ApiService:ApiService
//返回试验信息中的处理后图片名和图片地址（数组）对象，参数是图片名称字符串以分号分隔
function getname(allName){
  let afterName=[] //图片去掉前缀和后缀的名称数组
  let ImgPathOne=[]//图片地址数组
  if(allName){
    let one=allName.split(";")
    one.pop()//图片全名数组
    let two=[] //去掉后缀的图片名数组
    let length=one.length//图片数
  for(let a=0;a<length;a++){
    let pattern = /\.{1}[a-z]{1,}$/;
        if (pattern.exec(one[a]) !== null) {
          two.push(one[a].slice(0, pattern.exec(one[a]).index));
        } else {
        two.push(one[a]);
      }
      ImgPathOne.push(`/api/hangang/trialdatadetail/CommonFileStringStream?pictureName=${one[a]}`) //图片全名是否需要url编码
      }
      for(let a=0;a<length;a++)
      {
      let d= two[a].indexOf("_")
      afterName.push(two[a].slice(d+1))
      }

    }
    return {afterName,ImgPathOne}
}
  //处理文件,每个实验项目只应该有一个报告，但如果上传多个报告会全部存进数据库，但只能预览第一个
  //最好在导入的时候如果不是pdf或者多个pdf就禁止导入。
  //再次上传会覆盖之前的报告和全部数据，报告只能是pdf,不然不能预览
  //图片可以导入多个没有限制，但是实验项目的文件夹中文件数量太多也会导入失败
function  common(a){
    if(a){
      //是否会一次返回多个报告名未测试,如果返回多条报告名只取第一个报告预览
      let p= a.slice(0,a.length-1)   ;
      let arr = p.split(";")//报告名数组
      let hz = arr[0].slice(arr[0].lastIndexOf(".")+1) //第一个报告名的后缀名
      if(hz == "pdf"){
     let b=`/api/hangang/trialdatadetail/CommonFileStringStreamDocument?documentName=${arr[0]}`//指向报告地址,如果不是pdf会直接下载
     pdf.embed(b, "#pdf1")
    }
  }
  }
  //按钮权限
  function button(p):Boolean{
    let permissions =JSON.parse(window.sessionStorage.getItem("permissions"))
    if(permissions && (permissions.permissions.indexOf(`${p}`)!=-1 || permissions.roles.indexOf("admin")!=-1)){
      return true
    }
    else{
      return false
    }
  
  }
//放大、缩小图片
function enlarge(src,ImgPathOne){
  let options = {
                  dataList:ImgPathOne,
                  currentSrc: src
              };
    ImgView("imgView", options);
}
//试验项目信息
 var menu=[{name:"static-tension-home",children:['jtls1','jtls2','jtls3','jtls4'],names:"静态拉伸"},
{name:"compression",children:['ys1','ys2','ys3','ys4'],names:"压缩"},
{name:"metallographic",children:['jx1','jx2','jx3','jx4'],names:"金相"},
{name:"physicalperformance",children:['wlxn1','wlxn2','wlxn3','wlxn4'],names:'物理性能'},
{name:"chemicalelement",children:['hxcf1','hxcf2','hxcf3','hxcf4'],names:"化学成分"},
{name:"prohibited-substance",children:['jywz1','jywz2','jywz3','jywz4'],names:'禁用物质'},
{name:"surface-property",children:['bmxn1','bmxn2','bmxn3','bmxn4'],names:"表面性能"},
{name:"bake-hardening",children:['hkyh1','hkyh2','hkyh3','hkyh4'],names:"烘烤硬化"},
{name:"bending",children:['wq1','wq2','wq3','wq4'],names:"弯曲"},
{name:"fld",children:['fld1','fld2','fld3','fld4'],names:"成型极限"},
{name:"dent-resistance",children:['kaxn1','kaxn2','kaxn3','kaxn4'],names:"抗凹性能"},
{name: "flanging-clasp",children:['fbkh1','fbkh2','fbkh3','fbkh4'],names:"翻边扣合性能"},
{name:"welding",children:['hjxn1','hjxn2','hjxn3','hjxn4'],names:"焊接性能"},
{name:"cementing",children:['jjxn1','jjxn2','jjxn3','jjxn4'],names:"胶结性能"},
{name:"painting",children:['tzxn1','tzxn2','tzxn3','tzxn4'],names:"涂装性能"},
{name:"rebound",children:['htxn1','htxn2','htxn3','htxn4'],names:"回弹性能"},
{name:"secondary-working-embrittlement",children:['ecjgcx1','ecjgcx2','ecjgcx3','ecjgcx4'],names:"二次加工脆性"},
{name:"hydrogen-induced-delayed-fracture",children:['qzyckl1','qzyckl2','qzyckl3','qzyckl4'],names:"氢致延迟开裂"},
{name:"highspeedstrech",children:['gsls1','gsls2','gsls3','gsls4'],names:"高速拉伸" },
{name:"lowcyclefatigue",children:['dzpl1','dzpl2','dzpl3','dzpl4'],names:"低周疲劳"},
{name:"highcyclefatigue",children:['gzpl1','gzpl2','gzpl3','gzpl4'],names:"高周疲劳"}]
export {getname,common,button,enlarge,menu}