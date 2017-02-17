import { Component } from "@angular/core";
import { RouterExtensions } from "nativescript-angular/router";
import { MapView } from "nativescript-google-maps-sdk";

declare var org: any;

@Component({
    templateUrl: "pages/map.html"
})
export class MapComponent {

    myItems: MyItem[] = [];

    isMapVisible: boolean = false;

    constructor(
        private routerExtensions: RouterExtensions
    ) {
        for (let i = 0; i < 10; i++) {
            this.myItems.push({ id: i });
        }
    }

    onToggleTapped(event) {
        this.isMapVisible = !this.isMapVisible;
    }

    onMapReady(event) {
    }

    onListViewLoaded(event) {
        if (event.object.android) {
            event.object.android.setId(org.nativescript.mapview.R.id.my_list_view);
        }
    }

    onNavigateTapped(event) {
        this.routerExtensions.navigate(["detail"]);
    }

    onItemTapped(event) {
        this.routerExtensions.navigate(["detail"]);
    }
}

class MyItem {
    id: number;
}
