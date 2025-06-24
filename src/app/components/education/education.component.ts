import { Component } from '@angular/core';
import { NgClass } from '@angular/common';
import { Education } from '../../core/interfaces/education.interface';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
    selector: 'app-education',
    imports: [
        MatTooltip,
        NgClass,
    ],
    templateUrl: './education.component.html',
    styleUrl: './education.component.scss',
    standalone: true
})
export class EducationComponent {
    educations: Education[] = [
        {
            title: "Engineer's degree, Computer Science",
            subtitle: "Warsaw University of Technology",
            description: "Specialized in Java (Spring Boot), web development (Angular), and DevOps. Developed multiple team-based and individual projects, including Scrum-based project management apps and microservice architectures. Completed courses in databases, algorithms, operating systems, and cybersecurity. Bachelor's thesis focused on developing scalable and performant microservice architecture based systems.",
            startDate: "2021",
            endDate: "Jan 2025",
            imageLink: "https://upload.wikimedia.org/wikipedia/en/c/c9/Warsaw_University_of_Technology.png",
            positionClass: "left",
            siteLink: "https://pw.edu.pl/"
        },
        {
            title: "Master's degree, Computer Science",
            subtitle: "Warsaw University of Technology",
            description: "Currently pursuing a Master’s degree, focusing on advanced software engineering, distributed systems, and security in web applications.",
            startDate: "2021",
            endDate: "Jan 2025",
            imageLink: "https://upload.wikimedia.org/wikipedia/en/c/c9/Warsaw_University_of_Technology.png",
            positionClass: "right",
            siteLink: "https://pw.edu.pl/"
        },
        {
            title: "AWS Certified Cloud Practitioner",
            subtitle: "Amazon Web Services (AWS)",
            description: "",
            startDate: "May 2025",
            endDate: "May 2028",
            imageLink: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFNNPUjJ2CfW7_ZU3eFgRVjXymPDu_amuUaw&s",
            positionClass: "left",
            siteLink: "https://www.credly.com/badges/a3efe6b8-3bbc-49cb-98df-de0c31096811/linked_in_profile"
        },
        {
            title: "B2 First – Score 179",
            subtitle: "Cambridge English",
            description: "",
            startDate: "Aug 2021",
            endDate: "Present",
            imageLink: "https://images.seeklogo.com/logo-png/31/2/university-of-cambridge-logo-png_seeklogo-310247.png",
            positionClass: "right",
            siteLink: "https://www.cambridgeenglish.org/exams-and-tests/first/"
        }
    ];
}
