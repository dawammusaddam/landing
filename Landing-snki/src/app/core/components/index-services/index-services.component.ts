import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-index-services',
  templateUrl: './index-services.component.html',
  styleUrls: ['./index-services.component.css']
})

/***
 * Services Component
 */
export class IndexServicesComponent implements OnInit {

  /***
   * Footer bg color set
   */
  footerClass: true;
  footerVariant = 'bg-light';
  // Set Topbar Option
  Menuoption = 'center';
  Settingicon = true
  Nfticons = true;
  

  constructor(private modalService: NgbModal, private route: ActivatedRoute) { }

  num: number = 0;
  option = {
    startVal: this.num,
    useEasing: true,
    duration: 2,
    decimalPlaces: 0,
  };
  year = new Date().getFullYear()


  ngOnInit(): void {
  }

  /**
   * Open modal for show the video
   * @param content content of modal
   */
  openWindowCustomClass(content) {
    this.modalService.open(content, { windowClass: 'dark-modal', size: 'lg', centered: true });
  }

  @ViewChild('homeSec') homeSec: ElementRef;
  @ViewChild('aboutSec') aboutSec: ElementRef;
  @ViewChild('featureSec') featureSec: ElementRef;
  @ViewChild('contactSec') contactSec: ElementRef;
  @ViewChild('kegiatanSec') kegiatanSec: ElementRef;

  scrollToHome(): void {
    // Scroll to the div
    this.homeSec.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Set focus to the div
    this.homeSec.nativeElement.focus();
  }

  scrollToAbout(): void {
    // Scroll to the div
    this.aboutSec.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Set focus to the div
    this.aboutSec.nativeElement.focus();
  }

  scrollToFeature(): void {
    // Scroll to the div
    this.featureSec.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Set focus to the div
    this.featureSec.nativeElement.focus();
  }

  scrollToContact(): void {
    // Scroll to the div
    this.contactSec.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Set focus to the div
    this.contactSec.nativeElement.focus();
  }

  scrollToKegiatan(): void {
    // Scroll to the div
    this.kegiatanSec.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Set focus to the div
    this.kegiatanSec.nativeElement.focus();
  }
  
}
