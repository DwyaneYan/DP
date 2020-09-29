import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-line-chart',
  templateUrl: './line-chart.component.html',
  styleUrls: ['./line-chart.component.css']
})
export class LineChartComponent implements OnInit {
  @Input() isVisible
  @Input() options
  @Output() private isShow=new EventEmitter<string>();  
  constructor() { }

  ngOnInit() {
  }

  handleOk(): void {
    this.isShow.emit()
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isShow.emit()
    this.isVisible = false;
  }
}
