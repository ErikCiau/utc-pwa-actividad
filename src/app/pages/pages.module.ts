import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { PagesComponent } from "./pages.component";

@NgModule({
  declarations: [
    PagesComponent,
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
    ])
  ],
})
export class PagesModule { }