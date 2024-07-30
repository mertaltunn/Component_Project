import { Component, Input } from '@angular/core';
import { ComponentModel } from 'src/app/shared/models/ComponentModel';

@Component({
  selector: 'app-component-detail',
  templateUrl: './component-details.component.html',
  styleUrls: ['./component-details.component.css']
})
export class ComponentDetailComponent {
  @Input() component: ComponentModel | null = null;
}