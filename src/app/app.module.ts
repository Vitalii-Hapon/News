import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MainLayoutComponent } from './Layout/main-layout/main-layout.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { PostPageComponent } from './Pages/post-page/post-page.component';
import { FilterPipe } from './pipes/filter.pipe';
import { PostCardComponent } from './components/post-card/post-card.component';

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponent,
    HomePageComponent,
    PostPageComponent,
    FilterPipe,
    PostCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
