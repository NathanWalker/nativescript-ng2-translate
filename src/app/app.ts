// import 'reflect-metadata';
// import 'rxjs/add/operator/map';

// nativescript
import { NativeScriptModule, platformNativeScriptDynamic } from "nativescript-angular/platform";
import { NativeScriptFormsModule } from "nativescript-angular/forms";
import { NativeScriptHttpModule } from "nativescript-angular/http";

// angular 
import { NgModule, Component } from "@angular/core";

// libs
import { TranslateModule, TranslateLoader, TranslateService } from 'ng2-translate';
import 'rxjs/add/operator/take';

// app
import { TNSTranslateLoader } from 'nativescript-ng2-translate/nativescript-ng2-translate';

@Component({
  selector: 'app',
  template: `
  <StackLayout>
    <SegmentedBar [items]="supportedLanguages" (selectedIndexChanged)="changeLang($event)"></SegmentedBar>
    <Label [text]="'HOME' | translate"></Label>
  </StackLayout>
  `
})
class TestComponent {
  public supportedLanguages: Array<any> = [
    { code: 'en', title: 'English' },
    { code: 'es', title: 'Spanish' }
  ];
  
  constructor(private translate: TranslateService) {
    this.translate.reloadLang('en').take(1).subscribe(() => {
      setTimeout(() => this.translate.use('en'), 0);
    });
  }
  
  public changeLang(e) {
    let lang = this.supportedLanguages[e.newIndex].code;
    this.translate.use(lang);
  }
}

@NgModule({
  imports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    TranslateModule.forRoot({
      provide: TranslateLoader,
      useFactory: () => new TNSTranslateLoader('assets/i18n')
    })
  ],
  exports: [
    NativeScriptModule,
    NativeScriptFormsModule,
    NativeScriptHttpModule,
    TranslateModule
  ]
})
class AppModule { }

function makeBootstrapModule(componentType) {
  let imports: any[] = [AppModule];
  let entries = [];
  if (componentType.entries) {
    entries = componentType.entries;
  }
  entries.push(componentType);
  let providers = [];
  if (componentType.providers) {
    providers = componentType.providers
  }
  @NgModule({
    bootstrap: [componentType],
    imports: imports,
    entryComponents: entries,
    declarations: entries,
    providers: providers,
  })
  class ExampleModuleForComponent { }

  return ExampleModuleForComponent;
}

platformNativeScriptDynamic().bootstrapModule(makeBootstrapModule(TestComponent));

