
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'rad-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'
  ]
})
export class RadNavbar implements OnInit {
  @Input() logo: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
