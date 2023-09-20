import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { DemoComponent } from './demo/demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { InputComponent } from './input/input.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { LoadingComponent } from './loading/loading.component';
import { JwtModule } from '@auth0/angular-jwt';
import { ToastrModule } from 'ngx-toastr';
import { HighlightDirective } from './directives/highlight.directive';
import { IfNotDirective } from './directives/if-not.directive';
@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    DemoComponent,
    LoginComponent,
    InputComponent,
    RegisterComponent,
    LoadingComponent,
    HighlightDirective,
    IfNotDirective,
  ], // Bu modül hangi tanımlamaları yapıyor?
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: () => {
          return localStorage.getItem('token');
        },
      },
    }),
    ToastrModule.forRoot(),
  ], // Dış modüllerin import edilmesi.
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ], // DI
  bootstrap: [AppComponent],
  exports: [ExampleComponent], // Declarations kısımındakilerden hangileri dışarıya açılacak?
})
export class AppModule {}
