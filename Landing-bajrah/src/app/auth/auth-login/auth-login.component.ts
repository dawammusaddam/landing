import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth-login',
  templateUrl: './auth-login.component.html',
  styleUrls: ['./auth-login.component.css']
})

/**
 * Auth Login Component
 */
export class AuthLoginComponent implements OnInit {

  year = new Date().getFullYear()
  constructor() { }

  ngOnInit(): void {
  }

}
