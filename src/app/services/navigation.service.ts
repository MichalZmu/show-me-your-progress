import { Injectable } from '@angular/core'
import { Subject } from 'rxjs'

@Injectable({
    providedIn: 'root',
})
export class NavigationService {
    goBackUrl = new Subject<string>()

    constructor() {}

    setGoBackUrl(url: string): void {
        this.goBackUrl.next(url)
    }
}
