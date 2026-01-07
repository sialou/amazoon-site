import { Component } from '@angular/core';
import { CommonModule} from '@angular/common';
@Component({
  selector: 'app-project-detail',
  imports: [CommonModule],
  templateUrl: './project-detail.component.html',
  styleUrl: './project-detail.component.css'
})
export class ProjectDetailComponent {
proj?: {
    title: string;
    cover: string;
    objective: string;
    location: string;
    partners: string[];
    body?: string;
    results: string[];
    quote?: {
      text: string;
      author: string;
    };
  };
}
