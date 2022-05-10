import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthGuardServiceService } from 'src/app/services/auth-guard-service.service';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  val: any;
  constructor(
    private userService: UserService,
    private router: Router,
    private authService: AuthGuardServiceService) { }
  login = new FormGroup({
    email: new FormControl('aysha@gmail.com', []),
    password: new FormControl('666', [])
  })

  ngOnInit(): void {
    console.log("yusuf");
  }
  log() {
    console.log(this.login.value);
    this.val = this.login.value;
    this.userService.loguser(this.val).subscribe((data: any) => { 
      console.log(data)
      if (data.token){
        this.authService.setToken(data.token);
        // sessionStorage.setItem("token", data.token);
        this.router.navigate(['/inventory']);
      } 
      else
        console.log("error")
    })

  }


}
