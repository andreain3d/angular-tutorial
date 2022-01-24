import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-practice2',
  templateUrl: './binding-practice2.component.html',
  styleUrls: ['./binding-practice2.component.css'],
  styles: [`
    .over {
      background-color: blue;
      color: white;
    }
  `]
})
export class BindingPractice2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  buttonToggle = false;
  details = "Secret password: Tuna";
  numOfClicks = 0;
  buttonLog = [];

  onButtonToggle() {
    this.buttonToggle === true ? this.buttonToggle = false : this.buttonToggle = true;
    this.numOfClicks = this.numOfClicks + 1;
    this.buttonLog.push(this.numOfClicks);
    console.log(this.buttonLog);
  }

}
