import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class OperateDataService {

  constructor(public http: HttpClient) { }


//#region 试验Trial
  //增
  AddTrial(AddInfo) {
    
    let api = "http://localhost:60001/api/hangang/trial/trial"

    this.http.post( api, AddInfo).subscribe((response) => {
      console.log(response);
    })


    // alert('Add done')
  }
  
  //删
  DeleteTrial(DeleteInfo) {

    let id=DeleteInfo.Id
    let api = `http://localhost:60001/api/hangang/trial/${id}`

    this.http.delete( api, DeleteInfo).subscribe((response) => {
      console.log(response);
    })

    // alert('delete done')
  }

  //改
  UpdateTrial(UpdateInfo) {
    
    let api = "http://localhost:60001/api/hangang/trial/trial"

    this.http.post(api, UpdateInfo).subscribe((response) => {
      console.log(response)
    })
    // alert('update done')
  }
  
  //查
  GetTrial(GetInfo) {

    let api = "http://localhost:60001/api/hangang/trial/trials";

    this.http.get(api, GetInfo).subscribe((response) => {
      console.log(response)
    })

    // alert('done')
  }
//#endregion

//#region  厂家
  //增加厂家
  Addmanufactory(Addmanufac) {
    
    let api = "http://localhost:60001/api/hangang/manufactory/manufactory"

    this.http.post( api, Addmanufac).subscribe((response) => {
      console.log(response);
    })
}

//删除厂家
Deletemanufactory(Deletemanufac) {

  let id=Deletemanufac.id
  let api = `http://localhost:60001/api/hangang/manufactory/${id}`

  this.http.delete( api, Deletemanufac).subscribe((response) => {
    console.log(response);
  })

  // alert('delete done')
}

// 更新厂家
Updatefactory(Updatefac){
  let api = "http://localhost:60001/api/hangang/manufactory/manufactory"

  this.http.put(api, Updatefac).subscribe((response) => {
    console.log(response)
  })
}

// 查询厂家
Getfactory(Getfac){
  let id=Getfac.id
  let api =`http://localhost:60001/api/hangang/manufactory/${id}/manufactoryById`;
  this.http.get(api, Getfac).subscribe((response) => {
    console.log(response)
  })

}
//#endregion

//#region 材料Material

// 增加材料
Addmaterial(Addmaterial) {    
  let api = "http://localhost:60001/api/hangang/material/material"
  this.http.post( api, Addmaterial).subscribe((response) => {
    console.log(response);
  })
}

// 删除材料
Deletematerial(Deletemanufac){
let id=Deletemanufac.id
let api = `http://localhost:60001/api/hangang/material/${id}`

this.http.delete( api, Deletemanufac).subscribe((response) => {
  console.log(response);
})
}

// 更新材料
Updatematerial(Updatemateri){
let id=Updatemateri.id
let api = `http://localhost:60001/api/hangang/material/${id}/trial`
  this.http.put(api, Updatemateri).subscribe((response) => {
    console.log(response)
  })
}

// 查询材料
Getmaterial(Getma){
let api ="http://localhost:60001/api/hangang/material/materials?Name=";
this.http.get(api+Getma.name, Getma).subscribe((response) => {
  console.log(response)
})
}

//#endregion

//#region 典型零部件
  //增
  Addtypicalpart(AddtypicalpartInfo) {


    this.http.post(AddtypicalpartInfo.api, AddtypicalpartInfo).subscribe((response) => {
      console.log(response);
    })


    // alert('Add done')
  }

  //删
  Deletetypicalpart(DeletetypicalpartInfo) {

    // let id=DeleteInfo.Id
    // let api = `http://localhost:60001/api/hangang/trial/${id}`

    this.http.delete(DeletetypicalpartInfo.api + DeletetypicalpartInfo.Id, DeletetypicalpartInfo).subscribe((response) => {
      console.log(response);
    })

    // alert('delete done')
  }

  //改
  Updatetypicalpart(UpdatetypicalpartInfo) {



    this.http.put(UpdatetypicalpartInfo.api, UpdatetypicalpartInfo).subscribe((response) => {
      console.log(response)
    })
    // alert('update done')
  }

  //查
  Gettypicalpart(GettypicalpartInfo) {


    this.http.get(GettypicalpartInfo.api + "?Name=" + GettypicalpartInfo.Name, GettypicalpartInfo).subscribe((response) => {
      console.log(response)
    })

    // alert('done')
  }
  //#endregion

//#region 实验材料

  //增
  Addmaterialtrial(AddInfo) {

    let api = "http://localhost:60001/api/hangang/materialTrial/materialTrial"

    this.http.post(api, AddInfo).subscribe((response) => {
      console.log(response);
    })


    // alert('Add done')``
  }

  //删
  Deletematerialtrial(DeleteInfo) {

    let id = DeleteInfo.Id
    let api = `http://localhost:60001/api/hangang/materialTrial/${id}`

    this.http.delete(api, DeleteInfo).subscribe((response) => {
      console.log(response);
    })

    // alert('delete done')
  }

  //改
  Updatematerialtrial(UpdateInfo) {

    let api = "http://localhost:60001/api/hangang/materialTrial/materialTrial"

    this.http.put(api, UpdateInfo).subscribe((response) => {
      console.log(response)
    })
    // alert('update done')
  }

  //查
  Getmaterialtrial(GetInfo) {

    let api = "http://localhost:60001/api/hangang/materialTrial/materialTrials?Name=";

    this.http.get(api + GetInfo.Name, GetInfo).subscribe((response) => {
      console.log(response)
    })

    // alert('done')
  }
  //#endregion


}
