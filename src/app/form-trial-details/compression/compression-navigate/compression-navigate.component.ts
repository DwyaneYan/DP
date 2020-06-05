import { Component, OnInit,Input } from '@angular/core';
import { FormExperimentalItemComponent } from 'src/app/form-experimental-item/form-experimental-item.component';

@Component({
  selector: 'app-compression-navigate',
  templateUrl: './compression-navigate.component.html',
  styleUrls: ['./compression-navigate.component.css']
})
export class CompressionNavigateComponent implements OnInit {

  @Input() materialId
  
  constructor(private FormExperimentalItemComponent: FormExperimentalItemComponent,) { }

  ngOnInit() {
  }

}
