import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-project-detail',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.css'
})
export class ProjectDetailComponent implements OnInit {
project: any;

  projects = [
    {
      slug: 'each-one-gets-one',
      title: 'Each One – Gets One',
      image: 'assets/images/4.jpg',
      description: `
        Le programme Each One – Gets One vise à créer une chaîne de transmission
        des compétences numériques entre femmes.
      `,
      highlights: [
        'Mentorat entre femmes',
        'Formation numérique de base',
        'Autonomisation économique'
      ]
    },
    {
      slug: 'women-digital-bootcamp',
      title: 'Women Digital Bootcamp',
      image: 'assets/images/4.jpg',
      description: `
        Formation intensive pour renforcer les compétences digitales des femmes
        dans les métiers du numérique.
      `,
      highlights: [
        'Développement web',
        'Marketing digital',
        'Employabilité'
      ]
    }
  ];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const slug = this.route.snapshot.paramMap.get('slug');
    this.project = this.projects.find(p => p.slug === slug);
  }
}
