import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-binding-practice',
  templateUrl: './binding-practice.component.html',
  styleUrls: ['./binding-practice.component.css']
})
export class BindingPracticeComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
  }

  username = "";

  onNewName(){
    this.username = "";
  }
}
