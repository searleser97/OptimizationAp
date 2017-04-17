"use strict";
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var main_menu_component_1 = require("./pages/main_menu/main_menu.component");
var teoria_component_1 = require("./pages/teoria/teoria.component");
var ejemplos_component_1 = require("./pages/ejemplos/ejemplos.component");
var ejercicios_component_1 = require("./pages/ejercicios/ejercicios.component");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        bootstrap: [
            app_component_1.AppComponent
        ],
        imports: [
            nativescript_module_1.NativeScriptModule,
            app_routing_1.AppRoutingModule
        ],
        declarations: [
            app_component_1.AppComponent,
            main_menu_component_1.MainMenuComponent,
            teoria_component_1.TheoryComponent,
            ejemplos_component_1.ExamplesComponent,
            ejercicios_component_1.ExercisesComponent
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEyRDtBQUMzRCxnRkFBOEU7QUFDOUUsNkNBQWlEO0FBQ2pELGlEQUErQztBQUUvQyw2RUFBMEU7QUFDMUUsb0VBQWtFO0FBQ2xFLDBFQUF3RTtBQUN4RSxnRkFBNkU7QUFxQjdFLElBQWEsU0FBUztJQUF0QjtJQUF5QixDQUFDO0lBQUQsZ0JBQUM7QUFBRCxDQUFDLEFBQTFCLElBQTBCO0FBQWIsU0FBUztJQW5CckIsZUFBUSxDQUFDO1FBQ04sU0FBUyxFQUFFO1lBQ1AsNEJBQVk7U0FDZjtRQUNELE9BQU8sRUFBRTtZQUNMLHdDQUFrQjtZQUNsQiw4QkFBZ0I7U0FDbkI7UUFDRCxZQUFZLEVBQUU7WUFDViw0QkFBWTtZQUNaLHVDQUFpQjtZQUNqQixrQ0FBZTtZQUNmLHNDQUFpQjtZQUNqQix5Q0FBa0I7U0FDckI7UUFDRCxPQUFPLEVBQUU7WUFDTCx1QkFBZ0I7U0FDbkI7S0FDSixDQUFDO0dBQ1csU0FBUyxDQUFJO0FBQWIsOEJBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvbmF0aXZlc2NyaXB0Lm1vZHVsZVwiO1xuaW1wb3J0IHsgQXBwUm91dGluZ01vZHVsZSB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5cbmltcG9ydCB7IE1haW5NZW51Q29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvbWFpbl9tZW51L21haW5fbWVudS5jb21wb25lbnRcIjtcbmltcG9ydCB7IFRoZW9yeUNvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL3Rlb3JpYS90ZW9yaWEuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBFeGFtcGxlc0NvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2VqZW1wbG9zL2VqZW1wbG9zLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgRXhlcmNpc2VzQ29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvZWplcmNpY2lvcy9lamVyY2ljaW9zLmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBNYWluTWVudUNvbXBvbmVudCxcbiAgICAgICAgVGhlb3J5Q29tcG9uZW50LFxuICAgICAgICBFeGFtcGxlc0NvbXBvbmVudCxcbiAgICAgICAgRXhlcmNpc2VzQ29tcG9uZW50XG4gICAgXSxcbiAgICBzY2hlbWFzOiBbXG4gICAgICAgIE5PX0VSUk9SU19TQ0hFTUFcbiAgICBdXG59KVxuZXhwb3J0IGNsYXNzIEFwcE1vZHVsZSB7IH1cbiJdfQ==