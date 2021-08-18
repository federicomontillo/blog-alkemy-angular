import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { SharedModule } from '../shared/shared.module';
import { UserComponent } from './user/user.component';
import { UsersComponent } from './users.component';
import { UsersRoutingModule } from './users.routing.module';

@NgModule({
  declarations: [
    UserComponent,
    UsersComponent,
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    HttpClientModule
  ]
})
export class UsersModule { }
