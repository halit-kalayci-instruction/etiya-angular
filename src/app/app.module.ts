import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { DemoComponent } from './demo/demo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { InputComponent } from './input/input.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './register/register.component';
@NgModule({
  declarations: [
    AppComponent,
    ExampleComponent,
    DemoComponent,
    LoginComponent,
    InputComponent,
    RegisterComponent,
  ], // Bu modül hangi tanımlamaları yapıyor?
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ], // Dış modüllerin import edilmesi.
  providers: [], // DI
  bootstrap: [AppComponent],
  exports: [ExampleComponent], // Declarations kısımındakilerden hangileri dışarıya açılacak?
})
export class AppModule {}
