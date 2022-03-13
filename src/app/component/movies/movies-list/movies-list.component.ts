import { Component, OnInit, ViewChild } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { MovieDetailsComponent } from '../movie-details/movie-details.component';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {

  @ViewChild('moviesDetails') moviesDetails: MovieDetailsComponent | undefined;

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }


  getUpcoming(){
    this.apiService.getUpcoming();
  }

}
