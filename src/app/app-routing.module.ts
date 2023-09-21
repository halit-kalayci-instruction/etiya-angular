import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExampleComponent } from './example/example.component';
import { DemoComponent } from './demo/demo.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { authGuard } from './guards/auth.guard';
import { roleGuard } from './guards/role.guard';
import { PostListComponent } from './post-list/post-list.component';
import { PostDetailComponent } from './post-detail/post-detail.component';

// etiya.com/admin/x
// etiya.com/admin/y
const routes: Routes = [
  {
    path: 'admin',
    component: DemoComponent,
    canActivate: [authGuard],
  }, // Sadece giriş yapmış olma koruması
  {
    path: 'dashboard',
    //component: ExampleComponent,
    canActivate: [authGuard],
    children: [
      { path: '', component: ExampleComponent },
      { path: 'products', component: DemoComponent, pathMatch: 'full' },
    ],
  }, // Giriş yapmış olma ve istediğim rollere sahip olma koruması
  { path: 'login', component: LoginComponent }, // korumasız route
  { path: 'register', component: RegisterComponent },
  { path: '', component: DemoComponent },
  {
    path: 'posts',
    children: [
      { path: 'list', component: PostListComponent },
      { path: 'detail', component: PostDetailComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
