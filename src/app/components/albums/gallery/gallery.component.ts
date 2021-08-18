import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from 'src/app/services/albums.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit {

  photos: any[] = [];
  albumId: string = '';
  photoUrl: string = '';
  photoId: string = '';

  constructor(
    private galleryService: AlbumsService,
    private activateRoute: ActivatedRoute,
  ) { }


  ngOnInit(): void {
    this.loadGallery();
  }

  loadGallery() {
    const albumId = this.activateRoute.snapshot.paramMap.get('id');
    this.galleryService.getGallery(albumId)
      .subscribe((resp: any) => {
        this.photos = resp;
      });
  }

  showGallery(url: string) {
    this.photoUrl = url;
  }

  saveId(id: string) {
    this.photoId = id;
  }

  deletePhoto(photoId: string) {
    console.log(`Foto ${photoId} eliminada!`);
    this.galleryService.deletePhoto(photoId).subscribe(response => {
      console.log(response);
    });
  }
}
