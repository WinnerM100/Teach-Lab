import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { LoggedInComponent } from './logged-in.component';

const routes: Routes = [
  {
    path: '', component: LoggedInComponent,
    children:[
      {
        path:'user'
      },
      {
        path: 'admin'
      }
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class LoggedInRoutingModule { }
