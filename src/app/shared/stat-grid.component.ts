import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stat-grid',
  standalone: true,
    imports: [CommonModule],
  template: `
  <section class="stats">
    <div class="card" *ngFor="let s of stats">
      <div class="value">{{s.value}}</div>
      <div class="label">{{s.label}}</div>
      <div class="more" *ngIf="s.more">{{s.more}}</div>
    </div>
  </section>
  `,
  styles: [`
    .stats{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:1rem;padding:1rem}
    .card{background:white;border:1px solid #e5e7eb;border-radius:1rem;padding:1rem}
    .value{font-size:1.8rem;font-weight:800;color:#111827}
    .label{color:#6b7280}
    .more{margin-top:.25rem;color:#374151}
    @media (max-width:900px){.stats{grid-template-columns:1fr 1fr}}
    @media (max-width:600px){.stats{grid-template-columns:1fr}}
  `]
})
export class StatGridComponent{
  @Input() stats: {label:string; value:string; more?:string}[] = [];
}
