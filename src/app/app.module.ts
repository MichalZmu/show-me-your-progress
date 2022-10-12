import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { HttpClientModule } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { LeftSidebarComponent } from './left-sidebar/left-sidebar.component'
import { MatSliderModule } from '@angular/material/slider'
import { SidebarModule } from 'ng-sidebar'
import { HeaderComponent } from './components/header/header.component'
import { TaskListsComponent } from './components/task-lists/task-lists.component'
import { TaskItemComponent } from './components/task-item/task-item.component'
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'
import { AwardsComponent } from './components/awards/awards.component'
import { AwardsListComponent } from './components/awards-list/awards-list.component'
import { AwardItemComponent } from './components/award-item/award-item.component'
import { AddTaskModalComponent } from './components/add-task-modal/add-task-modal.component'
import { FormsModule } from '@angular/forms'
import { TaskDetailsComponent } from './components/task-details/task-details.component'
import { MainPageComponent } from './views/main-page/main-page.component'
import { DefaultViewComponent } from './views/default-view/default-view.component'
import { NgxSpinnerModule } from 'ngx-spinner'
import { StoreModule } from '@ngrx/store'
import { TasksReducer } from './states/tasks/tasks.reducer'
import { NgrxFormsModule } from 'ngrx-forms'

@NgModule({
    declarations: [
        AppComponent,
        LeftSidebarComponent,
        HeaderComponent,
        TaskListsComponent,
        TaskItemComponent,
        AwardsComponent,
        AwardsListComponent,
        AwardItemComponent,
        AddTaskModalComponent,
        TaskDetailsComponent,
        MainPageComponent,
        DefaultViewComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        MatSliderModule,
        SidebarModule,
        NgbModule,
        FormsModule,
        NgxSpinnerModule,
        StoreModule.forRoot({ tasks: TasksReducer }),
        NgrxFormsModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
