import { Component } from '@angular/core';
import { DatePipe } from "@angular/common";
import { MatFabButton } from "@angular/material/button";
import { Project } from '../../core/interfaces/project.interface';

@Component({
    selector: 'app-projects',
    imports: [
        DatePipe,
        MatFabButton
    ],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss',
    standalone: true
})
export class ProjectsComponent {
    projects: Project[] = [
        {
            title: "Social365",
            description: "A Facebook-like social web app built with microservices architecture, designed for scalability and real-time interactions.",
            features: [],
            startDate: "2024-03-01",
            endDate: "2025-01-30",
            imageLink: "https://github.com/szymonpoltorak/Social365/blob/main/screenshots/readme/tech-stack.png?raw=true",
            githubLink: "https://github.com/szymonpoltorak/Social365"
        },
        {
            title: "Corn",
            description: "A Scrum-based project management application designed to help teams plan and track their work efficiently.",
            features: [],
            startDate: "2023-10-01",
            endDate: "2024-05-30",
            imageLink: "https://github.com/szymonpoltorak/Corn/blob/main/screenshots/technology_stack.png?raw=true",
            githubLink: "https://github.com/szymonpoltorak/Corn"
        },
        {
            title: "ToDoApp",
            description: "A secure To-Do application designed with layered architecture and built as a PWA for enhanced usability. Developed as part of a security course, focusing on authentication, encryption, and secure communication.",
            features: [],
            startDate: "2023-10-01",
            endDate: "2023-12-30",
            imageLink: "https://github.com/szymonpoltorak/ToDoApp/raw/main/docs/architecture.png",
            githubLink: "https://github.com/szymonpoltorak/ToDoApp"
        }
    ];
}
