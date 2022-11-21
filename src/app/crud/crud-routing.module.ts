import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './create/create.component';
import { EmailDetailComponent } from './email-detail/email-detail.component';
import { HomeComponent } from './home/home.component';
import { UpdateComponent } from './update/update.component';

const routes: Routes = [
  { path: 'crud', redirectTo: 'crud/home', pathMatch: 'full' },
  { path: 'crud/email-home', component: HomeComponent },
  { path: 'crud/email-details/:emailId', component: EmailDetailComponent },
  { path: 'crud/email-list/', component: EmailDetailComponent },
  { path: 'crud/email-create', component: CreateComponent },
  { path: 'crud/email-update/:emailId', component: UpdateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudRoutingModule {}
