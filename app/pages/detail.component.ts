import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";

@Component({
    templateUrl: "pages/detail.html"
})
export class DetailComponent {

    constructor(
        private routerExtensions: RouterExtensions
    ) {
    }

    /**
     * Only triggers on Android.
     */
    onNavigationButtonTapped(event) {
        this.routerExtensions.back();
    }
}
