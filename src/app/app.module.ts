import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component';
import { MatSliderModule } from '@angular/material/slider';
import { SidebarModule } from 'ng-sidebar';
import { HeaderComponent } from './components/header/header.component';
import { TaskListsComponent } from './components/task-lists/task-lists.component';
import { TaskItemComponent } from './components/task-item/task-item.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AwardsComponent } from './components/awards/awards.component';


@NgModule({
  declarations: [
    AppComponent,
    LeftSidebarComponent,
    HeaderComponent,
    TaskListsComponent,
    TaskItemComponent,
    AwardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    SidebarModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
