import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
  })
  export class MateriaService {
 
    constructor(public http: HttpClient,
     
    ) { }

Addmaterial(material) {   
    let api = "http://localhost:60001/api/hangang/material/material"
    this.http.post( api, material).subscribe((response) => {
      console.log(response);
    })
}
Updatematerial(Updatematerial){
    let id=Updatematerial.id
  let api = `http://localhost:60001/api/hangang/material/${id}/trial`
  this.http.put(api, Updatematerial).subscribe((response) => {
    console.log(response)
  })
}
async Allmaterials()
  {
    let api ="http://localhost:60001/api/hangang/material/materials";
    let res=await this.http.get(api)
    .toPromise()
    .catch(err =>{
      console.log(err);
    });
    console.log(res)
return res
  }
  
  Deletematerial(i){
    let id=i.id
    let api = `http://localhost:60001/api/hangang/material/${id}`
    this.http.delete( api, i).subscribe((response) => {
      console.log(response);
    });

}

  }
