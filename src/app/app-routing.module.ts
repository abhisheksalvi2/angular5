import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { AlbumsComponent } from './albums/albums.component';
import { UserAlbumImagesComponent } from './user-album-images/user-album-images.component';
const routes: Routes = [
    {path: '', component: UsersComponent},
    {path: 'albums/:id', component: AlbumsComponent},
    {path: 'images/:id/:user_id', component: UserAlbumImagesComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
