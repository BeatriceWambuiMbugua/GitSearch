import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';


@Injectable()
export class ProfileService {
  private username: string;
  private clientid = '3bd674499d3ae238583b';
  private clientsecret = '799b7ad907f1f0fd7659cc1ff54f5c611697a341';

  constructor(private http:HttpClient) { 
    console.log("service is now ready!");
    this.username = 'BeatriceWambuiMbugua';

  }
  getProfileInfo(){
    return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
    .pipe(map(res => res));

  }
}
