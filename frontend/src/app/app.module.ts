import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SidebarComponent } from './components/partials/sidebar/sidebar.component';
import { HomeComponent } from './components/pages/home/home.component';
import { SearchbarComponent } from './components/partials/searchbar/searchbar.component';
import { ComponentDetailComponent } from './components/partials/component-details/component-details.component';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './components/partials/modal/modal.component';
import { TooltipComponent } from './components/partials/tooltip/tooltip.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    SearchbarComponent,
    HomeComponent,
    SearchbarComponent,
    ComponentDetailComponent,
    ModalComponent,
    TooltipComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }