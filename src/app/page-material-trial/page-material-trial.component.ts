import { Component, OnInit, OnChanges } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

//用于在列表表格中展示的数据
interface ItemData {
  id: number,
  name: string;
  materialTrialId: any;
  materialId: any;
  TrialId: any;
}


@Component({
  selector: 'app-page-material-trial',
  templateUrl: './page-material-trial.component.html',
  styleUrls: ['./page-material-trial.component.css']
})
export class PageMaterialTrialComponent implements OnInit {

  public params = {
    name: '',
    materialId: '',
    trialId: '',
  }

  public getParams = {
    materialId: '',
  }

  public materialTrial = []
  public listOfAllData = [];

  constructor(
    public http: HttpClient,
  ) { }


  ngOnInit() {
    // this.listOfAllData.push({
    //   id:11,
    //   name: '111',
    //   materialTrialId: '111',
    //   materialId: 'val.materialId',
    //   TrialId:'val.TrialId',
    // });
    this.GetMaterialTrial().then((data: any) => {
      //       console.log('22222222222222222222', data)
      this.putDisplayData(data.items)


      // console.log(data)
      // data.items.forEach((val, i) => {
      //   this.listOfAllData.push({
      //     'id': i,
      //     'name': val.name,
      //     'materialTrialId': val.id,
      //     'materialId': val.materialId,
      //     'TrialId': val.trialId,
      //   });
      // },
      // )
      // console.log(this.listOfAllData)
    })

  }




  public async AddmaterialTrial() {
    let api = "http://localhost:60001/api/hangang/materialTrial/materialTrial";
    let params = this.params;
    // console.log(params);
    let res: any = await this.http.post(api, params)
      .toPromise()
      .catch(err => {
        console.log(err);
      });
    // console.log(res)
  }

  public async GetMaterialTrial() {
    let api = "http://localhost:60001/api/hangang/materialTrial/materialTrials"
    await this.http.get(api)
      .toPromise()
      .then((res: any) => {
        this.materialTrial = res;
      });
    console.log(this.materialTrial);
    return this.materialTrial;
  }

  public putDisplayData(data) {
    console.log(data)
    data.forEach((val, i, array) => {
      this.listOfAllData.push({
        id: i,
        name: val.name,
        materialTrialId: val.id,
        materialId: val.materialId,
        TrialId: val.trialId,
      });
    },
    )

    console.log(this.listOfAllData)
  }

  //#region  表格控件
  isAllDisplayDataChecked = false;
  isIndeterminate = false;
  listOfDisplayData: ItemData[] = [];

  mapOfCheckedId: { [key: string]: boolean } = {};

  currentPageDataChange($event: ItemData[]): void {
    this.listOfDisplayData = $event;
    this.refreshStatus();
  }

  refreshStatus(): void {
    this.isAllDisplayDataChecked = this.listOfDisplayData.every(item => this.mapOfCheckedId[item.id]);
    this.isIndeterminate =
      this.listOfDisplayData.some(item => this.mapOfCheckedId[item.id]) && !this.isAllDisplayDataChecked;
  }

  checkAll(value: boolean): void {
    this.listOfDisplayData.forEach(item => (this.mapOfCheckedId[item.id] = value));
    this.refreshStatus();
  }
  //#endregion

}
