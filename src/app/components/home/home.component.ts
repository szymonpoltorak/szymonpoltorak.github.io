import { Component, OnInit } from '@angular/core';
import { MatFabAnchor, MatMiniFabAnchor } from "@angular/material/button";
import { NavBarComponent } from "../nav-bar/nav-bar.component";
import { NgIcon } from "@ng-icons/core";
import { MatTooltip } from '@angular/material/tooltip';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'app-home',
    imports: [
        MatFabAnchor,
        MatIcon,
        MatMiniFabAnchor,
        MatTooltip,
        NavBarComponent,
        NgIcon,
        MatTooltip
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
    standalone: true
})
export class HomeComponent implements OnInit {
    words: string[] = ['Student', 'Devops', 'Fullstack', 'Engineer'];
    currentWordIndex = 0;
    typed: string = '';
    fullWord: string = '';
    charIndex: number = 0;

    ngOnInit(): void {
        this.startTypingLoop();
    }

    private startTypingLoop(): void {
        this.fullWord = this.words[this.currentWordIndex];
        this.typed = '';
        this.charIndex = 0;

        const typeInterval = setInterval(() => {
            if (this.charIndex < this.fullWord.length) {
                this.typed += this.fullWord[this.charIndex++];
            } else {
                clearInterval(typeInterval);
                setTimeout(() => this.prepareNextWord(), 2000);
            }
        }, 100);
    }

    private prepareNextWord(): void {
        this.currentWordIndex = (this.currentWordIndex + 1) % this.words.length;
        this.startTypingLoop();
    }

}
