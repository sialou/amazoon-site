import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { DataService } from '../core/data.service';

@Component({
  standalone: true,
  selector: 'app-partners',
  imports: [NgFor],
  template: `
  <section class="wrap">
    <h1>Partenaires</h1>
    <p>Merci à nos partenaires pour leur confiance.</p>
    <div class="logos">
      <a class="logo" *ngFor="let p of data.partners" [href]="p.url" target="_blank" rel="noopener">
        <img [src]="p.logo" [alt]="p.name">
      </a>
    </div>
  </section>
  `,
  styles: [`
    .wrap{padding:2rem 1rem}
    .logos{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:1rem;align-items:center}
    .logo{display:flex;align-items:center;justify-content:center;border:1px solid #e5e7eb;border-radius:.75rem;background:white;padding:1rem}
    .logo img{max-height:40px;max-width:100%}
    @media (max-width:900px){.logos{grid-template-columns:1fr 1fr}}
  `]
})
export class PartnersPageComponent{
  constructor(public data: DataService){}
}
