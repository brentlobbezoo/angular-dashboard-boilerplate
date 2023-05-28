import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './layout/default/default.component';
import { SecurityComponent } from './layout/security/security.component';
import { RouterModule } from '@angular/router';
import { NotFoundLayoutComponent } from './layout/not-found/not-found-layout.component';



@NgModule({
  declarations: [
    DefaultComponent,
    SecurityComponent,
    NotFoundLayoutComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    DefaultComponent,
    SecurityComponent,
    NotFoundLayoutComponent
  ]
})
export class SharedModule { }
