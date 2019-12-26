import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
    providedIn: 'root'
  })
  export class TypicalpartService {
 
    constructor(public http: HttpClient
    ) { }
    async Alltypicalpart()
    {
      let api ="http://localhost:60001/api/hangang/typicalPart/typicalParts";
      let res=await this.http.get(api)
      .toPromise()
      .catch(err =>{
        console.log(err);
      });
  console.log(res)
  return res
    }
    async Addtypicalpart(AddtypicalpartInfo) {
        let api ="http://localhost:60001/api/hangang/typicalPart/typicalPart";
       await this.http.post(api,AddtypicalpartInfo)
        .toPromise()
        .catch(err =>{
          console.log(err);
        });
      } 
 async  Updatetypicalpart(para)
      {
        let api ="http://localhost:60001/api/hangang/typicalPart/typicalPart";
await this.http.put(api,para)
        .toPromise()
        .catch(err =>{
          console.log(err);
        });
      }
Deletetypicalpart(Deletetypicalpart) {
        let id=Deletetypicalpart.id
        let api = `http://localhost:60001/api/hangang/typicalPart/${id}`
        this.http.delete( api, Deletetypicalpart).subscribe((response) => {
          console.log(response);
        })
      }   
}