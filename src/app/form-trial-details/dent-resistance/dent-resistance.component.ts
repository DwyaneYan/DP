import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/api.service';
@Component({
  selector: 'app-dent-resistance',
  templateUrl: './dent-resistance.component.html',
  styleUrls: ['./dent-resistance.component.css']
})
export class DentResistanceComponent implements OnInit {
  public materialId
  p1 = 'kaxn1'
  p2 = 'kaxn2'
  p3 = 'kaxn3'
  p4 = 'kaxn4'
  // deleteTrial = this.ApiService.deleteTrial
  constructor(
    private route: ActivatedRoute,
    public ApiService: ApiService,

    ) {
      this.route.parent.params.subscribe(params => {
        this.materialId = params['materialId'];
        });
        console.log(this.route.snapshot.routeConfig.path)
     }

  ngOnInit() {    

  }
  deleteTrial(){
    this.ApiService.deleteTrial(this.materialId,'抗凹性能')
  }
}
