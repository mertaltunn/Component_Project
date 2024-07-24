import { Component, OnInit } from '@angular/core';
import { ComponentService } from 'src/app/services/component.service';
import { ComponentModel } from 'src/app/shared/models/ComponentModel';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit{
  componentM: ComponentModel[] = [];

  constructor(private componentService: ComponentService) {
    this.componentM = componentService.getAll();
  }
  ngOnInit(): void {
    
  }

}
