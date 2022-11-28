import { Component } from "@angular/core";

@Component({
    selector: 'app-pages',
    template: `
        <h2>Page module its works</h2>  
        <router-outlet></router-outlet>
    `,
})
export class PagesComponent { }