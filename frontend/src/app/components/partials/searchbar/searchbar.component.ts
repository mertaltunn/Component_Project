import { Component, OnInit } from '@angular/core';
import { ComponentModel } from 'src/app/shared/models/ComponentModel';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css'],
})
export class SearchbarComponent implements OnInit {

  componentM:ComponentModel[] = []
 
  ngOnInit(): void {}
}
