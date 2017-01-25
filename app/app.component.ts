import { Component, OnInit } from "@angular/core";
import * as application from "application";
import {registerElement} from "nativescript-angular/element-registry";
import { MapView } from "nativescript-google-maps-sdk";

// Important - must register MapView plugin in order to use in Angular templates
registerElement("MapView", () => MapView);

declare var GMSServices: any;

@Component({
    selector: "app",
    template: "<page-router-outlet></page-router-outlet>",
})
export class AppComponent implements OnInit {

    ngOnInit() {
        // Also see App_Resources/Android/values/nativescript-google-maps-api.xml
        if (application.ios) {
            GMSServices.provideAPIKey("AIzaSyCM2qDN-vQQuNF9F409MdQYN_lLU0bTims");
        }
    }
}
