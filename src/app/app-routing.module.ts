import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ItemsComponent } from './items/items.component';
import { ChartComponent } from './chart/chart.component';

const routes: Routes = [ 
  {path: '', component: ItemsComponent},
  {path: 'items',component: ItemsComponent},
  {path: 'chart', component:ChartComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  
 }
