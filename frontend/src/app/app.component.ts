import { Component, ViewChild } from '@angular/core';
import { ComponentModel } from './shared/models/ComponentModel';
import { SidebarComponent } from './components/partials/sidebar/sidebar.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild(SidebarComponent) sidebar!: SidebarComponent;

  get selectedComponent(): ComponentModel | null {
    return this.sidebar ? this.sidebar.selectedComponent : null;
  }
}
