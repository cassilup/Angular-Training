import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';
import { MessageListComponent } from './components/message-list/message-list.component';
import { NewMessageComponent } from './components/new-message/new-message.component';
import { ChatService } from './shared/chat.service';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewMessageAdvancedComponent } from './components/new-message-advanced/new-message-advanced.component';

@NgModule({
  declarations: [
    AppComponent,
    MessageListComponent,
    NewMessageComponent,
    HomeComponent,
    LoginComponent,
    NewMessageAdvancedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: 'homepage',
        component: HomeComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: '',
        redirectTo: '/login',
        pathMatch: 'full'
      },
      {
        path: '**',
        redirectTo: '/login'
      },
    ])
  ],
  providers: [
    ChatService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
