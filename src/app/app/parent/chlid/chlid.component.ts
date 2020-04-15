import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-chlid',
  templateUrl: './chlid.component.html',
  styleUrls: ['./chlid.component.css']
})
export class ChlidComponent implements OnInit {
@Input() parentName;
@Output() public chlidEvent =new EventEmitter()
  constructor() { }

  ngOnInit() {
  }
  fireEvent(){
    this.chlidEvent.emit("Try complex One");
  }

}
