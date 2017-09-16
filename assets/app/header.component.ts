import { Component } from "@angular/core";

@Component({
    selector: 'app-header',
    template: `
        <header class="row">
            <nav class="col-md-8 col-md-offset-2">
                <ul class="nav nav-pills">
                    <li><a routerLinkActive="active" [routerLink]="['/messages']" >Messenger</a></li>
                    <li><a routerLinkActive="active" [routerLink]="['/auth']">Authentication</a></li>
                </ul>
            </nav>
        </header>
    `
})
export class HeaderComponent {

}