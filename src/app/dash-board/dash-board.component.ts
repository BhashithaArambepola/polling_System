import { Component, OnInit } from '@angular/core';
import {Poll} from "../dto/poll";
import {Router} from "@angular/router";
import {UserService} from "../service/user.service";

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {

polls: Array<Poll> =[];
  constructor(private userService:UserService, private routerService: Router) {

  }

  ngOnInit(): void {
    if (!this.userService.getPrincipal()){
      this.routerService.navigateByUrl('login');
    }
  }
createPoll(title:string){
    this.polls.push(new Poll(Math.random(), title,this.userService.getPrincipal()!));
}
}
