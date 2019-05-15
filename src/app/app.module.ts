import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { AdminComponent } from './pages/admin/admin.component';
import { LoginComponent } from './pages/login/login.component';
import { ImageCardComponent } from './components/image-card/image-card.component';
import { ItemListComponent } from './components/item-list/item-list.component';
import { ButtonComponent } from './components/button/button.component';
import { SkepsisComponentsmodule } from './components/skepsis.components.module';

@NgModule({
  declarations: [
    AppComponent,
    PortfolioComponent,
    AdminComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SkepsisComponentsmodule
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    PortfolioComponent,
    AdminComponent,
    LoginComponent,
  ]
})
export class AppModule { }
