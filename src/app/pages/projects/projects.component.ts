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
    title: 'Each One – Gets One',
    slug: 'each-one-gets-one',
    excerpt: 'Un programme de mentorat et de transmission des compétences numériques.',
    image: 'assets/images/4.jpg'
  },
  {
    title: 'Women Digital Bootcamp',
    slug: 'women-digital-bootcamp',
    excerpt: 'Formation intensive en compétences digitales pour femmes.',
    image: 'assets/images/4.jpg'
  },
  {
    title: 'Meet-Up Tech Féminin',
    slug: 'meet-up-tech',
    excerpt: 'Rencontres et échanges entre femmes du numérique.',
    image: 'assets/images/4.jpg'
  }
];

}
