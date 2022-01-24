import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ServerComponent } from './practice/server/server.component';
// import { ServersComponent } from './practice/servers/servers.component';
// import { WarningAlertComponent } from './practice/warning-alert/warning-alert.component';
// import { SuccessAlertComponent } from './practice/success-alert/success-alert.component';
// import { BindingPracticeComponent } from './practice/binding-practice/binding-practice.component';
// import { BindingPractice2Component } from './practice/binding-practice2/binding-practice2.component';

@NgModule({
  declarations: [
    AppComponent,
    // ServerComponent,
    // ServersComponent,
    // WarningAlertComponent,
    // SuccessAlertComponent,
    // BindingPracticeComponent,
    // BindingPractice2Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
