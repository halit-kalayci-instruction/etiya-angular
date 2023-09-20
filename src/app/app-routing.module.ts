import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { DemoComponent } from './demo/demo.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { authGuard } from './guards/auth.guard';
import { roleGuard } from './guards/role.guard';

// etiya.com/admin/x
// etiya.com/admin/y
// 11:00
const routes: Routes = [
  {
    path: 'admin',
    component: DemoComponent,
    canActivate: [authGuard],
  }, // Sadece giriş yapmış olma koruması
  {
    path: 'dashboard',
    component: ExampleComponent,
    canActivate: [authGuard, roleGuard],
    data: { roles: ['admin', 'moderator'] },
  }, // Giriş yapmış olma ve istediğim rollere sahip olma koruması
  { path: 'login', component: LoginComponent }, // korumasız route
  { path: 'register', component: RegisterComponent },
  { path: '', component: DemoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
