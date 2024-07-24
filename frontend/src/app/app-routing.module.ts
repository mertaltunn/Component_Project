import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentDetailComponent } from './components/partials/component-details/component-details.component';

const routes: Routes = [
  { path: 'component/:id', component: ComponentDetailComponent },
  { path: '', redirectTo: '/component/1', pathMatch: 'full' }  // Default to the first component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
