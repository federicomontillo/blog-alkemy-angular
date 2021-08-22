import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from 'src/app/services/albums.service';
import Swal from 'sweetalert2';

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
    Swal.fire({
      title: '¿Estás seguro/a?',
      text: "La foto se eliminará de manera permanente.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: '¡Si, borrar!'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(`Foto ${photoId} eliminada!`);
        this.galleryService.deletePhoto(photoId).subscribe(response => {
          console.log(response);
        });
        Swal.fire(
          'Foto Borrada',
          'La foto fue eliminada con éxito.',
          'success'
        )
      }
    })
  }
}
