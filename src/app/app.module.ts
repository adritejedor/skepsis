import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginComponent } from './pages/login/login.component';
import { ImageCardComponent } from './components/image-card/image-card.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ButtonComponent } from './components/button/button.component';
import { SkepsisComponentsmodule } from './components/skepsis.components.module';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SkepsisComponentsmodule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    AdminComponent,
    LoginComponent,
  ]
})
export class AppModule { }
