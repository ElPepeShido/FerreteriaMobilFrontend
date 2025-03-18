import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CloseSessionPage } from './close-session.page';

const routes: Routes = [
  {
    path: '',
    component: CloseSessionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CloseSessionPageRoutingModule {}
