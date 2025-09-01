import { Component } from '@angular/core';
import { StatGridComponent } from '../shared/stat-grid.component';
import { DataService } from '../core/data.service';

@Component({
  standalone: true,
  selector: 'app-impact',
  imports: [StatGridComponent],
  template: `
  <section class="wrap">
    <h1>Notre impact</h1>
    <p>Chiffres clés mis à jour chaque année. Remplacez-les par vos données réelles.</p>
    <app-stat-grid [stats]="data.stats"></app-stat-grid>
  </section>
  `,
  styles: [`.wrap{padding:2rem 1rem}`]
})
export class ImpactPageComponent{
  constructor(public data: DataService){}
}
