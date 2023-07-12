import { Component } from '@angular/core';

@Component({
    selector: 'app-about-us',
    templateUrl: './about-us.component.html',
})
export class AboutUsComponent {
    details = [
        {
            title: 'Nombre',
            text: 'Luis Enrique',
        },
        {
            title: 'Hobbies',
            text: 'Me gusta mucho el arte, tanto la musica como la pintura',
        },
    ];
}
