import { Component } from '@angular/core';
import { TechCard } from '../../core/interfaces/tech-card.interface';

@Component({
    selector: 'app-technologies',
    imports: [],
    templateUrl: './technologies.component.html',
    styleUrl: './technologies.component.scss'
})
export class TechnologiesComponent {
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
            imageLink: "assets/docker_logo.png"
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
}
