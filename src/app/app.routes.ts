import { Routes } from '@angular/router';
import { Home } from './home/home';
import { DataBinding } from './data-binding/data-binding';
import { Directives } from './directives/directives';
import { AnythingElse } from './anything-else/anything-else';

export const routes: Routes = [
  { path: '', component: Home, title: 'Home | My CV' },
  { path: 'data-binding', component: DataBinding, title: 'Data Binding | My CV' },
  { path: 'directives', component: Directives, title: 'Directives | My CV' },
  { path: '**', component: AnythingElse, title: 'Page Not Found | My CV' }
];
