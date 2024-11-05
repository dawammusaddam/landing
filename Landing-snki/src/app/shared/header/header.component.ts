import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor( 
    private router: Router) {}

  
    navigateToHome(): void {
      // Scroll to the div
      // this.kegiatanSec.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  
      // // Set focus to the div
      // this.kegiatanSec.nativeElement.focus();
      this.router.navigate(['/'])
    }

  windowScroll() {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.getElementById("topnav").classList.add("nav-sticky");
    } else {
      document.getElementById("topnav").classList.remove("nav-sticky");
    }
    if (document.getElementById("back-to-top")) {
      if (
        document.body.scrollTop > 100 ||
        document.documentElement.scrollTop > 100
      ) {
        document.getElementById("back-to-top").style.display = "inline";
      } else {
        document.getElementById("back-to-top").style.display = "none";
      }
    }
  }
}
