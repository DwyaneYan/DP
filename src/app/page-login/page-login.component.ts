import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-page-login",
  templateUrl: "./page-login.component.html",
  styleUrls: ["./page-login.component.css"],
})
export class PageLoginComponent implements OnInit {
  images = [
    "../../assets/images/login_box01.png",
    "../../assets/images/login_box02.png",
    "../../assets/images/login_box03.png",
    "../../assets/images/login_box04.png",
    "../../assets/images/login_box05.png",
    "../../assets/images/login_box06.png",
    "../../assets/images/login_box07.png",
    "../../assets/images/login_box08.png",
    "../../assets/images/login_box09.png",
  ];
  constructor() {}

  ngOnInit() {
    // debugger;
  }
}
