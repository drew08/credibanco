import { Route } from '@angular/router';
import { CartComponent } from './components';




export const APP_ROUTE: Route[] = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'cart', component: CartComponent },
  { path: 'home', loadChildren: () => import('./modules').then(m => m.HomeModule) }
];