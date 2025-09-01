import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
  <section class="hero">
    <div class="text">
      <h1>{{title}}</h1>
      <p class="lead">{{subtitle}}</p>
      <div class="actions">
        <a *ngFor="let c of ctas" class="btn" [routerLink]="c.link">{{c.label}}</a>
      </div>
    </div>
    <div class="media" *ngIf="image">
      <img [src]="image" [alt]="title">
    </div>
  </section>
  `,
  styles: [`
    .hero{display:grid;grid-template-columns:1.2fr .8fr;gap:1.5rem;align-items:center;padding:2rem 1rem}
    .lead{font-size:1.15rem;color:#374151}
    .actions{display:flex;gap:.75rem;margin-top:1rem}
    .btn{display:inline-block;padding:.6rem 1rem;border-radius:.75rem;background:#2563eb;color:white;text-decoration:none;font-weight:600;border:1px solid #2563eb}
    .media img{width:100%;border-radius:1rem;box-shadow:0 10px 25px rgba(0,0,0,.08)}
    @media (max-width:900px){.hero{grid-template-columns:1fr}}
  `]
})
export class HeroComponent{
  @Input() title = '';
  @Input() subtitle = '';
  @Input() ctas: any[] = [];
  @Input() image?: string;
}
