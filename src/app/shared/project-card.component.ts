import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [RouterLink],
  template: `
  <article class="p">
    <img [src]="cover" [alt]="title">
    <div class="body">
      <h3>{{title}}</h3>
      <p class="obj">{{objective}}</p>
      <a class="more" [routerLink]="['/projets', slug]">Voir le projet →</a>
    </div>
  </article>
  `,
  styles: [`
    .p{border:1px solid #e5e7eb;border-radius:1rem;overflow:hidden;background:white;display:flex;flex-direction:column}
    img{width:100%;height:180px;object-fit:cover}
    .body{padding:1rem}
    .obj{color:#374151}
    .more{font-weight:600;text-decoration:none}
  `]
})
export class ProjectCardComponent{
  @Input() slug!: string;
  @Input() title!: string;
  @Input() cover!: string;
  @Input() objective!: string;
}
