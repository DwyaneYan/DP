import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-metallographic-picture',
  templateUrl: './metallographic-picture.component.html',
  styleUrls: ['./metallographic-picture.component.css']
})
export class MetallographicPictureComponent implements OnInit {
  public materialId

  trialDataDetail  //存放请求到的试验结果

  ImgPathOne: string = "http://localhost:60001/api/hangang/trialdatadetail/MetallographicDataDetailDocumentLoadingOne?Id="
  ImgPathTwo: string = "http://localhost:60001/api/hangang/trialdatadetail/MetallographicDataDetailDocumentLoadingTwo?Id="
  ImgPathThree: string = "http://localhost:60001/api/hangang/trialdatadetail/MetallographicDataDetailDocumentLoadingThree?Id="
  ImgPathFour: string = "http://localhost:60001/api/hangang/trialdatadetail/MetallographicDataDetailDocumentLoadingFour?Id="

  constructor(
    private router: Router,
    public http: HttpClient,    
    ) { }

  ngOnInit() { this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
    this.GetTrialDataDetails();

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
    //拼接出完整的图片URL
    this.ImgPathOne = this.ImgPathOne + this.trialDataDetail[0].id;
    this.ImgPathTwo = this.ImgPathTwo + this.trialDataDetail[0].id;
    this.ImgPathThree = this.ImgPathThree + this.trialDataDetail[0].id;
    this.ImgPathFour = this.ImgPathFour + this.trialDataDetail[0].id;   
    // console.log(this.ImgPath);
  }
  visible = false;
  public postParams = {
    id:'',
    materialTrialDataId:'',
    standard:'',
    structurePhoto:'',
    nonMetallicInclusionLevelPhoto:'',
    grainSizePhoto:'',
    depthDecarburizationPhoto:'',
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
  materialTrialDataIdjin
  public async PostTrialDataDetails(){   
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
    let paramsMaterialTrialData={
      materialTrialId: this.materialTrialId,
    }
    let apiMaterialTrialData= "http://localhost:60001/api/hangang/materialTrialData/materialTrialData"
    await this.http.post(apiMaterialTrialData,paramsMaterialTrialData)
    .toPromise()
    .then((res:any)=>{
      this.materialTrialDataId = res
    })
   let one={materialTrialDataId :this.materialTrialDataId.id,}
   let apijin= "http://localhost:60001/api/hangang/metallographicDataDetail/metallographicData"
   await this.http.post(apijin,one)
   .toPromise()
   .then((res:any)=>{
     this.materialTrialDataIdjin = res
     console.log(this.materialTrialDataIdjin.id)
   })
    let params = {
      id:this.materialTrialDataIdjin.id,
      materialTrialDataId:this.postParams.materialTrialDataId,
      standard:this.postParams.standard,
      structure: Number(this.postParams.structurePhoto),
      nonMetalliclnclusionLevel: Number(this.postParams.nonMetallicInclusionLevelPhoto),
      grainSize:Number(this.postParams.grainSizePhoto),
      depthDecarburization:Number(this.postParams.depthDecarburizationPhoto),
    } 
    console.log(this.materialTrialDataIdjin.id)

    let apio = "http://localhost:60001/api/hangang/trialdatadetail/MetallographicDataDetailDocumentPut"
    await this.http.post(apio, params)
    .toPromise()
    .then((res:any)=>{
      this.materialTrialDataDetailId = res
    })

    console.log(this.materialTrialDataDetailId)
  }

}
