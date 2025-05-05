import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, appConfig) //whatever component we mention here, same has to be mentioned in index.html
  .catch((err) => console.error(err));




//Bootstrapping our application means loading our application or starting our application

//it takes 2 arguments 1.App component and 2. App config to bootstrap our application
//