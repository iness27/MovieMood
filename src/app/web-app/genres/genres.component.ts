import { Component, OnInit, ViewChild } from '@angular/core';
import { SideMenuComponent } from 'src/app/component/layout/side-menu/side-menu.component';
import { MoviesListComponent } from 'src/app/component/movies/movies-list/movies-list.component';

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {

  @ViewChild('sideMennu') sideMenu: SideMenuComponent | undefined;
  
  @ViewChild('moviesList') moviesList: MoviesListComponent | undefined;
  
  constructor() { }

  ngOnInit(): void {
  }

}
