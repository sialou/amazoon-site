import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { DataService } from '../core/data.service';
import { ProjectCardComponent } from '../shared/project-card.component';

@Component({
  standalone: true,
  selector: 'app-projects',
  imports: [NgFor, ProjectCardComponent],
  template: `
  <section class="wrap">
    <h1>Nos projets</h1>
    <p>Découvrez nos programmes et actions sur le terrain.</p>
    <div class="grid">
      <app-project-card *ngFor="let p of data.projects" [slug]="p.slug" [title]="p.title" [cover]="p.cover" [objective]="p.objective"/>
    </div>
  </section>
  `,
  styles: [`
    .wrap{padding:2rem 1rem}
    .grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1rem}
    @media (max-width:900px){.grid{grid-template-columns:1fr}}
  `]
})
export class ProjectsPageComponent{
  constructor(public data: DataService){}
}
