import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/providers/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage implements OnInit {

  constructor(private router: Router, private authSvc: AuthService) { }

  ngOnInit() {
  }

  async signout(){
    await this.authSvc.logout();
    this.router.navigateByUrl('/login');
  }

}
