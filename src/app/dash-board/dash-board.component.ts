import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {

polls: Array<number> =[];
  constructor() { }

  ngOnInit(): void {
  }
createPoll(){
    this.polls.push(1);
}
}
