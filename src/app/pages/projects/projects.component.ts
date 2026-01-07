import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectCardComponent } from '../../shared/project-card.component';

interface Project {
  slug: string;
  title: string;
  cover: string;
  objective: string;
}
@Component({
  selector: 'app-projects',
  imports: [CommonModule, ProjectCardComponent],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css'
})
export class ProjectsComponent {
 data: {
    projects: Project[];
  } = {
    projects: [
      {
        slug: 'education-rurale',
        title: 'Éducation Rurale',
        cover: 'assets/projects/edu.jpg',
        objective: 'Améliorer l’accès à l’éducation'
      }
    ]
  };
}
