import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-metallographic-navigate',
  templateUrl: './metallographic-navigate.component.html',
  styleUrls: ['./metallographic-navigate.component.css']
})
export class MetallographicNavigateComponent implements OnInit {
  @Input() materialId
  constructor() { }

  ngOnInit() {
  }

}
