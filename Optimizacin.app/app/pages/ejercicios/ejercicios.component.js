"use strict";
var fs = require("file-system");
var core_1 = require("@angular/core");
var ExercisesComponent = (function () {
    function ExercisesComponent() {
        this.pdfSrc = "";
        var currentAppFolder = fs.knownFolders.currentApp();
        this.pdfSrc = currentAppFolder.path + "/appFiles/ejemplosOptimizacion.pdf";
        // this.pdfSrc = "https://www.princexml.com/samples/invoice/invoicesample.pdf";
    }
    return ExercisesComponent;
}());
ExercisesComponent = __decorate([
    core_1.Component({
        selector: "exercises",
        templateUrl: "pages/ejercicios/ejercicios.component.html",
        styleUrls: ["pages/ejercicios/ejercicios.component.css"]
    }),
    __metadata("design:paramtypes", [])
], ExercisesComponent);
exports.ExercisesComponent = ExercisesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWplcmNpY2lvcy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlamVyY2ljaW9zLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsZ0NBQWtDO0FBQ2xDLHNDQUF3QztBQVF4QyxJQUFhLGtCQUFrQjtJQUczQjtRQURBLFdBQU0sR0FBRyxFQUFFLENBQUM7UUFFUixJQUFJLGdCQUFnQixHQUFHLEVBQUUsQ0FBQyxZQUFZLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDcEQsSUFBSSxDQUFDLE1BQU0sR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLEdBQUcsb0NBQW9DLENBQUM7UUFDM0UsK0VBQStFO0lBQ25GLENBQUM7SUFDTCx5QkFBQztBQUFELENBQUMsQUFSRCxJQVFDO0FBUlksa0JBQWtCO0lBTjlCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsV0FBVztRQUNyQixXQUFXLEVBQUUsNENBQTRDO1FBQ3pELFNBQVMsRUFBRSxDQUFDLDJDQUEyQyxDQUFDO0tBQzNELENBQUM7O0dBRVcsa0JBQWtCLENBUTlCO0FBUlksZ0RBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgZnMgZnJvbSBcImZpbGUtc3lzdGVtXCI7XHJcbmltcG9ydCB7Q29tcG9uZW50fSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJleGVyY2lzZXNcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2VqZXJjaWNpb3MvZWplcmNpY2lvcy5jb21wb25lbnQuaHRtbFwiLFxyXG4gICAgc3R5bGVVcmxzOiBbXCJwYWdlcy9lamVyY2ljaW9zL2VqZXJjaWNpb3MuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5cclxuZXhwb3J0IGNsYXNzIEV4ZXJjaXNlc0NvbXBvbmVudFxyXG57XHJcbiAgICBwZGZTcmMgPSBcIlwiO1xyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yICgpIHtcclxuICAgICAgICBsZXQgY3VycmVudEFwcEZvbGRlciA9IGZzLmtub3duRm9sZGVycy5jdXJyZW50QXBwKCk7XHJcbiAgICAgICAgdGhpcy5wZGZTcmMgPSBjdXJyZW50QXBwRm9sZGVyLnBhdGggKyBcIi9hcHBGaWxlcy9lamVtcGxvc09wdGltaXphY2lvbi5wZGZcIjtcclxuICAgICAgICAvLyB0aGlzLnBkZlNyYyA9IFwiaHR0cHM6Ly93d3cucHJpbmNleG1sLmNvbS9zYW1wbGVzL2ludm9pY2UvaW52b2ljZXNhbXBsZS5wZGZcIjtcclxuICAgIH1cclxufSJdfQ==