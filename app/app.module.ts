import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { AppComponent } from "./app.component";
import { MapComponent } from "./pages/map.component";
import { DetailComponent } from "./pages/detail.component";

@NgModule({
    declarations: [
        AppComponent,
        MapComponent,
        DetailComponent
    ],
    bootstrap: [AppComponent],
    imports: [
        NativeScriptModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot([
            { path: "", component: MapComponent },
            { path: "detail", component: DetailComponent }
        ])
    ],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {}
