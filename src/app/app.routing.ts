import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WarningComponent } from './warning/warning.component';
import { AboutComponent } from './about/about.component';
import { CastawaysComponent } from './castaways/castaways.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WarningComponent
   },
  {
    path: 'about',
    component: AboutComponent
   },
  {
    path: 'castaways',
    component: CastawaysComponent
   },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
