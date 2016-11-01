[![Angular 2 Style Guide](https://mgechev.github.io/angular2-style-guide/images/badge.svg)](https://github.com/mgechev/angular2-style-guide)
[![MIT license](http://img.shields.io/badge/license-MIT-brightgreen.svg)](http://opensource.org/licenses/MIT)
[![Dependency Status](https://david-dm.org/preboot/angular2-library-seed/status.svg)](https://david-dm.org/preboot/angular2-library-seed#info=dependencies) [![devDependency Status](https://david-dm.org/preboot/angular2-library-seed/dev-status.svg)](https://david-dm.org/preboot/angular2-webpack#info=devDependencies)

## NOTE

This plugin is no longer needed to make [ng2-translate](https://github.com/ocombe/ng2-translate) work with NativeScript. Instead you can use it as normal following this as a guide to set it up:

https://github.com/NathanWalker/nativescript-ng2-translate/issues/5#issuecomment-257606661


* [Install](#install)
* [Usage](#usage)
* [Why the `TNS` prefixed name?](#why-the-tns-prefixed-name)
* [Accolades](#accolades)

## Install

```
npm install nativescript-ng2-translate --save
```

## Usage

#### 1. Add locale translation files

You can create these anywhere in your app but let's say you create an `assets` folder and in that an `i18n` folder so:

* `app/assets/i18n` folder

Then in there, create translation files, for example:

* `en.json` (English):
```
{
  "HOME": "Home"
}
```

* `es.json` (Spanish):
```
{
  "HOME": "Casa"
}
```

#### 2. Setup NativeScript/Angular

* `app.ts`:

```
import {nativeScriptBootstrap} from 'nativescript-angular/application';

// angular 
import {Component, provide} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';

// libs
import {TranslateLoader, TranslateService, TranslatePipe} from 'ng2-translate/ng2-translate';
import {TNSTranslateLoader} from 'nativescript-ng2-translate/nativescript-ng2-translate';

@Component({
  selector: 'app',
  template: `
  <StackLayout>
    <Label [text]="'HOME' | translate"></Label>
  </StackLayout>
  `,
  pipes: [TranslatePipe]
})
class TestComponent {}

nativeScriptBootstrap(TestComponent, [
  HTTP_PROVIDERS,
  provide(TranslateLoader, {
    useFactory: () => {
      // pass in the path to your locale files
      return new TNSTranslateLoader('assets/i18n');
    }
  }),
  TranslateService
]);
```

## Why the TNS prefixed name?

`TNS` stands for **T**elerik **N**ative**S**cript

iOS uses classes prefixed with `NS` (stemming from the [NeXTSTEP](https://en.wikipedia.org/wiki/NeXTSTEP) days of old):
https://developer.apple.com/library/mac/documentation/Cocoa/Reference/Foundation/Classes/NSString_Class/

To avoid confusion with iOS native classes, `TNS` is used instead.

## Accolades

* Project using this library [angular2-seed-advanced](https://github.com/NathanWalker/angular2-seed-advanced)
* [Olivier Combe's ng2-translate library](https://github.com/ocombe/ng2-translate)

# License

[MIT](/LICENSE)
