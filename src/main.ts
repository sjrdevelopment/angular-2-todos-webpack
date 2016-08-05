import {bootstrap}    from '@angular/platform-browser-dynamic'
import {AppComponent} from './app/components/app/app.component'
import { appRouterProviders } from './app/app.routes';

bootstrap(AppComponent, [
  appRouterProviders
]);