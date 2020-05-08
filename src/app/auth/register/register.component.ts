import { Component, OnInit } from '@angular/core';
import { AuthService } from  'src/app/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userEmail: any;
  password: any;
  constructor(private  authService:  AuthService,public router: Router) { }
  ngOnInit() {}

  onRegister(){
      this.authService.register(this.userEmail, this.password);
  }

  login(){
    this.router.navigate(['']);
  }
}
