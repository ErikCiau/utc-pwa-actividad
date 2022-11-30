import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./NoteList/note-list.module')
      .then(
        m => m.NoteListModule
      )
  },
  {
    path: 'scanner',
    loadChildren: () => import('./ScannerTodo/scanner-todo.module')
      .then(
        m => m.ScannerTodoModule
      )
  }
]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class PagesRoutingModule {

}