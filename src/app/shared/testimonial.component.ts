import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  standalone: true,
  template: `
  <figure class="t">
    <blockquote>“{{text}}”</blockquote>
    <figcaption>— {{name}}, <span class="role">{{role}}</span></figcaption>
  </figure>
  `,
  styles: [`
    .t{border:1px solid #e5e7eb;border-radius:1rem;padding:1rem;background:white}
    blockquote{margin:0 0 .5rem 0}
    .role{color:#6b7280}
  `]
})
export class TestimonialComponent{
  @Input() text!: string;
  @Input() name!: string;
  @Input() role!: string;
}
