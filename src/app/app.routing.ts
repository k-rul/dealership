import { Routes, RouterModule } from '@angular/router';
import { DealershipComponent } from './dealership/dealership.component';
import { ModuleWithProviders } from '@angular/core';
import { UserLoginComponent } from './user/user-login.component';
import { DealershipDetailsComponent } from './dealership/dealership-details.component';
import { DealershipNewComponent } from './dealership/dealership-new.component';
import { WelcomeComponent } from './home/welcome.component';

const routes: Routes = [
    {
        path: 'welcome',
        component: WelcomeComponent
    },
    {
        path: 'dealership',
        component: DealershipComponent
    },
    {
        path: 'dealership/:id',
        component: DealershipDetailsComponent
    },
    {
        path: 'dealership-new',
        component: DealershipNewComponent
    },
    {
        path: 'UserLogin',
        component: UserLoginComponent
    },
    {
        path: '',
        redirectTo: 'welcome',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: 'welcome',
        pathMatch: 'full'
    }
];

export const appRouting: ModuleWithProviders = RouterModule.forRoot(routes);