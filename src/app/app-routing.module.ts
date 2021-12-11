import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddSongComponent } from './add-song/add-song.component';
import { CheckSongComponent } from './check-song/check-song.component';
import { HomePageComponent } from './home-page/home-page.component';

const routes: Routes = [{ path: 'check-song', component: CheckSongComponent },
{ path: 'add-song', component: AddSongComponent },
{ path: 'home', component: HomePageComponent },
{ path: '', redirectTo: '/home', pathMatch: 'full' }] // redirect to ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
