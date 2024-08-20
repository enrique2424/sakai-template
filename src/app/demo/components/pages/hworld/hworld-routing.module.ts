import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HworldComponent } from './hworld.component';

// const routes: Routes = [

// ];

@NgModule({
  imports: [RouterModule.forChild([{
    path: '',
    component: HworldComponent
  }])],
  exports: [RouterModule]
})
export class HworldRoutingModule { }
