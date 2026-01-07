import { Routes } from '@angular/router';
import { HomePageComponent } from './pages/home-page.component';
import { ImpactComponent } from './pages/impact/impact.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { ProjectDetailComponent } from './pages/project-detail/project-detail.component';
import { TestimonialsComponent } from './pages/testimonials/testimonials.component';
import { NewsComponent } from './pages/news/news.component';
import { PartnersComponent } from './pages/partners/partners.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DonateComponent } from './pages/donate/donate.component';
import { AboutComponent } from './pages/about/about.component';


export const routes: Routes = [
  { path: '', component: HomePageComponent, title: 'AmazoOn du Web — Inclusion numérique' },
  { path: 'impact', component: ImpactComponent, title: 'Notre impact — AmazoOn du Web' },
  { path: 'projets', component: ProjectsComponent, title: 'Nos projets — AmazoOn du Web' },
  { path: 'projets/:slug', component: ProjectDetailComponent, title: 'Projet — AmazoOn du Web' },
  { path: 'temoignages', component: TestimonialsComponent, title: 'Témoignages — AmazoOn du Web' },
  { path: 'actualites', component: NewsComponent, title: 'Actualités — AmazoOn du Web' },
  { path: 'partenaires', component: PartnersComponent, title: 'Partenaires — AmazoOn du Web' },
  { path: 'contact', component: ContactComponent, title: 'Contact — AmazoOn du Web' },
  { path: 'soutenir', component: DonateComponent, title: 'Soutenir — AmazoOn du Web' },
  { path: 'a-propos', component: AboutComponent, title: 'À propos — AmazoOn du Web' },
  { path: '**', redirectTo: '' }
];
