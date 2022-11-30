import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-toolbar',
    styleUrls: ['./toolbar.component.scss'],
    templateUrl: "./toolbar.component.html",
})
export class ToolbarComponent implements OnInit {
    ngOnInit(): void {
        console.log("on init runned")
    }
}