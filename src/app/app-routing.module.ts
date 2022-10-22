import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeComponent } from './components/code/code.component';
import { ContactComponent } from './components/contact/contact.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { HomeComponent } from './components/home/home.component';
import { ProyectsComponent } from './components/proyects/proyects.component';

const routes: Routes = [ 
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
  },
  { 
    path: 'contact',
    component: ContactComponent,
    pathMatch: 'full',
  },
  { 
    path: 'education',
    component: EducationComponent,
    pathMatch: 'full',
  },
  { 
    path: 'experience',
    component: ExperienceComponent,
    pathMatch: 'full',
  },
  { 
    path: 'proyects',
    component: ProyectsComponent,
    pathMatch: 'full',
  },
  { 
    path: 'code',
    component: CodeComponent,
    pathMatch: 'full',
  },
  {
    path: '**',
    component: HomeComponent,
    pathMatch: 'full',

  }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})



export class AppRoutingModule { }
