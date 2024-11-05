import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/service/api.service';
import { environment } from 'src/environments/environment';

const APIROOTURL = environment.apiRootUrl;
@Component({
  selector: 'app-news-detail',
  templateUrl: './news-detail.component.html',
  styleUrl: './news-detail.component.css'
})
export class NewsDetailComponent implements OnInit {

      /**
       * Nav Light Class Add
       */
      navClass = 'nav-light';
      APIROOTURL = APIROOTURL;

      berita;
      // slug;

      constructor(
        private activatedRoute: ActivatedRoute,
        private apiService: ApiService
      ) { 
        this.activatedRoute.params.subscribe(p => {
          // this.slug = p['slug'];
          this.showBerita(p['slug']);
        });
      }

      ngOnInit(): void {
        
      }

      showBerita(slug: string): void {
        this.apiService.get('berita/' + slug).subscribe( res => {
          this.berita = res['data'];
        });
      }
}
