import { Injectable } from '@angular/core';
import { ComponentModel } from '../shared/models/ComponentModel';
import { sample_components } from 'src/data';

@Injectable({
  providedIn: 'root',
})
export class ComponentService {
  constructor() {}

  getAll(): ComponentModel[] {
    return sample_components;
  }
}
