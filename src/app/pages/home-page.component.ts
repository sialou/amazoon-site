import { Component } from '@angular/core';
import { HeroComponent } from '../shared/hero.component';
import { StatGridComponent } from '../shared/stat-grid.component';
import { NgFor } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DataService } from '../core/data.service';
import { ProjectCardComponent } from '../shared/project-card.component';
import { TestimonialComponent } from '../shared/testimonial.component';

@Component({
  standalone: true,
  selector: 'app-home',
  imports: [HeroComponent, StatGridComponent, NgFor, RouterLink, ProjectCardComponent, TestimonialComponent],
  template: `
    <app-hero
      [title]="data.site.hero.title"
      [subtitle]="data.site.hero.subtitle"
      [ctas]="data.site.hero.ctas"
      [image]="data.site.hero.image">
    </app-hero>

    <section class="section">
      <h2>Notre impact</h2>
      <app-stat-grid [stats]="data.stats"></app-stat-grid>
    </section>

    <section class="section">
      <h2>Projets phares</h2>
      <div class="grid">
        <app-project-card *ngFor="let p of data.projects" [slug]="p.slug" [title]="p.title" [cover]="p.cover" [objective]="p.objective"/>
      </div>
      <p class="see-all"><a routerLink="/projets">Voir tous les projets →</a></p>
    </section>

    <section class="section">
      <h2>Témoignages</h2>
      <div class="grid tgrid">
        <app-testimonial *ngFor="let t of data.testimonials" [text]="t.text" [name]="t.name" [role]="t.role"/>
      </div>
    </section>

    <section class="cta">
      <div class="box">
        <h3>Rejoignez le mouvement</h3>
        <p>Devenez bénévole, mentor ou partenaire et accélérez l’inclusion numérique.</p>
        <div class="actions">
          <a class="btn" routerLink="/a-propos">Devenir bénévole</a>
          <a class="btn outline" routerLink="/soutenir">Faire un don</a>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .section{padding:2rem 1rem}
    h2{margin:0 0 1rem 0}
    .grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1rem}
    .tgrid{grid-template-columns:repeat(3,minmax(0,1fr))}
    .see-all{margin-top:1rem}
    .cta{padding:2rem 1rem}
    .box{border:1px solid #e5e7eb;background:#f9fafb;padding:1.5rem;border-radius:1rem}
    .actions{display:flex;gap:.5rem;margin-top:.5rem}
    .btn{display:inline-block;padding:.6rem 1rem;border-radius:.75rem;background:#2563eb;color:white;text-decoration:none;font-weight:600;border:1px solid #2563eb}
    .btn.outline{background:transparent;color:#2563eb}
    @media (max-width:900px){.grid,.tgrid{grid-template-columns:1fr}}
  `]
})
export class HomePageComponent{
  constructor(public data: DataService){}
}
