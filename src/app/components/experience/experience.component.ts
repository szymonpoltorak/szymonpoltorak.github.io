import { Component } from '@angular/core';
import { DatePipe, NgClass } from "@angular/common";
import { MatTooltip } from '@angular/material/tooltip';
import { WorkExperience } from '../../core/interfaces/work-experience.interface';

@Component({
    selector: 'app-experience',
    imports: [
        DatePipe,
        MatTooltip,
        NgClass
    ],
    templateUrl: './experience.component.html',
    styleUrl: './experience.component.scss'
})
export class ExperienceComponent {
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

}
