import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './web-app/home-page/home-page.component';
import { MovieDetailsComponent } from './component/movies/movie-details/movie-details.component';
import { GenresComponent } from './web-app/genres/genres.component';
import { WatchlistsComponent } from './web-app/watchlists/watchlists.component';
import { MoviesListComponent } from './component/movies/movies-list/movies-list.component';
import { EmotionsComponent } from './web-app/emotions/emotions.component';
import { UpcomingComponent } from './web-app/upcoming/upcoming.component';
import { LatestComponent } from './web-app/latest/latest.component';
import { LoginComponent } from './web-app/login/login.component';
import { BoardAdminComponent } from './web-app/board-admin/board-admin.component';
import { BoardModeratorComponent } from './web-app/board-moderator/board-moderator.component';
import { BoardUserComponent } from './web-app/board-user/board-user.component';
import { RegisterComponent } from './web-app/register/register.component';
import { ProfileComponent } from './web-app/profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'upcoming', component: UpcomingComponent },
  { path: 'latest', component: LatestComponent },
  { path: 'mood', component: EmotionsComponent },
  { path: 'adminBoard', component: BoardAdminComponent },
  { path: 'moderatorBoard', component: BoardModeratorComponent },
  { path: 'user', component: BoardUserComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },

  { path: 'genres', component: GenresComponent },
  { path: 'watchlists', component: WatchlistsComponent },

  { path: 'movies', component: MoviesListComponent },
  { path: 'movies/details/:id', component: MovieDetailsComponent }
  

];

@NgModule({ declarations: [],
   imports: [ RouterModule.forRoot(routes) ],
   exports: [ RouterModule ]
   })
  export class AppRoutingModule { }
  
