"use strict";
var core_1 = require("@angular/core");
var ExamplesListComponent = (function () {
    function ExamplesListComponent() {
        this.myExamples = [];
        for (var i = 1; i <= 11; i++) {
            this.myExamples.push(i.toString());
        }
    }
    return ExamplesListComponent;
}());
ExamplesListComponent = __decorate([
    core_1.Component({
        selector: "examples",
        templateUrl: "pages/ejemplos/lista/ejemplosLista.component.html",
        styleUrls: ["pages/ejemplos/lista/ejemplosLista.component.css"]
    }),
    __metadata("design:paramtypes", [])
], ExamplesListComponent);
exports.ExamplesListComponent = ExamplesListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWplbXBsb3NMaXN0YS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlamVtcGxvc0xpc3RhLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTBDO0FBVTFDLElBQWEscUJBQXFCO0lBRzlCO1FBRk8sZUFBVSxHQUFhLEVBQUUsQ0FBQztRQUc3QixHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQzNCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO1FBQ3RDLENBQUM7SUFDTCxDQUFDO0lBQ0wsNEJBQUM7QUFBRCxDQUFDLEFBUkQsSUFRQztBQVJZLHFCQUFxQjtJQVJqQyxnQkFBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFVBQVU7UUFDcEIsV0FBVyxFQUFFLG1EQUFtRDtRQUNoRSxTQUFTLEVBQUUsQ0FBQyxrREFBa0QsQ0FBQztLQUNsRSxDQUFDOztHQUlXLHFCQUFxQixDQVFqQztBQVJZLHNEQUFxQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5AQ29tcG9uZW50KHtcclxuICAgIHNlbGVjdG9yOiBcImV4YW1wbGVzXCIsXHJcbiAgICB0ZW1wbGF0ZVVybDogXCJwYWdlcy9lamVtcGxvcy9saXN0YS9lamVtcGxvc0xpc3RhLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcInBhZ2VzL2VqZW1wbG9zL2xpc3RhL2VqZW1wbG9zTGlzdGEuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgRXhhbXBsZXNMaXN0Q29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBteUV4YW1wbGVzOiBzdHJpbmdbXSA9IFtdO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDw9IDExOyBpKyspIHtcclxuICAgICAgICAgICAgdGhpcy5teUV4YW1wbGVzLnB1c2goaS50b1N0cmluZygpKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==