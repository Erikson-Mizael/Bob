import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './content/messages/error/not-found/not-found.component';
import { ConnectionComponent } from './content/pages/Connection/Connection.component';
import { HomeComponent } from './content/pages/home/home.component';
import { AuthGuardServiceService } from './services/others/auth-guard-service.service';

const routes: Routes = [

  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuardServiceService]
  },

  {
    path: 'login',
    component: ConnectionComponent
  },

  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },

  {
    path: '**',
    component: NotFoundComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
