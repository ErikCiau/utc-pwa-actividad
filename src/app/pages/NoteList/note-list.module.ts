import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NoteListComponent } from "./note-list.component";

const routes: Routes = [
    {
        path: '',
        component: NoteListComponent
    }
]

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule]
})
export class NoteListModule {

}