import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { DemoComponent } from './demo/demo.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

// etiya.com/admin/x
// etiya.com/admin/y

const routes: Routes = [
  { path: 'dashboard', component: ExampleComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', component: DemoComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
