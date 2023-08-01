import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { TokenInterceptor } from './core/interceptors/token.interceptor';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule } from '@angular/common';
// import Swal from 'sweetalert2'
import { ToastrModule } from 'ngx-toastr';
import { MatInputModule } from '@angular/material/input';
import { MatFormField, MatFormFieldModule } from '@angular/material/form-field';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    // NoopAnimationsModule
    CommonModule,
    ToastrModule.forRoot({
      positionClass :'toast-top-right'
    }),



    // NgbModule.forRoot()
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
  ],

  providers: [
    //TokenInterceptor,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,
    }
  ],

  bootstrap: [AppComponent],

})
export class AppModule {

}
