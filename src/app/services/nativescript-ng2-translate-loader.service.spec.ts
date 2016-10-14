import {
  inject
} from '@angular/core/testing';
import {TestComponentBuilder, TestBed} from '@angular/core/testing';

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
 
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        {
          provide: knownFolders, useClass: KnownFolders
        },
        TNSTranslateLoader
      ]
    });
  });

  it('should provide translation', inject([TNSTranslateLoader], (loader:TNSTranslateLoader) => {
    expect(loader.getTranslation('en')).toEqual({});
  }));

});
