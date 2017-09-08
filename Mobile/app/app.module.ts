import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { AppRoutingModule } from "./app.routing";
import { AppComponent } from "./app.component";

import { MainMenuComponent } from "./pages/main_menu/main_menu.component";
import { TheoryComponent } from "./pages/teoria/teoria.component";
import { ExamplesListComponent } from "./pages/ejemplos/lista/ejemplosLista.component";
import { ExercisesComponent } from "./pages/ejercicios/ejercicios.component";
import { ExamplesComponent } from "./pages/ejemplos/ejemplos.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        MainMenuComponent,
        TheoryComponent,
        ExamplesListComponent,
        ExercisesComponent,
        ExamplesComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class AppModule { }
