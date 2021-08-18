import { Component, OnInit, Output, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import { AlbumsService } from 'src/app/services/albums.service';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {

  albums: any[] = [];

  displayedColumns: string[] = ['title', 'galeria', 'usuario'];
  dataSource = new MatTableDataSource(this.albums);

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private albumsService: AlbumsService,
    private activateRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.loadAlbums();
  }

  loadAlbums() {
    const id = this.activateRoute.snapshot.paramMap.get('id');
    if (id) {
      this.albumsService.getAlbumsUser(id)
        .subscribe((resp: any) => {
          this.albums = resp;
          this.dataSource = new MatTableDataSource(this.albums);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });
    } else {
      this.albumsService.getAlbums()
        .subscribe((resp: any) => {
          this.albums = resp;
          this.dataSource = new MatTableDataSource(this.albums);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });
    }
  }
}
