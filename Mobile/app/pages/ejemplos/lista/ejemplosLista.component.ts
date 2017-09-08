import { Component } from "@angular/core";

@Component({
    selector: "examples",
    templateUrl: "pages/ejemplos/lista/ejemplosLista.component.html",
    styleUrls: ["pages/ejemplos/lista/ejemplosLista.component.css"]
})



export class ExamplesListComponent {
    public myExamples: string[] = [];

    constructor() {
        for (var i = 1; i <= 11; i++) {
            this.myExamples.push(i.toString())
        }
    }
}