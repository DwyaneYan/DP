import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiService } from './api.service'
import { menu, button } from './picture'
import {Router,} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(
    // public http: HttpClient,
    // public ApiService: ApiService,
    public Router: Router,

  ) { 

  }
 //平台首页和材料库首页进入材料详情页,
 getURl(id,ApiService){
  //查询这条材料做了哪些试验
  ApiService.GetTrials(id).then((res: any) => {
    let trialName = []
    if (res.length) {
      res.forEach((val) => {
        trialName.push(val.name)
      });
    }
    let length = menu.length
    for (let a = 0; a < length; a++) {
      if (trialName.includes(menu[a].names) && button(menu[a].name)) {
        if (button(menu[a].children[0])) { 
          this.Router.navigateByUrl(`/display/${id}/${menu[a].name}/table`);  
         }
        else if (button(menu[a].children[1])) { 
          this.Router.navigateByUrl(`/display/${id}/${menu[a].name}/picture`);  
        }
        else if (button(menu[a].children[2])) { 
          this.Router.navigateByUrl(`/display/${id}/${menu[a].name}/report`);  
        }
        else if (button(menu[a].children[3])){ 
          this.Router.navigateByUrl(`/display/${id}/${menu[a].name}/typical-part`);  
        }
        break
      }
      else{
        this.Router.navigateByUrl(`/display/${id}`);  
      }
    }
  })
 }
  
  //下载文件
  downloadFile(content,data){
    var a = document.createElement('a')
    var blob = new Blob([content])
    var url = window.URL.createObjectURL(blob)
    a.href = url
    a.download = data
    a.click()
    window.URL.revokeObjectURL(url)
  }
//参数p是下载的文件名，url是文件地址
  download(p,url) {
    let that = this
    this.ajax(url, function(xhr) {
        //var filename = 'xxx' + url.replace(/(.*\.)/, '') // 自定义文件名+后缀
        var filename = p
        that.downloadFile(xhr.response, filename)
    }, {
        responseType: 'blob'
    })
  }
  ajax(url, callback, options) {
  //  window.URL = window.URL || window.webkitURL
    var xhr = new XMLHttpRequest()
    xhr.open('get', url, true)
    if (options.responseType) {
        xhr.responseType = options.responseType
    }
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(xhr)
        }
    }
    xhr.send()
  }
  async ops(ApiService) {
    let listManufacturers
    let temp = []
    let lengthTemp
    await ApiService.GetManufacturers().then((res: any) => {
      listManufacturers = res.items;
      temp = [];//可选项数据列表
      listManufacturers.map(val => { temp.push({ value: val.id, label: val.name }) })
      lengthTemp = temp.length
    })
    await  ApiService.GetMater({}).then((res:any)=>{
        let allMaterials = res.data
        for(let a= 0;a<lengthTemp;a++){
          temp[a].children = []
          let name = allMaterials.filter(item=>item.materialDto.manufactoryId == temp[a].value) //牌号数组,牌号会重复
          let nameAfter = this.uniqueArr(name,'name') //牌号去重
          let lengthName = nameAfter.length
          nameAfter.map(val=>temp[a].children.push({value:val.materialDto.name,label:val.materialDto.name}))
          for(let b= 0;b<lengthName;b++){
            temp[a].children[b].children = []
            let model = allMaterials.filter(item=>item.materialDto.manufactoryId == temp[a].value && item.materialDto.name == nameAfter[b].materialDto.name) //型号规格数组，重复
            let modelAfter = this.uniqueArr(model,'model') //型号规格去重
            let lengthModel = modelAfter.length
            modelAfter.map(val=>temp[a].children[b].children.push({value:val.materialDto.model,label:val.materialDto.model}))
            for(let c = 0;c<lengthModel;c++){
              temp[a].children[b].children[c].children = []
              let reelNumber = allMaterials.filter(item=>item.materialDto.manufactoryId == temp[a].value && item.materialDto.name == nameAfter[b].materialDto.name && item.materialDto.model == modelAfter[c].materialDto.model) //卷号数组，重复
              let reelNumberAfter = this.uniqueArr(reelNumber,'reelNumber') //卷号去重
              reelNumberAfter.map(val=>temp[a].children[b].children[c].children.push({value:val.materialDto.reelNumber,label:val.materialDto.reelNumber,isLeaf: true}))
            }
          }
  
        }
        console.log(temp)
    }) 
    return temp
  }
  //对象数组根据属性去重
  uniqueArr(arr1,p) {
    const res = new Map();
    return arr1.filter((a) => !res.has(a['materialDto'][p]) && res.set(a['materialDto'][p], 1)) 
  }
}
