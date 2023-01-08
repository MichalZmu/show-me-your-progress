import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskDetailsComponent } from './components/task-details/task-details.component';
import { MainPageComponent } from './views/main-page/main-page.component';
import { DefaultViewComponent } from './views/default-view/default-view.component';

const routes: Routes = [
    {
        path: '',
        component: DefaultViewComponent,
        children: [
            {
                path: '',
                component: MainPageComponent,
            },
            {
                path: 'task-details',
                component: TaskDetailsComponent,
            },
        ],
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
