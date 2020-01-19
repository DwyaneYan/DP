import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-metallographic-table',
  templateUrl: './metallographic-table.component.html',
  styleUrls: ['./metallographic-table.component.css']
})
export class MetallographicTableComponent implements OnInit {
  public materialId
  trialDataDetail=[{}]
  constructor(private router: Router,
    public http: HttpClient,) { }

  ngOnInit() {this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
    this.GetTrialDataDetails()
  }
  public async GetTrialDataDetails() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/metallographicDataDetails/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetail = res
      console.log(this.trialDataDetail)
    })    
  }
  visible = false;
  public postParams = {
    materialTrialDataId:'',
    standard:'',
    structure:'',
    nonMetallicInclusionLevel:'',
    grainSize:'',
    depthDecarburization:'',

  }
  open(): void {
    this.visible = true;
  }
  close(): void {
    this.visible = false;
  }
  materialTrialId
  materialTrialDataId
  materialTrialDataDetailId
  public async PostTrialDataDetails(){   
    //#region 得到materialTrialDataId: materialId+TrialId-->materialTrialId-->materialDataId      
    ////materialId+TrialId-->materialTrialId
    let paramsMaterialTrial={
      materialId:this.materialId,
      trialId:"73b1b822-689b-4e95-bd97-36e9eb395216"
    }
    let apiMaterialTrial = "http://localhost:60001/api/hangang/materialTrial/materialTrial"
    await this.http.post(apiMaterialTrial,paramsMaterialTrial)
    .toPromise()
    .then((res:any)=>{
      this.materialTrialId = res
    })
    console.log("materialTrialId:  "+this.materialTrialId)
    ////materialId+TrialId-->materialTrialId
    let paramsMaterialTrialData={
      materialTrialId: this.materialTrialId,
    }
    let apiMaterialTrialData= "http://localhost:60001/api/hangang/materialTrialData/materialTrialData"
    await this.http.post(apiMaterialTrialData,paramsMaterialTrialData)
    .toPromise()
    .then((res:any)=>{
      this.materialTrialDataId = res
    })
    console.log("materialTrialDataId:  "+this.materialTrialDataId)
    this.postParams.materialTrialDataId = this.materialTrialDataId;  //得到materialTrialDataId
    //#endregion
    console.log(this.postParams)
    let params = {
      materialTrialDataId:this.postParams.materialTrialDataId,
      standard:this.postParams.standard,
      structure:this.postParams.structure,
      nonMetallicInclusionLevel:this.postParams.nonMetallicInclusionLevel,
      grainSize:Number(this.postParams.grainSize),
      depthDecarburization:Number(this.postParams.depthDecarburization),
    } 


    let api = "http://localhost:60001/api/hangang/metallographicDataDetail/metallographicData"
    await this.http.post(api, params)
    .toPromise()
    .then((res:any)=>{
      this.materialTrialDataDetailId = res
    })

    console.log(this.materialTrialDataDetailId)
  }
}
