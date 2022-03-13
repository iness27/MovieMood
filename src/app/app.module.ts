import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './web-app/home-page/home-page.component';
import { ProgressBarComponent } from './component/layout/progress-bar/progress-bar.component';
import { MoviesListComponent } from './component/movies/movies-list/movies-list.component';
import { MovieDetailsComponent } from './component/movies/movie-details/movie-details.component';

import {TieredMenuModule} from 'primeng/tieredmenu';
import {SideMenuComponent } from './component/layout/side-menu/side-menu.component';
import {ToolbarModule} from 'primeng/toolbar';
import {SidebarModule} from 'primeng/sidebar';
import { PanelModule } from 'primeng/panel';
import {PanelMenuModule} from 'primeng/panelmenu';
import { RouterModule } from '@angular/router';
import {MenuItem} from 'primeng/api';
import {MenuModule} from 'primeng/menu';
import {MenubarModule} from 'primeng/menubar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';  
import {CheckboxModule} from 'primeng/checkbox';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LatestComponent } from './web-app/latest/latest.component';
import { EmotionsComponent } from './web-app/emotions/emotions.component';
import { GenresComponent } from './web-app/genres/genres.component';
import { WatchlistsComponent } from './web-app/watchlists/watchlists.component';
import { UpcomingComponent } from './web-app/upcoming/upcoming.component';
import { LoginComponent } from './web-app/login/login.component';
import { BoardAdminComponent } from './web-app/board-admin/board-admin.component';
import { BoardModeratorComponent } from './web-app/board-moderator/board-moderator.component';
import { BoardUserComponent } from './web-app/board-user/board-user.component';
import { ProfileComponent } from './web-app/profile/profile.component';
import { RegisterComponent } from './web-app/register/register.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ProgressBarComponent,
    MoviesListComponent,
    MovieDetailsComponent,
    SideMenuComponent,
    LatestComponent,
    EmotionsComponent,
    GenresComponent,
    WatchlistsComponent,
    UpcomingComponent,
    LoginComponent,
    BoardAdminComponent,
    BoardModeratorComponent,
    BoardUserComponent,
    ProfileComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,

    ToolbarModule,
    TieredMenuModule,
    PanelMenuModule,
    CheckboxModule,
    MenubarModule,
    MenuModule,
    PanelModule,
    SidebarModule,
    BrowserAnimationsModule,
    BrowserModule,
    NgbModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
function routes(routes: any): any[] | import("@angular/core").Type<any> | import("@angular/core").ModuleWithProviders<{}> {
  throw new Error('Function not implemented.');
}

