"use strict";
var core_1 = require("@angular/core");
var ExampleItem = (function () {
    function ExampleItem(name) {
        this.name = name;
    }
    return ExampleItem;
}());
var ExamplesComponent = (function () {
    function ExamplesComponent() {
        this.exampleNames = [];
        for (var i = 0; i < 50; i++) {
            this.exampleNames[this.exampleNames.length] = ("Ejemplo " + i.toString());
        }
        this.myExamples = [];
        for (var i = 0; i < this.exampleNames.length; i++) {
            this.myExamples.push(new ExampleItem(this.exampleNames[i]));
        }
    }
    ExamplesComponent.prototype.onExampleTap = function (args) {
        alert(args.index);
    };
    return ExamplesComponent;
}());
ExamplesComponent = __decorate([
    core_1.Component({
        selector: "examples",
        templateUrl: "pages/ejemplos/ejemplos.component.html",
        styleUrls: ["pages/ejemplos/ejemplos.component.css"],
        changeDetection: core_1.ChangeDetectionStrategy.OnPush
    }),
    __metadata("design:paramtypes", [])
], ExamplesComponent);
exports.ExamplesComponent = ExamplesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWplbXBsb3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZWplbXBsb3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBd0U7QUFFeEU7SUFFSSxxQkFBbUIsSUFBWTtRQUFaLFNBQUksR0FBSixJQUFJLENBQVE7SUFBRSxDQUFDO0lBQ3RDLGtCQUFDO0FBQUQsQ0FBQyxBQUhELElBR0M7QUFXRCxJQUFhLGlCQUFpQjtJQUsxQjtRQUVJLElBQUksQ0FBQyxZQUFZLEdBQUcsRUFBRSxDQUFDO1FBQ3ZCLEdBQUcsQ0FBQSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUMsRUFBRSxFQUFDLENBQUMsRUFBRSxFQUN2QixDQUFDO1lBQ0csSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQzlFLENBQUM7UUFDRCxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUNyQixHQUFHLENBQUEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUM5QyxDQUFDO1lBQ0csSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxXQUFXLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEUsQ0FBQztJQUNMLENBQUM7SUFFTSx3Q0FBWSxHQUFuQixVQUFvQixJQUFJO1FBRXBCLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDdEIsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0FBQyxBQXZCRCxJQXVCQztBQXZCWSxpQkFBaUI7SUFUN0IsZ0JBQVMsQ0FBQztRQUNQLFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFdBQVcsRUFBRSx3Q0FBd0M7UUFDckQsU0FBUyxFQUFFLENBQUMsdUNBQXVDLENBQUM7UUFDcEQsZUFBZSxFQUFFLDhCQUF1QixDQUFDLE1BQU07S0FDbEQsQ0FBQzs7R0FJVyxpQkFBaUIsQ0F1QjdCO0FBdkJZLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q29tcG9uZW50LCBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSwgSW5wdXR9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcblxyXG5jbGFzcyBFeGFtcGxlSXRlbVxyXG57XHJcbiAgICBjb25zdHJ1Y3RvcihwdWJsaWMgbmFtZTogc3RyaW5nKXt9XHJcbn1cclxuXHJcbkBDb21wb25lbnQoe1xyXG4gICAgc2VsZWN0b3I6IFwiZXhhbXBsZXNcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcInBhZ2VzL2VqZW1wbG9zL2VqZW1wbG9zLmNvbXBvbmVudC5odG1sXCIsXHJcbiAgICBzdHlsZVVybHM6IFtcInBhZ2VzL2VqZW1wbG9zL2VqZW1wbG9zLmNvbXBvbmVudC5jc3NcIl0sXHJcbiAgICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaFxyXG59KVxyXG5cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgRXhhbXBsZXNDb21wb25lbnRcclxue1xyXG4gICAgcHVibGljIG15RXhhbXBsZXM6IEFycmF5PEV4YW1wbGVJdGVtPjtcclxuICAgIHByaXZhdGUgZXhhbXBsZU5hbWVzOiBzdHJpbmdbXTtcclxuICAgXHJcbiAgICBjb25zdHJ1Y3RvcigpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5leGFtcGxlTmFtZXMgPSBbXTtcclxuICAgICAgICBmb3IodmFyIGkgPSAwOyBpPDUwO2krKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuZXhhbXBsZU5hbWVzW3RoaXMuZXhhbXBsZU5hbWVzLmxlbmd0aF0gPSAoXCJFamVtcGxvIFwiICsgaS50b1N0cmluZygpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5teUV4YW1wbGVzID0gW107XHJcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaTx0aGlzLmV4YW1wbGVOYW1lcy5sZW5ndGg7IGkrKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMubXlFeGFtcGxlcy5wdXNoKG5ldyBFeGFtcGxlSXRlbSh0aGlzLmV4YW1wbGVOYW1lc1tpXSkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIFxyXG4gICAgcHVibGljIG9uRXhhbXBsZVRhcChhcmdzKVxyXG4gICAge1xyXG4gICAgICAgIGFsZXJ0KGFyZ3MuaW5kZXgpO1xyXG4gICAgfVxyXG59Il19