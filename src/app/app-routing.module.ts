import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlexpropertyComponent } from './flexproperty/flexproperty.component';


const routes: Routes = [
  {path:'', component: FlexpropertyComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
