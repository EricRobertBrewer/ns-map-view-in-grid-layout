import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { MapView } from "nativescript-google-maps-sdk";

@Component({
    templateUrl: "pages/map.html"
})
export class MapComponent {

    myItems: MyItem[] = [];

    constructor(
        private routerExtensions: RouterExtensions
    ) {
        for (let i = 0; i < 10; i++) {
            this.myItems.push({ id: i });
        }
    }

    onMapReady(event) {
        console.log("onMapReady():"+event);
    }

    onNavigateButtonTapped(event) {
        console.log("onNavigateButtonTapped():"+event);
        this.routerExtensions.navigate(["detail"]);
    }
}

class MyItem {
    id: number;
}