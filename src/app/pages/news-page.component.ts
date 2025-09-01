import { Component } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { DataService } from '../core/data.service';

@Component({
  standalone: true,
  selector: 'app-news',
 imports: [CommonModule, DatePipe], 
  template: `
  <section class="wrap">
    <h1>Actualités</h1>
    <div class="grid">
      <article class="card" *ngFor="let n of data.news">
        <img [src]="n.image" [alt]="n.title">
        <div class="b">
          <h3>{{n.title}}</h3>
          <div class="muted">{{n.date | date}}</div>
          <p>{{n.excerpt}}</p>
        </div>
      </article>
    </div>
  </section>
  `,
  styles: [`
    .wrap{padding:2rem 1rem}
    .grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1rem}
    .card{border:1px solid #e5e7eb;border-radius:1rem;overflow:hidden;background:white}
    img{width:100%;height:180px;object-fit:cover}
    .b{padding:1rem}
    .muted{color:#6b7280;margin-bottom:.25rem}
    @media (max-width:900px){.grid{grid-template-columns:1fr}}
  `]
})
export class NewsPageComponent{
  constructor(public data: DataService){}
}
