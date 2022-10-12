import { Component, OnInit } from '@angular/core'

@Component({
    selector: 'app-awards-list',
    templateUrl: './awards-list.component.html',
    styleUrls: ['./awards-list.component.scss'],
})
export class AwardsListComponent implements OnInit {
    awardsList = [
        {
            name: 'czekolada',
        },
        {
            name: 'godziny gry w gry komputerowe',
        },
    ]

    constructor() {}

    ngOnInit(): void {}
}
