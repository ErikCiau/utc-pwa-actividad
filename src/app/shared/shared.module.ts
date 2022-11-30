import { NgModule } from "@angular/core";
// Material modules
import { MatToolbarModule } from '@angular/material/toolbar'
import { MatIconModule } from '@angular/material/icon'
import { MatButtonModule } from '@angular/material/button'
import { MatCardModule } from '@angular/material/card'
// custom components
import { ToolbarComponent } from "./components/toolbar/toolbar.component";
import { CardComponent } from "./components/card/card.component";
import { RouterModule } from "@angular/router";

@NgModule({
    declarations: [
        ToolbarComponent,
        CardComponent,
    ],
    imports: [
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatCardModule,
        RouterModule
    ],
    exports: [
        ToolbarComponent,
        CardComponent
    ]
})
export class SharedModule { }