// import { HttpClient } from '@angular/common/http';
// import { Injectable } from '@angular/core';
// import { element } from 'protractor';
// import { BehaviorSubject, Observable } from 'rxjs';
// import { ScreenObject, ScreenResponse } from '../models/screen';

// @Injectable({ providedIn: 'root'})
// export class ScreenService {
//     public screenList: ScreenObject[] = [];
//     public screenTemp: any[] = [];
//     public favoriteScreenTemp: any[] = [];
//     public favoriteScreenList: ScreenObject[] = [];

//     private formNumberSource = new BehaviorSubject(0);
//     formNumber = this.formNumberSource.asObservable();

//     public _screens = new BehaviorSubject<ScreenObject[]>([]);
//     public dataStore: { screens: ScreenObject[] } = { screens: [] };
//     public screens = this._screens.asObservable();

//     public _systemScreens = new BehaviorSubject<ScreenObject[]>([]);
//     public dataStore2: { systemScreens: ScreenObject[] } = { systemScreens: [] };
//     public systemScreens = this._systemScreens.asObservable();
//     constructor(public http: HttpClient) { }
//     getScreenList(UserNo: string) {
//         this.screenList = [];
//         this.screenTemp = [];
//         this.screenList.push(
//             {
//                 title: sessionStorage.lang == 'en' ? 'Home' : 'الشاشة الرئيسية',
//                 type: 'item',
//                 url: '/dashboard/home',
//                 icon: 'feather icon-home',
//                 breadcrumbs: false
//             })
     
//     }
// }    
