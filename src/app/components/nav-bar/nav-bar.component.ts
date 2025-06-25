import { Component } from '@angular/core';
import { MatButton, MatMiniFabButton } from '@angular/material/button';
import { MatTooltip } from '@angular/material/tooltip';
import { MatIcon } from '@angular/material/icon';
import { MatMenu, MatMenuItem, MatMenuTrigger } from '@angular/material/menu';

@Component({
    selector: 'app-nav-bar',
    imports: [
        MatButton,
        MatTooltip,
        MatIcon,
        MatMiniFabButton,
        MatMenu,
        MatMenuTrigger,
        MatMenuItem
    ],
    templateUrl: './nav-bar.component.html',
    styleUrl: './nav-bar.component.scss',
    standalone: true
})
export class NavBarComponent {
    protected readonly window = window;
}
