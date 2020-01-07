import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
@Component({
  selector: 'app-painting-table',
  templateUrl: './painting-table.component.html',
  styleUrls: ['./painting-table.component.css']
})
export class PaintingTableComponent implements OnInit {
  public materialId
  trialDataDetail 
  trialDataDetails 
  trialDataDetailss
  trialDataDetailsss
  trialDataDetailssss
  trialDataDetailsssss
  trialDataDetailssssss
  trialDataDetailsssssss
  trialDataDetailssssssss
  constructor( private router: Router,
    public http: HttpClient,) { }

  ngOnInit() {this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
    this.GetTrialDataDetails();
    this.GetTrialDataDetailss();
    this.GetTrialDataDetailsss();
    this.GetTrialDataDetailssss();
    this.GetTrialDataDetailsssss();
    this.GetTrialDataDetailssssss();
    this.GetTrialDataDetailsssssss();
    this.GetTrialDataDetailssssssss();
    this.GetTrialDataDetailsssssssss();
  }
  public async GetTrialDataDetails() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/paintingDataDetailPhosphatingItems/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetail = res
      // console.log(this.trialDataDetail)
    })    
  }
  public async GetTrialDataDetailss() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/paintingDataDetailMembraneWeightItems/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetails = res
      // console.log(this.trialDataDetail)
    })    
  }
  public async GetTrialDataDetailsss() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/paintingDataDetailPRatioItems/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetailss = res
      // console.log(this.trialDataDetail)
    })    
  }
  public async GetTrialDataDetailssss() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/paintingDataDetailElectrophoreticItems/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetailsss = res
      // console.log(this.trialDataDetail)
    })    
  }
  public async GetTrialDataDetailsssss() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/paintingDataDetailHardnessItems/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetailssss = res
      // console.log(this.trialDataDetail)
    })    
  }
  public async GetTrialDataDetailssssss() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/paintingDataDetailRoughnessItems/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetailsssss = res
      // console.log(this.trialDataDetail)
    })    
  }
  public async GetTrialDataDetailsssssss() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/paintingDataDetailHitResistanceItems/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetailssssss = res
      // console.log(this.trialDataDetail)
    })    
  }
  public async GetTrialDataDetailssssssss() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/paintingDataDetailAdhesionItems/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetailsssssss = res
      // console.log(this.trialDataDetail)
    })    
  }
  public async GetTrialDataDetailsssssssss() {
    let materialId = this.materialId
    let api =`http://localhost:60001/api/hangang/materialTrial/paintingDataDetailDampHeatItems/${materialId}`;
    await this.http.get(api)
    .toPromise()
    .then((res: any) => {
      this.trialDataDetailssssssss = res
      // console.log(this.trialDataDetail)
    })    
  }
}
