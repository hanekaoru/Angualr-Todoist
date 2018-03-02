import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'


import { AppComponent } from './app.component';
import { TodolistComponent } from './components/todolist/todolist.component';

// 引入服务
import { StorageService } from './services/storage.service'


@NgModule({
  declarations: [
    AppComponent,
    TodolistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ StorageService ],
  bootstrap: [AppComponent]
})

export class AppModule { }
