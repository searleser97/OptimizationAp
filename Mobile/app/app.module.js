"use strict";
var core_1 = require("@angular/core");
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var main_menu_component_1 = require("./pages/main_menu/main_menu.component");
var teoria_component_1 = require("./pages/teoria/teoria.component");
var ejemplosLista_component_1 = require("./pages/ejemplos/lista/ejemplosLista.component");
var ejercicios_component_1 = require("./pages/ejercicios/ejercicios.component");
var ejemplos_component_1 = require("./pages/ejemplos/ejemplos.component");
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
            ejemplosLista_component_1.ExamplesListComponent,
            ejercicios_component_1.ExercisesComponent,
            ejemplos_component_1.ExamplesComponent
        ],
        schemas: [
            core_1.NO_ERRORS_SCHEMA
        ]
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUEyRDtBQUMzRCxnRkFBOEU7QUFDOUUsNkNBQWlEO0FBQ2pELGlEQUErQztBQUUvQyw2RUFBMEU7QUFDMUUsb0VBQWtFO0FBQ2xFLDBGQUF1RjtBQUN2RixnRkFBNkU7QUFDN0UsMEVBQXdFO0FBc0J4RSxJQUFhLFNBQVM7SUFBdEI7SUFBeUIsQ0FBQztJQUFELGdCQUFDO0FBQUQsQ0FBQyxBQUExQixJQUEwQjtBQUFiLFNBQVM7SUFwQnJCLGVBQVEsQ0FBQztRQUNOLFNBQVMsRUFBRTtZQUNQLDRCQUFZO1NBQ2Y7UUFDRCxPQUFPLEVBQUU7WUFDTCx3Q0FBa0I7WUFDbEIsOEJBQWdCO1NBQ25CO1FBQ0QsWUFBWSxFQUFFO1lBQ1YsNEJBQVk7WUFDWix1Q0FBaUI7WUFDakIsa0NBQWU7WUFDZiwrQ0FBcUI7WUFDckIseUNBQWtCO1lBQ2xCLHNDQUFpQjtTQUNwQjtRQUNELE9BQU8sRUFBRTtZQUNMLHVCQUFnQjtTQUNuQjtLQUNKLENBQUM7R0FDVyxTQUFTLENBQUk7QUFBYiw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBBcHBSb3V0aW5nTW9kdWxlIH0gZnJvbSBcIi4vYXBwLnJvdXRpbmdcIjtcbmltcG9ydCB7IEFwcENvbXBvbmVudCB9IGZyb20gXCIuL2FwcC5jb21wb25lbnRcIjtcblxuaW1wb3J0IHsgTWFpbk1lbnVDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9tYWluX21lbnUvbWFpbl9tZW51LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgVGhlb3J5Q29tcG9uZW50IH0gZnJvbSBcIi4vcGFnZXMvdGVvcmlhL3Rlb3JpYS5jb21wb25lbnRcIjtcbmltcG9ydCB7IEV4YW1wbGVzTGlzdENvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2VqZW1wbG9zL2xpc3RhL2VqZW1wbG9zTGlzdGEuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBFeGVyY2lzZXNDb21wb25lbnQgfSBmcm9tIFwiLi9wYWdlcy9lamVyY2ljaW9zL2VqZXJjaWNpb3MuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBFeGFtcGxlc0NvbXBvbmVudCB9IGZyb20gXCIuL3BhZ2VzL2VqZW1wbG9zL2VqZW1wbG9zLmNvbXBvbmVudFwiO1xuXG5ATmdNb2R1bGUoe1xuICAgIGJvb3RzdHJhcDogW1xuICAgICAgICBBcHBDb21wb25lbnRcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBBcHBSb3V0aW5nTW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgICAgICBNYWluTWVudUNvbXBvbmVudCxcbiAgICAgICAgVGhlb3J5Q29tcG9uZW50LFxuICAgICAgICBFeGFtcGxlc0xpc3RDb21wb25lbnQsXG4gICAgICAgIEV4ZXJjaXNlc0NvbXBvbmVudCxcbiAgICAgICAgRXhhbXBsZXNDb21wb25lbnRcbiAgICBdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHsgfVxuIl19