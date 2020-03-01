import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private user = {}

  constructor(private router: Router) { }

  ngOnInit() {
  }

  login(){
    console.log(this.user);
    this.router.navigateByUrl('/layout/submit');
  }

}
