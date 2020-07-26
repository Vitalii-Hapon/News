import { BrowserModule } from '@angular/platform-browser';
import {NgModule, Provider} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { MainLayoutComponent } from './Layout/main-layout/main-layout.component';
import { HomePageComponent } from './Pages/home-page/home-page.component';
import { PostPageComponent } from './Pages/post-page/post-page.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import { FilterPipe } from './pipes/filter.pipe';
import {AngMaterialsModule} from './ang-materials/ang-materials.module';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import {Interceptor} from './services/interceptor';

const INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useClass: Interceptor,
  multi: true
};

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
    AngMaterialsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent]
})
export class AppModule { }
