import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-news-list',
  templateUrl: './news-list.component.html',
  styleUrl: './news-list.component.css'
})
export class NewsListComponent implements OnInit{
  
  constructor() {}
  ngOnInit(): void {
    
  }

  @ViewChild('homeSeca') homeSec: ElementRef;
  scrollToHome(): void {
    
    console.log('homeSec', document.getElementById("home"))
    // Scroll to the div
    // this.homeSec.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // // Set focus to the div
    // this.homeSec.nativeElement.focus();
  }
}
