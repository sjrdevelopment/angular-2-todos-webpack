import { provideRouter, RouterConfig }  from '@angular/router';
import {OtherViewComponent} from './components/other-view/other-view.component'
import {MainView} from './components/main-view/main-view.component'

const routes: RouterConfig = [
  {
    path: 'otherView',
    component: OtherViewComponent
  },

  {
  	path: 'mainView',
  	component: MainView
  },

  {
  	path: '',
	redirectTo: '/mainView',
	pathMatch: 'full'
  }
];

export const appRouterProviders = [
  provideRouter(routes)
];