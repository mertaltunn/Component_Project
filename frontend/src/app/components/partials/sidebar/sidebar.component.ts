import { Component } from '@angular/core';
import { ComponentService } from 'src/app/services/component.service';
import { ComponentModel } from 'src/app/shared/models/ComponentModel';
import { SearchbarComponent } from '../searchbar/searchbar.component';
import { TooltipComponent } from '../tooltip/tooltip.component';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  componentM: ComponentModel[] = [];
  selectedComponent: ComponentModel | null = null;

  constructor(private componentService: ComponentService) {

    // Adding SearchbarComponent details
    const searchbar = new SearchbarComponent();
    const tooltip = new TooltipComponent()
    this.componentM.push(searchbar.component);
    this.componentM.push(tooltip.component);
    
  }

  selectComponent(component: ComponentModel) {
    this.selectedComponent = component;
  }
}
