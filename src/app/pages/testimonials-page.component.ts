import { Component } from '@angular/core';
import { NgFor } from '@angular/common';
import { DataService } from '../core/data.service';
import { TestimonialComponent } from '../shared/testimonial.component';

@Component({
  standalone: true,
  selector: 'app-testimonials',
  imports: [NgFor, TestimonialComponent],
  template: `
  <section class="wrap">
    <h1>Témoignages</h1>
    <div class="grid">
      <app-testimonial *ngFor="let t of data.testimonials" [text]="t.text" [name]="t.name" [role]="t.role"/>
    </div>
  </section>
  `,
  styles: [`
    .wrap{padding:2rem 1rem}
    .grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:1rem}
    @media (max-width:900px){.grid{grid-template-columns:1fr}}
  `]
})
export class TestimonialsPageComponent{
  constructor(public data: DataService){}
}
