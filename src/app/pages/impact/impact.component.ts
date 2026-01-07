import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatGridComponent } from '../../shared/stat-grid.component';

Component({
  selector: 'app-impact',
  imports: [CommonModule, StatGridComponent],
  templateUrl: './impact.component.html',
  styleUrl: './impact.component.css'
})
interface Stat {
  label: string;
  value: number;
}
export class ImpactComponent {
 data: {
    stats: Stat[];
  } = {
    stats: [
      { label: 'Bénéficiaires', value: 1200 },
      { label: 'Projets', value: 18 },
      { label: 'Partenaires', value: 12 }
    ]
  };
}
