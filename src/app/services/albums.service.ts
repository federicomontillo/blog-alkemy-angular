import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class AlbumsService {

  private url = 'https://jsonplaceholder.typicode.com';

  constructor(private http: HttpClient) { }


  getAlbums() {
    return this.http.get(`${this.url}/albums`);
  }

  getAlbumsUser(id: any) {
    return this.http.get(`${this.url}/users/${id}/albums`);
  }

  getGallery(id: any) {
    return this.http.get(`${this.url}/albums/${id}/photos`);
  }

  deletePhoto(id: any) {
    return this.http.delete(`${this.url}/photos/${id}`);
  }
}
