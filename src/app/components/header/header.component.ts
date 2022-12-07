import { Component, OnInit } from '@angular/core';
import { NavigationService } from '../../services/navigation.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
    goBackUrl: string;
    showBackButton = true;

    constructor(private navigationService: NavigationService) {}

    ngOnInit(): void {
        this.navigationService.goBackUrl.subscribe((url) => {
            this.showBackButton = url !== null;
            this.goBackUrl = url;
        });
    }
}
