import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { TokenStorageService } from 'src/app/service/token-storage.service';
import { UserService } from 'src/app/service/user.service';
import { constants } from 'src/app/util/constants';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  currentUser: any;
  googleURL = constants.GOOGLE_AUTH_URL;
  facebookURL = constants.FACEBOOK_AUTH_URL;
  githubURL = constants.GITHUB_AUTH_URL;
  linkedinURL = constants.LINKEDIN_AUTH_URL;

  token!: string | null;
  error!: string | null;
 
  constructor(private authService: AuthService, 
              private tokenStorage: TokenStorageService, 
              private route: ActivatedRoute, 
              private userService: UserService) {}
 
  ngOnInit(): void {
    this.token = this.route.snapshot.queryParamMap.get('token');
    this.error = this.route.snapshot.queryParamMap.get('error');
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.currentUser = this.tokenStorage.getUser();
    }
    else if(this.token){
        this.tokenStorage.saveToken(this.token);
        this.userService.getCurrentUser().subscribe(
          (              data: any) => {
                this.login(data);
              },
          (              err: { error: { message: string; }; }) => {
                this.errorMessage = err.error.message;
                this.isLoginFailed = true;
              }
          );
    }
    else if(this.error){
        this.errorMessage = this.error;
        this.isLoginFailed = true;
    }
  }
 
  onSubmit(): void {
    this.authService.login(this.form).subscribe(
      (      data: { accessToken: any; user: any; }) => {
        this.tokenStorage.saveToken(data.accessToken);
        this.login(data.user);
      },
      (      err: { error: { message: string; }; }) => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }
 
  login(user: any): void {
    this.tokenStorage.saveUser(user);
    this.isLoginFailed = false;
    this.isLoggedIn = true;
    this.currentUser = this.tokenStorage.getUser();
    window.location.reload();
  }
}
