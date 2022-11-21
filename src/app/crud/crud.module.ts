import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoutingModule } from './crud-routing.module';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { UpdateComponent } from './update/update.component';
import { EmailListComponent } from './email-list/email-list.component';
import { EmailDetailComponent } from './email-detail/email-detail.component';

@NgModule({
  declarations: [
    HomeComponent,
    CreateComponent,
    UpdateComponent,
    EmailListComponent,
    EmailDetailComponent,
  ],
  imports: [CommonModule, CrudRoutingModule],
})
export class CrudModule {}
