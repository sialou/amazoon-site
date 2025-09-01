import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';


import { DataService } from '../core/data.service';

@Component({
  standalone: true,
  selector: 'app-project-detail',
  imports: [CommonModule],
  template: `
  <section class="wrap" *ngIf="proj">
    <a routerLink="/projets">← Retour</a>
    <h1>{{proj.title}}</h1>
    <img class="cover" [src]="proj.cover" [alt]="proj.title">
    <div class="meta">
      <span><strong>Objectif:</strong> {{proj.objective}}</span>
      <span><strong>Zone:</strong> {{proj.location}}</span>
      <span><strong>Partenaires:</strong> {{proj.partners.join(', ')}}</span>
    </div>
    <div class="body" *ngIf="proj.body">{{proj.body}}</div>
    <h3>Résultats</h3>
    <ul><li *ngFor="let r of proj.results">{{r}}</li></ul>
    <figure *ngIf="proj.quote">
      <blockquote>“{{proj.quote.text}}”</blockquote>
      <figcaption>— {{proj.quote.author}}</figcaption>
    </figure>
  </section>
  `,
  styles: [`
    .wrap{padding:2rem 1rem}
    .cover{width:100%;max-height:360px;object-fit:cover;border-radius:1rem;margin:.5rem 0}
    .meta{display:flex;flex-wrap:wrap;gap:1rem;padding:.5rem 0;color:#374151}
    figure{border-left:4px solid #93c5fd;padding-left:.75rem;color:#111827}
  `]
})
export class ProjectDetailPageComponent implements OnInit {
  proj: any;

  constructor(private route: ActivatedRoute, private data: DataService) {}

ngOnInit(): void {
  const slug = this.route.snapshot.paramMap.get('slug');
  if (slug) {
    this.proj = this.data.getProjectBySlug(slug);
  } else {
    // gérer le cas où slug est null
    console.error('Slug is null');
  }
}

}
