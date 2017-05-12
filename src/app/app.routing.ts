import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WarningComponent } from './warning/warning.component';
import { AboutComponent } from './about/about.component';

const appRoutes: Routes = [
  {
    path: '',
    component: WarningComponent
   },
  {
    path: 'about',
    component: AboutComponent
   },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
