import {
  it,
  describe,
  expect,
  inject,
  beforeEachProviders
} from 'angular2/testing';

import {provide} from 'angular2/core';
import {NSMultilingualLoader} from './nativescript-ng2-translate-loader.service';

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

describe('NSMultilingualLoader', () => {

  beforeEachProviders(() => {
    return [
      provide(knownFolders, {
        useClass: KnownFolders
      }),
      NSMultilingualLoader
    ]
  });

  it('should provide translation', inject([NSMultilingualLoader], (loader:NSMultilingualLoader) => {
    expect(loader.getTranslation('en')).toEqual({});
  }));

});
