import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardServiceService {
  constructor() {
  }

  setToken(token: any) {
    sessionStorage.setItem("token", token)
  }

  getToken(){
    return sessionStorage.getItem('token')
  }
}