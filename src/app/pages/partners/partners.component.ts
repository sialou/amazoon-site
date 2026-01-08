
import { CommonModule, DatePipe } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  QueryList,
  ViewChildren
} from '@angular/core';
@Component({
  selector: 'app-partners',
  imports: [CommonModule, DatePipe],
  templateUrl: './partners.component.html',
  styleUrl: './partners.component.css'
})
export class PartnersComponent {
@ViewChildren('logoCard') logoCards!: QueryList<ElementRef>;

  partners = [
    { name: 'Fondation ABC', logo: 'assets/images/4.jpg' },
    { name: 'TechCorp CI', logo: 'assets/images/4.jpg' },
    { name: 'Global Women Network', logo: 'assets/images/4.jpg' },
    { name: 'Initiative Jeunesse et Digital', logo: 'assets/images/4.jpg' },
  ];

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.transitionDelay = `${index * 0.15}s`;
            el.classList.add('show');
            observer.unobserve(el);
          }
        });
      },
      { threshold: 0.2 }
    );

    this.logoCards.forEach(card => {
      observer.observe(card.nativeElement);
    });
  }
  
}
