import { Component } from "@angular/core";

@Component({
    selector: 'app-pages',
    template: `
        <app-toolbar></app-toolbar>
        <router-outlet></router-outlet>
    `,
})
export class PagesComponent { }