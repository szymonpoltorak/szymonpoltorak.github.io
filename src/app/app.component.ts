import { Component, OnInit } from '@angular/core';
import { provideIcons } from '@ng-icons/core';
import { bootstrapGithub, bootstrapLinkedin } from '@ng-icons/bootstrap-icons';
import { MatCardModule } from '@angular/material/card';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { EducationComponent } from './components/education/education.component';

@Component({
    selector: 'app-root',
    imports: [
        MatCardModule,
        HomeComponent,
        AboutComponent,
        TechnologiesComponent,
        ExperienceComponent,
        ProjectsComponent,
        EducationComponent
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    viewProviders: [
        provideIcons({ bootstrapGithub, bootstrapLinkedin })
    ],
    standalone: true
})
export class AppComponent implements OnInit {

    ngOnInit(): void {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("show");
                } else {
                    entry.target.classList.remove("show");
                }
            });
        });
        const hiddenElements = document.querySelectorAll(".hide");

        hiddenElements.forEach(el => observer.observe(el));
    }
}
