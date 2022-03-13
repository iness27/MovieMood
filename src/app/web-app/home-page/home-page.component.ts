import { Component, OnInit, ViewChild } from '@angular/core';
import { MoviesListComponent } from 'src/app/component/movies/movies-list/movies-list.component';
import { UserService } from 'src/app/service/user.service';
import { SideMenuComponent } from '../../component/layout/side-menu/side-menu.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  @ViewChild('sideMennu') sideMenu: SideMenuComponent | undefined;

  @ViewChild('moviesList') moviesList: MoviesListComponent | undefined;
  
  content: string="";
   
  constructor(private userService: UserService) { }
   
  ngOnInit(): void {
      this.userService.getPublicContent().subscribe(
        (        data: string) => {
          this.content = data;
        },
        (        err: { error: string; }) => {
          this.content = JSON.parse(err.error).message;
        }
      );
  }
  

}