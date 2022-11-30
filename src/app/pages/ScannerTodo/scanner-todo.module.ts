import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { ScannerTodoComponent } from "./scanner-todo.component";

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: '',
                component: ScannerTodoComponent
            }
        ])
    ],
    exports: [
        RouterModule
    ]
})
export class ScannerTodoModule { }