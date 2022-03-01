import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'rad-process-item',
    templateUrl: './process-item.component.html',
    styleUrls: ['./process-item.component.css']
})
export class RadProcessItem implements OnInit {
    @Input() description: string = "description"

    constructor() { }

    ngOnInit(): void {
    }

}

