/*import { Component, ViewChild } from '@angular/core';
//import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { Config, Nav, Platform } from 'ionic-angular';

import { SplashScreen } from '../pages/pages';
import { Settings } from '../providers/providers';
import { InicioClientePage } from '../pages/inicio-cliente/inicio-cliente';

import { variableGlobal } from '../pages/lenguajes';
import { Storage } from '@ionic/storage';

@Component({
  template: `<ion-menu [content]="content">
    <ion-header >
      <ion-toolbar color = "dark">
        <ion-title>{{language.seleccioneSolo}}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content style="background-color: #14830a!important;">
      <ion-list  >
        <button style="background-color: red!important;" menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">
          {{p.title}}
        </button>
      </ion-list>
    </ion-content>

  </ion-menu>
  <ion-nav #content [root]="rootPage"></ion-nav>`
})
export class MyApp {
  
 // rootPage = SplashScreen;
 //rootPage = InicioClientePage;
  @ViewChild(Nav) nav: Nav;
  public static languagee:any;
  public  language:any;

  pages: any[];



  constructor(
    private translate: TranslateService, 
    platform: Platform, 
    settings: Settings, 
    private config: Config, 
    private statusBar: StatusBar, 
    private storage: Storage
    //private splashScreen: SplashScreen
  ) {
    MyApp.languagee="";
    this.language="";
  //this.language=MyApp.languagee;
    this.traerLanguaje();

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      //this.splashScreen.hide();

      
    });
    this.initTranslate();

   
       }
  

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();

    if (browserLang) {
      if (browserLang === 'zh') {
        const browserCultureLang = this.translate.getBrowserCultureLang();

        if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
          this.translate.use('zh-cmn-Hans');
        } else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
          this.translate.use('zh-cmn-Hant');
        }
      } else {
        this.translate.use(this.translate.getBrowserLang());
      }
    } else {
      this.translate.use('en'); // Set your language here
    }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }

  traerLanguaje()
  {
   this.language = variableGlobal.idiomas.es;

   this.pages=[
    { title: this.language.configurarIdioma, component: 'ConfigIdiomaPage' }
  ]
  
   console.log("Lenguaje: " + JSON.stringify(this.language));
   this.storage.clear();
   this.storage.set('language', this.language);
   
  }

  public static actualizarSlide(parametro:any) {
    // Initialization
    alert("entro al actualizador");
    console.log("AAAAAAAAAAAAAAAAAAEEEEEEEEEEEEE");


}

 public actualizarSlide2(parametro:any) {
 this.language= MyApp.languagee
  
}
  
}

*/



import { Component, ViewChild } from '@angular/core';
//import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { TranslateService } from '@ngx-translate/core';
import { Config, Nav, Platform } from 'ionic-angular';

import { SplashScreen } from '../pages/pages';
import { Settings } from '../providers/providers';
import { InicioClientePage } from '../pages/inicio-cliente/inicio-cliente';

import { variableGlobal } from '../pages/lenguajes';
import { Storage } from '@ionic/storage';

@Component({
  template: `<ion-menu [content]="content">
    <ion-header >
      <ion-toolbar color = "dark">
        <ion-title></ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content style="background-color: #3C3C4A !important;">
      <ion-list  >
       <!-- <button style="background-color: red!important;" menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">
          {{p.title}}
        </button>-->
<br>
<br>
<br>
<br>
<br>
        <img [src]="'assets/img/idiomas.jpg'" style=""  menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)"  />

      </ion-list>
    </ion-content>

  </ion-menu>
  <ion-nav #content [root]="rootPage"></ion-nav>`
})
export class MyApp {
  rootPage = SplashScreen;
 //rootPage = InicioClientePage;
  @ViewChild(Nav) nav: Nav;
  language:any;

  pages: any[];



  constructor(
    private translate: TranslateService, 
    platform: Platform, 
    settings: Settings, 
    private config: Config, 
    private statusBar: StatusBar, 
    private storage: Storage
    //private splashScreen: SplashScreen
  ) {
    this.language="";
    this.traerLanguaje();

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      //this.splashScreen.hide();

      
    });
    this.initTranslate();

   
       }
  

  initTranslate() {
    // Set the default language for translation strings, and the current language.
    this.translate.setDefaultLang('en');
    const browserLang = this.translate.getBrowserLang();

    if (browserLang) {
      if (browserLang === 'zh') {
        const browserCultureLang = this.translate.getBrowserCultureLang();

        if (browserCultureLang.match(/-CN|CHS|Hans/i)) {
          this.translate.use('zh-cmn-Hans');
        } else if (browserCultureLang.match(/-TW|CHT|Hant/i)) {
          this.translate.use('zh-cmn-Hant');
        }
      } else {
        this.translate.use(this.translate.getBrowserLang());
      }
    } else {
      this.translate.use('en'); // Set your language here
    }

    this.translate.get(['BACK_BUTTON_TEXT']).subscribe(values => {
      this.config.set('ios', 'backButtonText', values.BACK_BUTTON_TEXT);
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.push(page.component);
  }

  traerLanguaje()
  {
   this.language = variableGlobal.idiomas.es;

   this.pages=[
    { title: this.language.configurarIdioma, component: 'ConfigIdiomaPage' }
  ]
  
   console.log("Lenguaje: " + JSON.stringify(this.language));
   this.storage.clear();
   this.storage.set('language', this.language);
  }


  
}
