import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-platform',
  templateUrl: './page-platform.component.html',
  styleUrls: ['./page-platform.component.css']
})
export class PagePlatformComponent implements OnInit {
  isVisible = false;
  isOkLoading = false;
 public materials=[
   {
     name:"DC01",
     class:"IF钢",
     fac:"邯钢",
     model:"0.2mm"
   },
   {
    name:"DC02",
    class:"IF钢",
    fac:"邯钢",
    model:"0.2mm"
  },
  {
    name:"DC03",
    class:"IF钢",
    fac:"邯钢",
    model:"0.2mm"
  }
 ]
  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isOkLoading = true;
    setTimeout(() => {
      this.isVisible = false;
      this.isOkLoading = false;
    }, 3000);
  }

  handleCancel(): void {
    this.isVisible = false;
  }
  constructor() { }

  ngOnInit() {
  }

}
