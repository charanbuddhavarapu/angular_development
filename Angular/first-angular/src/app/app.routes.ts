import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { CareerComponent } from './components/career/career.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { NotfoundComponent } from './components/notfound/notfound.component';
import { UsersComponent } from './components/users/users.component';

//Configure all the routes
export const routes: Routes = [
    {path:'home', component:HomeComponent},
    {path:'aboutus',component:AboutusComponent},
    {path:'careers',component:CareerComponent},
    {path:'contactus',component:ContactusComponent},
    {path:'users',component:UsersComponent},
    {path:'userDetails/:id',component:UsersComponent},
    {path:'',component:HomeComponent},      //The default route, even when home is not present in route
    {path:'**',component:NotfoundComponent} //when user clicks non available route
];
