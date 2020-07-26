import { NgModule } from '@angular/core';
import {Routes, RouterModule, NoPreloading, PreloadAllModules} from '@angular/router';
import {MainLayoutComponent} from './Layout/main-layout/main-layout.component';
import {HomePageComponent} from './Pages/home-page/home-page.component';
import {PostPageComponent} from './Pages/post-page/post-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: HomePageComponent},
      {path: ':index', component: PostPageComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadAllModules,
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
