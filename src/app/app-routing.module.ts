import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileService } from './services/profile.service';

const routes: Routes = [
  {path: 'users', component: ProfileComponent},
  {path: 'repos', component: ProfileService}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
