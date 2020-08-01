import { NgModule } from '@angular/core';
import {Routes, RouterModule, NoPreloading, PreloadAllModules} from '@angular/router';
import {MainLayoutComponent} from './layout/main-layout/main-layout.component';
import {HomePageComponent} from './pages/home-page/home-page.component';
import {PostPageComponent} from './pages/post-page/post-page.component';

const routes: Routes = [
  {
    path: '',
    component: MainLayoutComponent,
    children: [
      {path: '', redirectTo: '/', pathMatch: 'full'},
      {path: '', component: HomePageComponent},
      {path: ':title', component: PostPageComponent},
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
