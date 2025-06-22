import { Component, OnInit } from '@angular/core';
import { MatButton, MatFabButton, MatMiniFabAnchor } from '@angular/material/button';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { bootstrapGithub, bootstrapLinkedin } from '@ng-icons/bootstrap-icons';
import { MatTooltip } from '@angular/material/tooltip';
import { TechCard } from './core/interfaces/tech-card.interface';
import { DatePipe, NgOptimizedImage } from '@angular/common';
import { WorkExperience } from './core/interfaces/work-experience.interface';

@Component({
    selector: 'app-root',
    imports: [
        MatButton,
        MatFabButton,
        NgIcon,
        MatTooltip,
        MatMiniFabAnchor,
        NgOptimizedImage,
        DatePipe,
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
            name: "Git",
            imageLink: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png"
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
            companySiteLink: "https://www.essembli.pl/pl_PL/"
        },
        {
            company: 'Transbit Sp. z o.o.',
            logo: 'https://media.licdn.com/dms/image/v2/C4D0BAQH948mdffxdrg/company-logo_100_100/company-logo_100_100/0/1630562816723/transbit_logo?e=1756339200&v=beta&t=Y-pz9k7hxArK5vlAdjTSp7tVMUVSHAolDKXduwArRMM',
            position: 'DevOps Internship',
            startDate: '2023-10-01',
            location: 'Warszawa, Mazowieckie, Poland - Hybrid',
            descriptions: [
                'Implemented and optimized CI/CD pipelines.',
                'Built and optimized Docker containers for deployment efficiency.',
                'Developed Python automation scripts for various internal tasks.',
                'Maintained and improved the Arch Linux package system.'
            ],
            companySiteLink: "https://www.transbit.com.pl/"
        }
    ];

    ngOnInit(): void {
        this.startTypingLoop();
    }

    formatDurationSince(dateString: string): string {
        const start = new Date(dateString);
        const now = new Date();

        let years = now.getFullYear() - start.getFullYear();
        let months = now.getMonth() - start.getMonth();

        if (months < 0) {
            years--;
            months += 12;
        }

        const yearPart = years > 0 ? `${years} yr${years > 1 ? 's' : ''}` : '';
        const monthPart = months > 0 ? `${months} mo${months > 1 ? 's' : ''}` : '';

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
