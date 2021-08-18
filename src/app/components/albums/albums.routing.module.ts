import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlbumsComponent } from './albums.component';
import { GalleryComponent } from './gallery/gallery.component';


const routes: Routes = [
  { path: '', component: AlbumsComponent },
  { path: 'albums/gallery/:id', component: GalleryComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AlbumsRoutingModule { }