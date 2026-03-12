import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ProjectCardComponent } from '../../shared/project-card.component';

interface Project {
  slug: string;
  title: string;
  cover: string;
  objective: string;
}
@Component({
  selector: 'app-projects',
  imports: [CommonModule, ProjectCardComponent, RouterModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
 projects = [
  {
    title: 'STEM 4 Girls ',
    slug: 'STEM-4-Girls ',
    excerpt: 'Accroître la participation et le leadership des adolescentes dans les filières scientifiques et technologiques.',
    image: 'assets/images/p1.png'
  },
  {
    title: 'Safe Digital Communities ',
    slug: 'Safe-Digital-Communities ',
    excerpt: 'Promouvoir un usage responsable, sécurisé et citoyen du numérique au sein des communautés éducatives.Programme pour la promotion de la citoyenneté numérique responsable dans les communautés éducatives.',
    image: 'assets/images/p2.png'
  },
  {
    title: 'Women Digital Empowerment Accelerator' ,
    slug: 'Women-Digital-Empowerment-Accelerator',
    excerpt: 'Renforcer l’autonomisation économique des femmes à travers l’accès aux opportunités de l’économie numérique.',
    image: 'assets/images/p3.png'
  },
  {
    title: 'Rural Woman-Digital ' ,
    slug: 'Rural-Woman-Digital ',
    excerpt: 'Permettre aux femmes d’acquérir des compétences numériques pour avancer dans leur activité et développer leurs business en ligne en utilisant des outils numériques et Internet.',
    image: 'assets/images/p4.png'
  },
  {
    title: 'DFH' ,
    slug: 'DFH ',
    excerpt: 'Mettre en lumière des femmes inspirantes qui utilisent le digital pour développer leurs activités, accroître leur visibilité et faire grandir leur business.',
    image: 'assets/images/p5.png'
  }
];

}
