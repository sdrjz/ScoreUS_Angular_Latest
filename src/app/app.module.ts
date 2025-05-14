import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxMaskModule, IConfig } from 'ngx-mask';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';


import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { NgApexchartsModule } from 'ng-apexcharts';
import { FullCalendarModule } from '@fullcalendar/angular';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import interactionPlugin from '@fullcalendar/interaction';


// export function createTranslateLoader(http:HttpClient){
//   return new TranslateHttpLoader(http,'','.json')l
// }

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  timeGridPlugin,
  listPlugin,
  interactionPlugin
])

import { MetismenuAngularModule } from "@metismenu/angular";
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { PERFECT_SCROLLBAR_CONFIG } from 'ngx-perfect-scrollbar';
import { PerfectScrollbarConfigInterface } from 'ngx-perfect-scrollbar';

import { NgxDropzoneModule } from 'ngx-dropzone';
import { CarouselModule } from 'ngx-owl-carousel-o';





// import { LocationStrategy, HashLocationStrategy } from '@angular/common';



/* #########################  SITE PAGES COMPONENT ###################*/





import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { LockScreenComponent } from './pages/lock-screen/lock-screen.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { Error400Component } from './pages/error400/error400.component';
import { Error403Component } from './pages/error403/error403.component';
import { Error404Component } from './pages/error404/error404.component';
import { Error500Component } from './pages/error500/error500.component';
import { Error503Component } from './pages/error503/error503.component';

import { RequestSentComponent } from './pages/request-sent/request-sent.component';
import { SignupwizardComponent } from './signupwizard/signupwizard.component';
import { WizardcheckmailDialogComponent } from './general/wizardcheckmail-dialog/wizardcheckmail-dialog.component';
import { SignupwizardsteptwoComponent } from './signupwizardsteptwo/signupwizardsteptwo.component';
import { SignupwizardsteptwoDialogComponent } from './general/signupwizardsteptwo-dialog/signupwizardsteptwo-dialog.component';
import { SignupwizardstepthreeComponent } from './signupwizardstepthree/signupwizardstepthree.component';
import { SignupwizardstepfourComponent } from './signupwizardstepfour/signupwizardstepfour.component';
import { SigupwizardthankyouComponent } from './sigupwizardthankyou/sigupwizardthankyou.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { BaseUrlInterceptor } from './interceptors/baseUrl.interceptor';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { AppRoutingModule } from './routing/app-routing.module';
import { SharedModule } from './modules/shared/shared.module';
import { AuthGuard } from './gaurd/auth.guard';
import { ErrorInterceptor } from './interceptors/error.interceptor';
import { NgxUiLoaderHttpModule, NgxUiLoaderModule } from 'ngx-ui-loader';
import { LoaderComponent } from './general/loader/loader.component';
import { KpiDeactivateGuard } from './gaurd/kpi-deactivate.guard';
import { GoogleMapsModule } from '@angular/google-maps';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PoSendreportdialogComponent } from './general/po-sendreportdialog/po-sendreportdialog.component';

export function HttpLoaderFactory(http:HttpClient){
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
  // return new TranslateHttpLoader(http)
}


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    Error400Component,
    Error403Component,
    Error404Component,
    Error500Component,
    Error503Component,
    SignupwizardComponent,
    WizardcheckmailDialogComponent,
    SignupwizardsteptwoComponent,
    SignupwizardsteptwoDialogComponent,
    SignupwizardstepthreeComponent,
    SignupwizardstepfourComponent,
    SigupwizardthankyouComponent,
    ResetPasswordComponent,
    RegisterComponent,
    RequestSentComponent,
    LockScreenComponent,
    LoaderComponent,
    PoSendreportdialogComponent,
    

    
    
    
    
  
  

    
    // currently used
    
    
    


  ],
  exports: [SharedModule],
  imports: [
    BrowserModule,
    TranslateModule.forRoot({
      loader:{
        provide:TranslateLoader,
        useFactory:HttpLoaderFactory,
        // useFactory:(createTranslateLoader),
        deps:[HttpClient],
      },
      // defaultLanguage:''
    }),
    AppRoutingModule,
    BrowserAnimationsModule,
    NgbModule,
    FormsModule,
    
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    ChartsModule,
    NgApexchartsModule,
    // PerfectScrollbarModule,
    GoogleMapsModule,
    NgxUiLoaderHttpModule.forRoot({ showForeground: true }),
    NgxMaskModule.forRoot(),
    
    // AgmCoreModule.forRoot({
    //   apiKey: 'AIzaSyBhwcImn05ayYHMLyTSFO5tD8GdAiefjB8'
    // })
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: BaseUrlInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: MAT_DIALOG_DATA, useValue: {} },
    // AuthGuard,
    KpiDeactivateGuard,
    HttpClient
  ],
  //    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
