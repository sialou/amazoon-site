import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CommonModule, TranslateModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomePageComponent implements AfterViewInit {

  @ViewChild('impactSection') impactSection!: ElementRef;

  count1 = 0;
  count2 = 0;
  count3 = 0;
  count4 = 0;

  private animated = false;

  ngAfterViewInit() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !this.animated) {
          this.startCounters();
          this.animated = true;
        }
      });
    }, { threshold: 0.4 });

    observer.observe(this.impactSection.nativeElement);
  }

  startCounters() {
    this.animateValue('count1', 30000, 2000);
    this.animateValue('count2', 40, 1500);
    this.animateValue('count3', 10, 1500);
    this.animateValue('count4', 100, 2000);
  }

  animateValue(property: 'count1' | 'count2' | 'count3' | 'count4', end: number, duration: number) {
    const startTime = performance.now();

    const animate = (currentTime: number) => {
      const progress = Math.min((currentTime - startTime) / duration, 1);
      this[property] = Math.floor(progress * end);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        this[property] = end;
      }
    };

    requestAnimationFrame(animate);
  }
}