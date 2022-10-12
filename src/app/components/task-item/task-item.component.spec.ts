import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { TaskItemComponent } from './task-item.component'
import { TaskItemModel } from '../../interfaces/task-item.model'
import { TaskDetailsComponent } from '../task-details/task-details.component'
import { Router } from '@angular/router'
import { RouterTestingModule } from '@angular/router/testing'

describe('TaskItemComponent', () => {
    let component: TaskItemComponent
    let fixture: ComponentFixture<TaskItemComponent>
    let router: Router

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [TaskDetailsComponent],
            imports: [RouterTestingModule],
        }).compileComponents()
    }))

    beforeEach(() => {
        router = TestBed.inject(Router)
        spyOn(router, 'navigate').and.returnValue(Promise.resolve(true))
        fixture = TestBed.createComponent(TaskItemComponent)
        component = fixture.componentInstance
        fixture.detectChanges()
        router.initialNavigation()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })

    it('goToTaskDetails test', () => {
        const taskDetailsMock: TaskItemModel = {
            id: 1,
            name: 'test',
            description: 'test',
            taskCompletionLevel: 10,
        }
        component.task = taskDetailsMock
        component.goToTaskDetails()
        expect(router.navigate).toHaveBeenCalledWith(['/task-details'], {
            queryParams: { taskId: taskDetailsMock.id },
        })
    })
})
