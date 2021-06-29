import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  selectLang :string = "";
  TransLang=[];
  constructor(private router: Router,private translate: TranslateService) {
    translate.addLangs(['en','ar','fr','tr'])
    if(localStorage.getItem('lang') === undefined || localStorage.getItem('lang') === null) {
      translate.setDefaultLang('en');
      translate.use('en');
      this.selectLang = 'en';
    }
    else {
      this.selectLang = localStorage.getItem('lang');
      translate.setDefaultLang(localStorage.getItem('lang'));
      translate.use(localStorage.getItem('lang'));
    }
  }

  ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0);
    });
  }
}
