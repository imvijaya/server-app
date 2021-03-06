import { Component, OnInit } from '@angular/core';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  public searchName : string = "";
  public userData: any;

  constructor(
    public userService: UserService
    ) { 
      console.log("constructor");
    }

  ngOnInit(): void {
    console.log("Init");
  }

  getUsers() {
    this.userData = this.userService.getUserData();
  }
}
