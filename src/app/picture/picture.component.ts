
import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiService } from 'src/app/api.service';
import {getname,enlarge} from 'src/app/picture'


@Component({
  selector: 'app-picture',
  templateUrl: './picture.component.html',
  styleUrls: ['./picture.component.css']
})
export class PictureComponent implements OnInit {
  materialId = ''
  trialDataDetail = []
  ImgPathOne = [] //图片地址数组
  name = [] //处理后的图片名数组
  enlarge = enlarge //作为本地变量使用
  constructor(
    // private router: Router,
    private route: ActivatedRoute,
    public http: HttpClient,
    public ApiService: ApiService,
  ) { 
    this.route.pathFromRoot[1].params.subscribe(params => {
      this.materialId = params['materialId'];
      })
  }
  ngOnInit() {
    let index= location.href.lastIndexOf("\/");  
    let str  = location.href .substring(0, index+1);
    let name = str.substring(0,str.length-1)
    let index1=name.lastIndexOf("\/");  
    let name1 = name.substring(index1+1)
if (name1=='static-tension-home'){
  this.GetTrialDataDetailss('getStaticTensionDataDetails') 
}
else if(name1=='bending'){this.GetTrialDataDetailss('getBendingDataDetails') }
else if(name1=='compression'){this.GetTrialDataDetailss('getCompressDataDetails') }
else if(name1=='highspeedstrech'){this.GetTrialDataDetailss('getHighSpeedStrechDataDetails') }
else if(name1=='lowcyclefatigue'){this.GetTrialDataDetailss('getLowCycleFatigueDataDetails') }
else if(name1=='highcyclefatigue'){this.GetTrialDataDetailss('getHighCycleFatigueDataDetails') }
else if(name1=='metallographic'){this.GetTrialDataDetailss('getMetallographicDataDetails') }
else if(name1=='physicalperformance'){this.GetTrialDataDetailss('getPhysicalPerformanceDataDetails') }
else if(name1=='chemicalelement'){this.GetTrialDataDetailss('getChemicalElementDataDetails') }
else if(name1=='prohibited-substance'){this.GetTrialDataDetailss('getProhibitedSubstanceDataDetails') }
else if(name1=='dent-resistance'){this.GetTrialDataDetailss('getDentResistanceDataDetails') }
else if(name1=='secondary-working-embrittlement'){this.GetTrialDataDetailss('getSecondaryWorkingEmbrittlementDataDetails') }
else if(name1=='flanging-clasp'){this.GetTrialDataDetailss('getFlangingClaspDataDetails') }
else if(name1=='hydrogen-induced-delayed-fracture'){this.GetTrialDataDetailss('getHydrogenInducedDelayedFractureDataDetails') }
else if(name1=='welding'){this.GetTrialDataDetailss('getWeldingDataDetails') }
else if(name1=='cementing'){this.GetTrialDataDetailss('getCementingDataDetails') }
else if(name1=='painting'){this.GetTrialDataDetailss('getPaintingDataDetails') }
else if(name1=='fld'){this.GetTrialDataDetailss('getFLDDataDetails') }
else if(name1=='rebound'){this.GetTrialDataDetailss('getReboundDataDetails') }
else if(name1=='bake-hardening'){this.GetTrialDataDetailss('getBakeHardeningDataDetails') }
else if(name1=='surface-property'){this.GetTrialDataDetailss('getSurfacePropertyDataDetails') }
  }
  
  public  GetTrialDataDetailss(p) {
    this.ApiService[p](this.materialId).then((res: any) => {
      this.trialDataDetail = res
      let one = ''//图片字符串
      let length = this.trialDataDetail.length
      for(let a=0;a<length;a++){
        if(this.trialDataDetail[a] && this.trialDataDetail[a].fileString!=null){
          one = this.trialDataDetail[a].fileString
          break
        }
      }
      this.name = getname(one).afterName
      this.ImgPathOne = getname(one).ImgPathOne
    }) 
  }
}
