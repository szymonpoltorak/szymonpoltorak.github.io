import { Component, OnInit } from '@angular/core';
import { MatButton, MatFabAnchor, MatFabButton, MatMiniFabAnchor } from '@angular/material/button';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapGithub, bootstrapLinkedin } from '@ng-icons/bootstrap-icons';
import { MatTooltip } from '@angular/material/tooltip';
import { TechCard } from './core/interfaces/tech-card.interface';
import { DatePipe, NgClass } from '@angular/common';
import { WorkExperience } from './core/interfaces/work-experience.interface';
import { Project } from './core/interfaces/project.interface';
import { MatCardModule } from '@angular/material/card';
import { Education } from './core/interfaces/education.interface';
import { MatIcon } from '@angular/material/icon';

@Component({
    selector: 'app-root',
    imports: [
        MatButton,
        MatFabButton,
        NgIcon,
        MatTooltip,
        MatMiniFabAnchor,
        MatIcon,
        DatePipe,
        NgClass,
        MatCardModule,
        MatFabAnchor
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    viewProviders: [
        provideIcons({ bootstrapGithub, bootstrapLinkedin })
    ],
    standalone: true
})
export class AppComponent implements OnInit {

    words: string[] = ['Student', 'Devops', 'Fullstack', 'Engineer'];
    techCards: TechCard[] = [
        {
            name: "Java",
            imageLink: "https://img.icons8.com/?size=512&id=13679&format=png"
        },
        {
            name: "Kotlin",
            imageLink: "https://user-images.githubusercontent.com/103866722/177941491-1947c6b0-6e38-4880-8bd7-01dac36165df.png"
        },
        {
            name: "Python",
            imageLink: "https://images.icon-icons.com/2699/PNG/512/python_logo_icon_168886.png"
        },
        {
            name: "Spring Boot",
            imageLink: "https://img.icons8.com/?size=512&id=90519&format=png"
        },
        {
            name: "Angular",
            imageLink: "https://brandlogos.net/wp-content/uploads/2025/04/angular_icon-logo_brandlogos.net_jn7wi-512x542.png"
        },
        {
            name: "Cassandra",
            imageLink: "https://upload.wikimedia.org/wikipedia/commons/1/1e/Apache-cassandra-icon.png"
        },
        {
            name: "PostgreSQL",
            imageLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/1985px-Postgresql_elephant.svg.png"
        },
        {
            name: "Kafka",
            imageLink: "https://cdn.freebiesupply.com/logos/thumbs/2x/kafka-logo.png"
        },
        {
            name: "RabbitMQ",
            imageLink: "https://www.rabbitmq.com/assets/files/rabbitmq-logo-e91cacd38fcef5219149bc5cfa10b384.svg"
        },
        {
            name: "Docker",
            imageLink: "https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png"
        },
        {
            name: "Gradle",
            imageLink: "https://www.svgrepo.com/show/353831/gradle.svg"
        },
        {
            name: "Neo4j",
            imageLink: "https://go.neo4j.com/rs/710-RRC-335/images/neo4j_logo_globe.png"
        },
        {
            name: "MongoDB",
            imageLink: "https://www.cdnlogo.com/logos/m/30/mongodb-icon.svg"
        },
        {
            name: "Nginx",
            imageLink: "https://www.svgrepo.com/show/373924/nginx.svg"
        },
        {
            name: "Linux",
            imageLink: "https://logolook.net/wp-content/uploads/2023/10/Linux-Logo-1996.png"
        }
    ]
    currentWordIndex = 0;
    typed: string = '';
    fullWord: string = '';
    charIndex: number = 0;
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
    workExperiences: WorkExperience[] = [
        {
            company: 'Essembli',
            logo: 'https://media.licdn.com/dms/image/v2/C560BAQEvzj_T6gSK9w/company-logo_200_200/company-logo_200_200/0/1630634085716/essembli_logo?e=2147483647&v=beta&t=INF2X8ou4zdIOHgjmjfTb0h3aLcdRMR9VExvJyBszng',
            position: 'Junior Java Developer',
            startDate: '2023-10-01',
            location: 'Warszawa, Mazowieckie, Poland - Hybrid',
            descriptions: [
                'Developing and maintaining an Oracle CC&B-based system using Java 8.',
                'Creating and optimizing internal APIs to enhance developer productivity and improve code maintainability.',
                'Designing and developing REST and SOAP web services.',
                'Writing and optimizing SQL and HQL queries for an OracleSQL database.',
                'Improving batch processing performance.',
                'Automating development processes to streamline workflows.'
            ],
            companySiteLink: "https://www.essembli.pl/pl_PL/",
            endDate: null,
            positionClass: 'left'
        },
        {
            company: 'Transbit Sp. z o.o.',
            logo: 'https://media.licdn.com/dms/image/v2/C4D0BAQH948mdffxdrg/company-logo_100_100/company-logo_100_100/0/1630562816723/transbit_logo?e=1756339200&v=beta&t=Y-pz9k7hxArK5vlAdjTSp7tVMUVSHAolDKXduwArRMM',
            position: 'DevOps Internship',
            startDate: '2023-07-01',
            location: 'Warszawa, Mazowieckie, Poland - Hybrid',
            descriptions: [
                'Implemented and optimized CI/CD pipelines.',
                'Built and optimized Docker containers for deployment efficiency.',
                'Developed Python automation scripts for various internal tasks.',
                'Maintained and improved the Arch Linux package system.'
            ],
            companySiteLink: "https://www.transbit.com.pl/",
            endDate: '2023-10-01',
            positionClass: 'right'
        }
    ];
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

    ngOnInit(): void {
        this.startTypingLoop();

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

    formatDurationSince(dateString: string): string {
        const start: Date = new Date(dateString);
        const now: Date = new Date();

        let years: number = now.getFullYear() - start.getFullYear();
        let months: number = now.getMonth() - start.getMonth();

        if (months < 0) {
            years--;
            months += 12;
        }
        const yearPart = years > 0 ? `${ years } yr${ years > 1 ? 's' : '' }` : '';
        const monthPart = months > 0 ? `${ months } mo${ months > 1 ? 's' : '' }` : '';

        return [yearPart, monthPart].filter(Boolean).join(' ');
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
