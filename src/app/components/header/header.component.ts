import { Component } from '@angular/core';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
})
export class HeaderComponent {
    active: boolean = false;
    setClick() {
        const menu = document.querySelector('#menu');
        this.active = !this.active;
        menu?.classList.toggle('h-[30rem]');
        menu?.classList.toggle('hidden');
    }
}
