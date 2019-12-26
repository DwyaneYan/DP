import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'app-page-material-trial',
  templateUrl: './page-material-trial.component.html',
  styleUrls: ['./page-material-trial.component.css']
})
export class PageMaterialTrialComponent implements OnInit {

  AddmaterialtrialInfo= {
    Name:'', 
    MaterialId:'',
    TrialId:'',
  }

  constructor() { }

  ngOnInit() {
  }


  Addmaterialtrial(){
    console.log(this.AddmaterialtrialInfo)
    alert(this.AddmaterialtrialInfo)
  }

}
