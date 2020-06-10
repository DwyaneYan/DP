
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { MetallographicReportComponent } from 'src/app/form-trial-details/metallographic/metallographic-report/metallographic-report.component';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.css']
})
export class ReportComponent implements OnInit {
  materialId
  trialDataDetails=[]
  constructor(
    private router: Router,
    public http: HttpClient,
    public ApiService: ApiService,

    public MetallographicReportComponent: MetallographicReportComponent,

  ) { }
name1=''
  ngOnInit() {
    this.materialId = this.router
    .routerState.root.firstChild
    .snapshot.paramMap.get('materialId');
    let index= location.href.lastIndexOf("\/");  
    let str  = location.href .substring(0, index+1);
    let name = str.substring(0,str.length-1)
    let index1=name.lastIndexOf("\/");  
this.name1 = name.substring(index1+1)
    console.log(this.name1)
if (this.name1=='static-tension-home'){
  this.GetTrialDataDetailss('getStaticTensionDataDetails') 
}
else if(this.name1=='bending'){this.GetTrialDataDetailss('getBendingDataDetails') }
else if(this.name1=='compression'){this.GetTrialDataDetailss('getCompressDataDetails') }
else if(this.name1=='highspeedstrech'){this.GetTrialDataDetailss('getHighSpeedStrechDataDetails') }
else if(this.name1=='lowcyclefatigue'){this.GetTrialDataDetailss('getLowCycleFatigueDataDetails') }
else if(this.name1=='highcyclefatigue'){this.GetTrialDataDetailss('getHighCycleFatigueDataDetails') }
else if(this.name1=='metallographic'){this.GetTrialDataDetailss('getMetallographicDataDetails') }
else if(this.name1=='physicalperformance'){this.GetTrialDataDetailss('getPhysicalPerformanceDataDetails') }
else if(this.name1=='chemicalelement'){this.GetTrialDataDetailss('getChemicalElementDataDetails') }
else if(this.name1=='prohibited-substance'){this.GetTrialDataDetailss('getProhibitedSubstanceDataDetails') }
else if(this.name1=='dent-resistance'){this.GetTrialDataDetailss('getDentResistanceDataDetails') }
else if(this.name1=='secondary-working-embrittlement'){this.GetTrialDataDetailss('getSecondaryWorkingEmbrittlementDataDetails') }
else if(this.name1=='flanging-clasp'){this.GetTrialDataDetailss('getFlangingClaspDataDetails') }

else if(this.name1=='hydrogen-induced-delayed-fracture'){this.GetTrialDataDetailss('getHydrogenInducedDelayedFractureDataDetails') }

else if(this.name1=='welding'){this.GetTrialDataDetailss('getWeldingDataDetails') }

else if(this.name1=='cementing'){this.GetTrialDataDetailss('getCementingDataDetails') }
else if(this.name1=='painting'){this.GetTrialDataDetailss('getPaintingDataDetails') }
else if(this.name1=='fld'){this.GetTrialDataDetailss('getFLDDataDetails') }
else if(this.name1=='rebound'){this.GetTrialDataDetailss('getReboundDataDetails') }
else if(this.name1=='bake-hardening'){this.GetTrialDataDetailss('getBakeHardeningDataDetails') }
else if(this.name1=='surface-property'){this.GetTrialDataDetailss('getSurfacePropertyDataDetails') }






  }
  one=[]
  public async GetTrialDataDetailss(p) {
    console.log(this.ApiService.getChemicalElementDataDetails)
    await this.ApiService[p](this.materialId)
    .then((res: any) => {
      this.trialDataDetails = res
      console.log(this.trialDataDetails)
      for(let a=0;a<this.trialDataDetails.length;a++)
      {if(this.trialDataDetails[a].fileKey!=null){
    this.one.push(this.trialDataDetails[a])

  }
      }
      console.log(this.trialDataDetails)
      this.MetallographicReportComponent.common(this.one[0].fileKey)
    })  

  }
}

