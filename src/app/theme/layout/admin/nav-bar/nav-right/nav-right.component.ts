import { TimeZone } from './../../../../../shared/models/timezone.model';
import { TranslateService } from '@ngx-translate/core';
import {Component, DoCheck, OnInit} from '@angular/core';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';
import {animate, style, transition, trigger} from '@angular/animations';
import {GradientConfig} from '../../../../../app-config';

@Component({
  selector: 'app-nav-right',
  templateUrl: './nav-right.component.html',
  styleUrls: ['./nav-right.component.scss'],
  providers: [NgbDropdownConfig],
  animations: [
    trigger('slideInOutLeft', [
      transition(':enter', [
        style({transform: 'translateX(100%)'}),
        animate('300ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({transform: 'translateX(100%)'}))
      ])
    ]),
    trigger('slideInOutRight', [
      transition(':enter', [
        style({transform: 'translateX(-100%)'}),
        animate('300ms ease-in', style({transform: 'translateX(0%)'}))
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({transform: 'translateX(-100%)'}))
      ])
    ])
  ]
})
export class NavRightComponent implements OnInit, DoCheck {
  public visibleUserList: boolean;
  public chatMessage: boolean;
  public friendId: boolean;
  public gradientConfig: any;
  selectedLanguageText = "English";
  selectedLanguageFlag = "./../../../../../../assets/images/flags/us.png";
  public rtlLayout: any; // rtl type
  public ltrLayout: any; // ltr type
  //Timezone Dropdown list
  timeZone: TimeZone[] = [
    { id:-12, name:"(UTC-12:00) International Date Line West" },
    { id:-11, name:"(UTC-11:00) Coordinated Universal Time-11" },
    { id:-10, name:"(UTC-10:00) Hawaii" },
    { id:-8, name:"(UTC-09:00) Alaska" },
    { id:-7, name:"(UTC-08:00) Baja California" },
    { id:-7, name:"(UTC-07:00) Pacific Time (US & Canada)" },
    { id:-8, name:"(UTC-08:00) Pacific Time (US & Canada)" },
    { id:-7, name:"(UTC-07:00) Arizona" },
    { id:-6, name:"(UTC-07:00) Chihuahua, La Paz, Mazatlan" },
    { id:-6, name:"(UTC-07:00) Mountain Time (US & Canada)" },
    { id:-6, name:"(UTC-06:00) Central America" },
    { id:-5, name:"(UTC-06:00) Central Time (US &amp; Canada)" },
    { id:-5, name:"(UTC-06:00) Guadalajara, Mexico City, Monterrey" },
    { id:-6, name:"(UTC-06:00) Saskatchewan" },
    { id:-5, name:"(UTC-05:00) Bogota, Lima, Quito" },
    { id:-4, name:"(UTC-05:00) Eastern Time (US &amp; Canada)" },
    { id:-4, name:"(UTC-05:00) Indiana (East)" },
    { id:-4.5, name:"(UTC-04:30) Caracas" },
    { id:-4, name:"(UTC-04:00) Asuncion" },
    { id:-3, name:"(UTC-04:00) Atlantic Time (Canada)" },
    { id:-4, name:"(UTC-04:00) Cuiaba" },
    { id:-4, name:"(UTC-04:00) Georgetown, La Paz, Manaus, San Juan" },
    { id:-4, name:"(UTC-04:00) Santiago" },
    { id:-2.5, name:"(UTC-03:30) Newfoundland" },
    { id:-3, name:"(UTC-03:00) Brasilia" },
    { id:-3, name:"(UTC-03:00) Buenos Aires" },
    { id:-3, name:"(UTC-03:00) Cayenne, Fortaleza" },
    { id:-3, name:"(UTC-03:00) Greenland" },
    { id:-3, name:"(UTC-03:00) Montevideo" },
    { id:-3, name:"(UTC-03:00) Salvador" },
    { id:-2, name:"(UTC-02:00) Coordinated Universal Time-02" },
    { id:-1, name:"(UTC-02:00) Mid-Atlantic - Old" },
    { id:0, name:"(UTC-01:00) Azores" },
    { id:-1, name:"(UTC-01:00) Cape Verde Is." },
    { id:1, name:"(UTC) Casablanca" },
    { id:0, name:"(UTC) Coordinated Universal Time" },
    { id:0, name:"(UTC) Edinburgh, London" },
    { id:1, name:"(UTC+01:00) Edinburgh, London" },
    { id:1, name:"(UTC) Dublin, Lisbon" },
    { id:0, name:"(UTC) Monrovia, Reykjavik" },
    { id:2, name:"(UTC+01:00) Amsterdam, Berlin, Bern, Rome, Stockholm, Vienna" },
    { id:2, name:"(UTC+01:00) Belgrade, Bratislava, Budapest, Ljubljana, Prague" },
    { id:2, name:"(UTC+01:00) Brussels, Copenhagen, Madrid, Paris" },
    { id:2, name:"(UTC+01:00) Sarajevo, Skopje, Warsaw, Zagreb" },
    { id:1, name:"(UTC+01:00) West Central Africa" },
    { id:1, name:"(UTC+01:00) Windhoek" },
    { id:3, name:"(UTC+02:00) Athens, Bucharest" },
    { id:3, name:"(UTC+02:00) Beirut" },
    { id:2, name:"(UTC+02:00) Cairot" },
    { id:3, name:"(UTC+02:00) Damascus" },
    { id:3, name:"(UTC+02:00) E. Europe" },
    { id:2, name:"(UTC+02:00) Harare, Pretoria" },
    { id:3, name:"(UTC+02:00) Helsinki, Kyiv, Riga, Sofia, Tallinn, Vilnius" },
    { id:3, name:"(UTC+03:00) Istanbul" },
    { id:3, name:"(UTC+02:00) Jerusalem" },
    { id:2, name:"(UTC+02:00) Tripoli" },
    { id:3, name:"(UTC+03:00) Amman" },
    { id:3, name:"(UTC+03:00) Baghdad" },
    { id:3, name:"(UTC+02:00) Kaliningrad" },
    { id:3, name:"(UTC+03:00) Kuwait, Riyadh" },
    { id:3, name:"(UTC+03:00) Nairobi" },
    { id:3, name:"(UTC+03:00) Moscow, St. Petersburg, Volgograd, Minsk" },
    { id:4, name:"(UTC+04:00) Samara, Ulyanovsk, Saratov" },
    { id:4.5, name:"(UTC+03:30) Tehran" },
    { id:4, name:"(UTC+04:00) Abu Dhabi, Muscat" },
    { id:5, name:"(UTC+04:00) Baku" },
    { id:4, name:"(UTC+04:00) Port Louis" },
    { id:4, name:"(UTC+04:00) Tbilisi" },
    { id:4, name:"(UTC+04:00) Yerevan" },
    { id:4.5, name:"(UTC+04:30) Kabul" },
    { id:5, name:"(UTC+05:00) Ashgabat, Tashkent" },
    { id:5, name:"(UTC+05:00) Yekaterinburg" },
    { id:5, name:"(UTC+05:00) Islamabad, Karachi" },
    { id:5.5, name:"(UTC+05:30) Chennai, Kolkata, Mumbai, New Delhi" },
    { id:5.5, name:"(UTC+05:30) Sri Jayawardenepura" },
    { id:5.75, name:"(UTC+05:45) Kathmandu" },
    { id:6, name:"(UTC+06:00) Nur-Sultan (Astana)" },
    { id:6, name:"(UTC+06:00) Dhaka" },
    { id:6.5, name:"(UTC+06:30) Yangon (Rangoon)" },
    { id:7, name:"(UTC+07:00) Bangkok, Hanoi, Jakarta" },
    { id:7, name:"(UTC+07:00) Novosibirsk" },
    { id:8, name:"(UTC+08:00) Beijing, Chongqing, Hong Kong, Urumqi" },
    { id:8, name:"(UTC+08:00) Krasnoyarsk" },
    { id:8, name:"(UTC+08:00) Kuala Lumpur, Singapore" },
    { id:8, name:"(UTC+08:00) Perth" },
    { id:8, name:"(UTC+08:00) Taipei" },
    { id:8, name:"(UTC+08:00) Ulaanbaatar" },
    { id:8, name:"(UTC+08:00) Irkutsk" },
    { id:9, name:"(UTC+09:00) Osaka, Sapporo, Tokyo" },
    { id:9, name:"(UTC+09:00) Seoul" },
    { id:9.5, name:"(UTC+09:30) Adelaide" },
    { id:9.5, name:"(UTC+09:30) Darwin" },
    { id:10, name:"(UTC+10:00) Brisbane" },
    { id:10, name:"(UTC+10:00) Canberra, Melbourne, Sydney" },
    { id:10, name:"(UTC+10:00) Guam, Port Moresby" },
    { id:10, name:"(UTC+10:00) Hobart" },
    { id:9, name:"(UTC+09:00) Yakutsk" },
    { id:11, name:"(UTC+11:00) Solomon Is., New Caledonia" },
    { id:11, name:"(UTC+11:00) Vladivostok" },
    { id:12, name:"(UTC+12:00) Auckland, Wellington" },
    { id:12, name:"(UTC+12:00) Coordinated Universal Time+12" },
    { id:12, name:"(UTC+12:00) Fiji" },
    { id:12, name:"(UTC+12:00) Magadan" },
    { id:13, name:"(UTC+12:00) Petropavlovsk-Kamchatsky - Old" },
    { id:13, name:"(UTC+13:00) Nuku'alofa" },
    { id:13, name:"(UTC+13:00) Samoa" },
    
    
  ];

  constructor(public translate:TranslateService) {
    this.visibleUserList = false;
    this.chatMessage = false;
    this.gradientConfig = GradientConfig.config;
  }

  ngOnInit() { }

  onChatToggle(friendID) {
    this.friendId = friendID;
    this.chatMessage = !this.chatMessage;
  }

  ngDoCheck() {
    if (document.querySelector('body').classList.contains('elite-rtl')) {
      this.gradientConfig['rtl-layout'] = true;
    } else {
      this.gradientConfig['rtl-layout'] = false;
    }

    if(localStorage.getItem('lang') !== undefined && localStorage.getItem('lang') !== null) {
      switch(localStorage.getItem('lang')) {
        case 'ar':
          document.querySelector('body').classList.add('gradient-rtl');
          document.querySelector('body').classList.remove('gradient-ltr');
          break;
        default:
          document.querySelector('body').classList.remove('gradient-rtl');
          document.querySelector('body').classList.add('gradient-ltr');
          break;
      }
    }

  }

  setLanguageLayout(e,language:string) {
    const flag = !!(e.target);
    console.log(e.target);
    this.changeLanguageLayout(flag,language);
  }

  changeLanguageLayout(flag , language:string) {
    if (flag) {
      document.querySelector('body').classList.add('gradient-rtl');
      document.querySelector('body').classList.remove('gradient-ltr');
    } 
    else {
      document.querySelector('body').classList.remove('gradient-rtl');
      document.querySelector('body').classList.add('gradient-ltr');
    }
    // add language to localStorage
    localStorage.setItem("lang",language);

    this.translate.setDefaultLang(language);
    this.translate.use(language);
    if (language === 'en') {
      this.selectedLanguageText = "English";
      this.selectedLanguageFlag = "./../../../../../../assets/images/flags/us.png";
    }
    else if (language === 'ar') {
      this.selectedLanguageText = "العربية";
      this.selectedLanguageFlag = "./../../../../../../assets/images/flags/ar.png";
    }
    else if (language === 'fr') {
      this.selectedLanguageText = "Français";
      this.selectedLanguageFlag = "./../../../../../../assets/images/flags/fr.png";
    }
    else if (language === 'tr') {
      this.selectedLanguageText = "Türk";
      this.selectedLanguageFlag = "./../../../../../../assets/images/flags/tr.png";
    }
    window.localStorage.getItem("lang");
    // location.reload();
  }
  

}
