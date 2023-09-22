import { StoreModule } from '@ngrx/store';
import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { AuthInterceptor } from './core/interceptors/auth.interceptor';
import { JwtModule } from '@auth0/angular-jwt';
import { ToastrModule } from 'ngx-toastr';

import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ExamplePipe } from './shared/pipes/example.pipe';
import { KdvPipe } from './shared/pipes/kdv.pipe';
import { SearchPostPipe } from './features/post/pipes/search-post.pipe';
import { LoadingComponent } from './shared/components/loading/loading.component';
import { LayoutComponent } from './shared/components/layout/layout.component';
import { InputComponent } from './shared/components/input/input.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { sharedReducers } from './shared/store/shared.reducers';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
@NgModule({
  declarations: [AppComponent], // Bu modül hangi tanımlamaları yapıyor?
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
    CoreModule,
    SharedModule,
    TranslateModule.forRoot({
      defaultLanguage: 'tr',
      useDefaultLang: true,
      loader: {
        provide: TranslateLoader,
        useFactory: (httpClient: HttpClient) => {
          return new TranslateHttpLoader(httpClient, './assets/i18n/', '.json');
        },
        deps: [HttpClient], // dependencies
      },
    }),
    StoreModule.forRoot(sharedReducers),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
  ], // Dış modüllerin import edilmesi.
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ], // DI
  bootstrap: [AppComponent],
  exports: [], // Declarations kısımındakilerden hangileri dışarıya açılacak?
})
export class AppModule {}
