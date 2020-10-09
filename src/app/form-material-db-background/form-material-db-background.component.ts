import { Component, OnInit,Output,EventEmitter ,Input} from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-form-material-db-background',
  templateUrl: './form-material-db-background.component.html',
  styleUrls: ['./form-material-db-background.component.css']
})
export class FormMaterialDbBackgroundComponent implements OnInit {
  @Output()  paihao = new EventEmitter(); 

 data = ''
  constructor(
    public http: HttpClient,

  ) { }
  ngOnChanges() {
// this.data = this.ph
  }
  ngOnInit() {
  }
  search(){
this.paihao.emit(this.data)
  }
  
}
