import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-fld-navigate',
  templateUrl: './fld-navigate.component.html',
  styleUrls: ['./fld-navigate.component.css']
})
export class FldNavigateComponent implements OnInit {
  @Input() materialId
  constructor() { }

  ngOnInit() {
  }

}
