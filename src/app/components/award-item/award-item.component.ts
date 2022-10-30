import { Component, Input, OnInit } from '@angular/core';

@Component({
    selector: 'app-award-item',
    templateUrl: './award-item.component.html',
    styleUrls: ['./award-item.component.scss'],
})
export class AwardItemComponent implements OnInit {
    @Input() award: any;

    constructor() {}

    ngOnInit(): void {}
}
