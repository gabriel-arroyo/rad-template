import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rad-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class RadContact implements OnInit {
  showChat: boolean = false;

  constructor() { }

  toggle(e:any){
    e.preventDefault();
    this.showChat = !this.showChat;
  }

  ngOnInit(): void {
  }

}
