import { Component, OnInit,Output,EventEmitter ,Input} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-form-material-db-background',
  templateUrl: './form-material-db-background.component.html',
  styleUrls: ['./form-material-db-background.component.css']
})
export class FormMaterialDbBackgroundComponent implements OnInit {

  // materialName='';
  @Output()  paihao = new EventEmitter(); 
 @Input() ph
  constructor(
    public http: HttpClient,

  ) { }

  ngOnInit() {
  }
  search(){
this.paihao.emit(this.ph)
  }
  
}
