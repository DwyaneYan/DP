import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-page-login",
  templateUrl: "./page-login.component.html",
  styleUrls: ["./page-login.component.css"],
})
export class PageLoginComponent implements OnInit {
  images = [
    "../../assets/images/login_box.png",
    "../../assets/images/login_box2.png",
    "../../assets/images/login_box3.png",
  ];
  constructor() {}

  ngOnInit() {
    // debugger;
  }
}
