import {Component} from "@angular/core";

@Component({
    selector: 'main-menu',
    templateUrl: "pages/main_menu/main_menu.component.html",
    styleUrls: ['pages/main_menu/main_menu.component.css']
})

export class MainMenuComponent{
    menuItems:string[][] = [ 
        ["Teoría", "teoria", "my-btn-red "], 
        ["Ejercicios Resueltos", "ejercicios","my-btn-blue "], 
        ["Ejemplos", "ejemplosLista","my-btn-green"]
    ];
}