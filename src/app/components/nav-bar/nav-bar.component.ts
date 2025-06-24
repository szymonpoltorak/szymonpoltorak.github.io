import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
    selector: 'app-nav-bar',
    imports: [
        MatButton,
        MatTooltip,
    ],
    templateUrl: './nav-bar.component.html',
    styleUrl: './nav-bar.component.scss',
    standalone: true
})
export class NavBarComponent {
}
