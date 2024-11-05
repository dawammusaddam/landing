import { AfterViewInit, ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ApiService } from 'src/app/service/api.service';
import { environment } from 'src/environments/environment';

const APIROOTURL = environment.apiRootUrl;
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
  Settingicon = true;
  APIROOTURL = APIROOTURL;
  

  constructor(
    private modalService: NgbModal, 
    private router: Router, 
    private apiService: ApiService) {}

  num: number = 0;
  option = {
    startVal: this.num,
    useEasing: true,
    duration: 2,
    decimalPlaces: 0,
  };
  year = new Date().getFullYear()


  ngOnInit(): void {
    this.listBerita();
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

  windowScroll() {
    if (
      document.body.scrollTop > 50 ||
      document.documentElement.scrollTop > 50
    ) {
      document.getElementById("topnav").classList.add("nav-sticky");
    } else {
      document.getElementById("topnav").classList.remove("nav-sticky");
    }
  }

  navigateToKegiatan(): void {
    // Scroll to the div
    this.router.navigate(['news-list'])
  }

  beritas: any;
  listBerita(): void{
    const newsData = new FormData();

    newsData.append('pagination[page]', "1");
    newsData.append('pagination[pages]', "1");
    newsData.append('pagination[perpage]', "3");
    newsData.append('pagination[total]', "3");
    newsData.append('sort[field]', "created_at");
    newsData.append('sort[sort]', "desc");

    this.apiService.post('berita/datatable', newsData).subscribe( res => {
      this.beritas = res;
    });
  }
  
}
