import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// etiya.com/admin/x
// etiya.com/admin/y
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
