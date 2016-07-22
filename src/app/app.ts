import 'reflect-metadata';
import 'rxjs/add/operator/map';

// nativescript
import {nativeScriptBootstrap} from 'nativescript-angular/application';

// angular 
import {Component, provide} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';

// libs
import {TranslateLoader, TranslateService, TranslatePipe} from 'ng2-translate/ng2-translate';

// app
import {TNSTranslateLoader} from 'nativescript-ng2-translate/nativescript-ng2-translate';

@Component({
  selector: 'app',
  template: `
  <StackLayout>
    <SegmentedBar [items]="supportedLanguages" (selectedIndexChanged)="changeLang($event)"></SegmentedBar>
    <Label [text]="'HOME' | translate"></Label>
  </StackLayout>
  `,
  pipes: [TranslatePipe]
})
class TestComponent {
  public supportedLanguages: Array<any> = [
    { code: 'en', title: 'English' },
    { code: 'es', title: 'Spanish' }
  ];
  
  constructor(private translate: TranslateService) {
    
  }
  
  public changeLang(e) {
    let lang = this.supportedLanguages[e.newIndex].code;
    this.translate.use(lang);
  }
}

nativeScriptBootstrap(TestComponent, [
  HTTP_PROVIDERS,
  provide(TranslateLoader, {
    useFactory: () => {
      return new TNSTranslateLoader('assets/i18n');
    }
  }),
  TranslateService
]);

