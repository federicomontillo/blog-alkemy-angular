import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';

import { AlbumsComponent } from './albums.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AlbumsRoutingModule } from './albums.routing.module';

@NgModule({
  declarations: [
    AlbumsComponent,
    GalleryComponent
  ],
  imports: [
    CommonModule,
    AlbumsRoutingModule,
    SharedModule,
    HttpClientModule
  ]
})
export class AlbumsModule { }
