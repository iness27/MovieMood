export class constants {

  //root url
  public static readonly API_BASE_URL: string = 'http://localhost:8080/';

  public static readonly OAUTH2_URL = constants.API_BASE_URL + "oauth2/authorization/";
  public static readonly REDIRECT_URL = "?redirect_uri=http://localhost:8080/login";
  public static readonly API_URL = constants.API_BASE_URL + "api/";
  public static readonly AUTH_API = constants.API_URL + "auth/";

  //redirect register url
  public static readonly GOOGLE_AUTH_URL = constants.OAUTH2_URL + "google" + constants.REDIRECT_URL;
  public static readonly FACEBOOK_AUTH_URL = constants.OAUTH2_URL + "facebook" + constants.REDIRECT_URL;
  public static readonly GITHUB_AUTH_URL = constants.OAUTH2_URL + "github" + constants.REDIRECT_URL;
  public static readonly LINKEDIN_AUTH_URL = constants.OAUTH2_URL + "linkedin" + constants.REDIRECT_URL;

  //back url
  public static readonly SIGN_IN = constants.API_URL + "signin";
  public static readonly SIGN_UP = constants.API_URL + "signup";

  public static readonly USER_GET_ALL = constants.API_URL + "all";
  public static readonly USER_BOARD = constants.API_URL + "user";
  public static readonly MODERATOR_BOARD = constants.API_URL + "mod";
  public static readonly ADMIN_BOARD = constants.API_URL + "admin";
  public static readonly CURRENT_USER = constants.API_URL + "user/me";


}
