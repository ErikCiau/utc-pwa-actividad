import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { SharedModule } from "../shared/shared.module";
import { NoteListComponent } from "./NoteList/note-list.component";
import { PagesComponent } from "./pages.component";
import { ScannerTodoComponent } from "./ScannerTodo/scanner-todo.component";

@NgModule({
  declarations: [
    PagesComponent,
    NoteListComponent,
    ScannerTodoComponent
  ],
  imports: [
    RouterModule.forChild([
      {
        path: '',
        component: PagesComponent,
        loadChildren: () => import('./pages-rounting.module').then(
          m => m.PagesRoutingModule
        )
      }
    ]),
    SharedModule,
    CommonModule
  ],
})
export class PagesModule { }