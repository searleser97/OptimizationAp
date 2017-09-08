import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { MainMenuComponent } from "./pages/main_menu/main_menu.component";
import { TheoryComponent } from "./pages/teoria/teoria.component";
import { ExamplesListComponent } from "./pages/ejemplos/lista/ejemplosLista.component";
import { ExercisesComponent } from "./pages/ejercicios/ejercicios.component";
import { ExamplesComponent } from "./pages/ejemplos/ejemplos.component";

const routes: Routes = [
    { path: "", redirectTo: "/main_menu", pathMatch: "full" },
    { path: "main_menu", component: MainMenuComponent },
    { path: "ejemplosLista", component: ExamplesListComponent },
    { path: "ejercicios", component: ExercisesComponent },
    { path: "teoria", component: TheoryComponent },
    { path: "ejemplos", component: ExamplesComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }