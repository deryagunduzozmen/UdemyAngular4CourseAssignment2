import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-assignment',
  templateUrl: './assignment.component.html',
  styleUrls: ['./assignment.component.css']
})
export class AssignmentComponent implements OnInit {
userName='';
ButtonDisable()
{
  return this.userName==""?true:false;
}
onButtonClick()
{
  this.userName='';
}
  constructor() { }

  ngOnInit() {
  }

}
