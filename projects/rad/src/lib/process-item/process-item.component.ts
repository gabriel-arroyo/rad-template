import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'rad-process-item',
    templateUrl: './process-item.component.html',
    styleUrls: ['./process-item.component.css']
})
export class RadProcessItem implements OnInit {
    @Input() description: string = "description"
    @Input() descriptionSmall: string = "Exercitation tempor sint adipisicing voluptate ea."
    @Input() image:string ="https://uploads-ssl.webflow.com/602ed660994e00fdc6aeae1f/6035ff8493c413dc0d1608d4_Delivery%20Van.png"

    constructor() { }

    ngOnInit(): void {
    }

}

