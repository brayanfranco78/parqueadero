import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
// Components
import {AppComponent} from './app.component';
import {SignInComponent} from './sign-in/sign-in.component';

@NgModule({
  declarations: [AppComponent, SignInComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
