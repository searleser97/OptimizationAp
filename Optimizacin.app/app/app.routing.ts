import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";

import { MainMenuComponent } from "./pages/main_menu/main_menu.component";
import { TheoryComponent } from "./pages/teoria/teoria.component";
import { ExamplesComponent } from "./pages/ejemplos/ejemplos.component";
import { ExercisesComponent } from "./pages/ejercicios/ejercicios.component";

const routes: Routes = [
    { path: "", redirectTo: "/main_menu", pathMatch: "full" },
    { path: "main_menu", component: MainMenuComponent },
    { path: "ejemplos", component: ExamplesComponent },
    { path: "ejercicios", component: ExercisesComponent },
    { path: "teoria", component: TheoryComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }