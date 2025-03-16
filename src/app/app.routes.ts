import { Routes } from '@angular/router';
import { HomeComponent } from './presentation/pages/home/home.component';
import { PageClientComponent } from './presentation/pages/page-client/page-client.component';

export const routes: Routes = [
    {
        path:'home' , component: HomeComponent
    },
    {
        path:"", redirectTo:"home", pathMatch:"full"
    },
    {
        path:'product/:name' , component: PageClientComponent
        // name = 'creatina'
        
    }
    
];
