import {
  it,
  describe,
  expect,
  inject,
  beforeEachProviders
} from '@angular/testing';

import {provide} from '@angular/core';
import {TNSTranslateLoader} from './nativescript-ng2-translate-loader.service';

import {knownFolders} from 'file-system';

class KnownFolders {
  public get currentApp() {
    return {
      getFile: (file: string) => {
        return {
          readText: () => {
            return new Promise((resolve, reject) => {
              resolve("{\"name\":\"test\"}");
            });
          }
        };
      }
    };
  }
}

describe('TNSTranslateLoader', () => {

  beforeEachProviders(() => {
    return [
      provide(knownFolders, {
        useClass: KnownFolders
      }),
      TNSTranslateLoader
    ]
  });

  it('should provide translation', inject([TNSTranslateLoader], (loader:TNSTranslateLoader) => {
    expect(loader.getTranslation('en')).toEqual({});
  }));

});
