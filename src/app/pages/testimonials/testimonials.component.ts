import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestimonialComponent } from '../../shared/testimonial.component'; 
interface Testimonial {
  text: string;
  name: string;
  role: string;
}
@Component({
  selector: 'app-testimonials',
  imports: [CommonModule,TestimonialComponent],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css'
})
export class TestimonialsComponent {
 data: {
    testimonials: Testimonial[];
  } = {
    testimonials: [
      {
        text: 'Un impact réel sur notre communauté.',
        name: 'A. Koné',
        role: 'Chef communautaire'
      },
      { text: 'Excellent travail', name: 'Bob', role: 'CTO' }
    ]
  };
}
