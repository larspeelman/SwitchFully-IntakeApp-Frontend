import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RoutingModule} from './routing/routing.module'
import {CoreModule} from './core/core.module'
import { SharedModule } from './shared/shared.module';
import { AppComponent } from './app.component';
import { FeaturesModule } from './features/features.module';
import { HeaderComponent } from './features/header/header.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor } from './core/authentication/helpers/jwtInterceptor';
import { ErrorInterceptor } from './core/authentication/helpers/errorInterceptor ';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    CoreModule,
    FeaturesModule,
    SharedModule,
    HttpClientModule,

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
