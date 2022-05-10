import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment} from '../../environments/environment.user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  addUser(data: any){
    let url = environment.USER_BASE_URL+environment.USER.ADD_USER;
    return this.http.post(url, data);
  }

  loguser(data: any){
    let url = environment.USER_BASE_URL+environment.USER.LOGIN_USER;
    return this.http.post(url, data);
  }
}
