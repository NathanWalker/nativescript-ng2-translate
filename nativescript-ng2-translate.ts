// for standard export at bottom
import {NSMultilingualLoader} from './src/app/services/nativescript-ng2-translate-loader.service';

// for manual imports
export * from './src/app/services/nativescript-ng2-translate-loader.service';

// provides standard for consumption via things like angular-cli
export default {
  providers: [NSMultilingualLoader]
}
