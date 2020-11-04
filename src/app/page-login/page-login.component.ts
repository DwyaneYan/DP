import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-page-login",
  templateUrl: "./page-login.component.html",
  styleUrls: ["./page-login.component.css"],
})
export class PageLoginComponent implements OnInit {
  images = [
    "../../assets/images/login_box.png",
    "../../assets/images/login_box22.jpg",
    "../../assets/images/login_box33.png",
  ];
  constructor() {}

  ngOnInit() {
    // debugger;
  }
}
