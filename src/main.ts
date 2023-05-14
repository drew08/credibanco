import { provideRouter } from '@angular/router';



import { provideHttpClient } from '@angular/common/http';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideToastr } from 'ngx-toastr';
import { AppComponent } from './app/app.component';
import { APP_ROUTE } from './app/app.route';

import { provideAnimations } from '@angular/platform-browser/animations';




bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(APP_ROUTE),
    provideHttpClient(),
    provideToastr(),
    provideAnimations()
  ]


});