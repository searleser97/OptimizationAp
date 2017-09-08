"use strict";
var core_1 = require("@angular/core");
var web_view_1 = require("ui/web-view");
var page_1 = require("ui/page");
var router_1 = require("@angular/router");
var ExamplesComponent = (function () {
    function ExamplesComponent(page, route, router) {
        this.page = page;
        this.route = route;
        this.router = router;
    }
    ExamplesComponent.prototype.ngOnInit = function () {
        var nexample;
        this.route.queryParams.subscribe(function (params) {
            nexample = params["example"];
        });
        this.exampleUrl = "https://optimizacinexamples-san1302.rhcloud.com/Ejemplo" + nexample;
        var webview = this.page.getViewById("wv");
        webview.on(web_view_1.WebView.loadStartedEvent, function (args) {
            if (!args.error) {
                if (webview.android) {
                    webview.android.getSettings().setJavaScriptEnabled(true);
                    webview.android.getSettings().setBuiltInZoomControls(false);
                }
            }
            else {
                alert('Oops!, something went wrong!, try again later.');
            }
        });
    };
    return ExamplesComponent;
}());
ExamplesComponent = __decorate([
    core_1.Component({
        selector: "examples",
        templateUrl: "pages/ejemplos/ejemplos.component.html",
        styleUrls: ["pages/ejemplos/ejemplos.component.css"]
    }),
    __metadata("design:paramtypes", [page_1.Page,
        router_1.ActivatedRoute,
        router_1.Router])
], ExamplesComponent);
exports.ExamplesComponent = ExamplesComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWplbXBsb3MuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZWplbXBsb3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxzQ0FBa0Q7QUFDbEQsd0NBQXFEO0FBQ3JELGdDQUErQjtBQUMvQiwwQ0FBeUQ7QUFVekQsSUFBYSxpQkFBaUI7SUFHMUIsMkJBQ1ksSUFBVSxFQUNWLEtBQXFCLEVBQ3JCLE1BQWM7UUFGZCxTQUFJLEdBQUosSUFBSSxDQUFNO1FBQ1YsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtJQUFJLENBQUM7SUFFL0Isb0NBQVEsR0FBUjtRQUNJLElBQUksUUFBZ0IsQ0FBQztRQUNyQixJQUFJLENBQUMsS0FBSyxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNO1lBQ25DLFFBQVEsR0FBRyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDakMsQ0FBQyxDQUFDLENBQUM7UUFDSCxJQUFJLENBQUMsVUFBVSxHQUFHLHlEQUF5RCxHQUFHLFFBQVEsQ0FBQztRQUV2RixJQUFJLE9BQU8sR0FBWSxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBVSxJQUFJLENBQUMsQ0FBQztRQUU1RCxPQUFPLENBQUMsRUFBRSxDQUFDLGtCQUFPLENBQUMsZ0JBQWdCLEVBQUUsVUFBUyxJQUFtQjtZQUM3RCxFQUFFLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNkLEVBQUUsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO29CQUNsQixPQUFPLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLG9CQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO29CQUN6RCxPQUFPLENBQUMsT0FBTyxDQUFDLFdBQVcsRUFBRSxDQUFDLHNCQUFzQixDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNoRSxDQUFDO1lBQ0wsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLEtBQUssQ0FBQyxnREFBZ0QsQ0FBQyxDQUFDO1lBQzVELENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUdQLENBQUM7SUFDTCx3QkFBQztBQUFELENBQUMsQUE5QkQsSUE4QkM7QUE5QlksaUJBQWlCO0lBUjdCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsVUFBVTtRQUNwQixXQUFXLEVBQUUsd0NBQXdDO1FBQ3JELFNBQVMsRUFBRSxDQUFDLHVDQUF1QyxDQUFDO0tBQ3ZELENBQUM7cUNBUW9CLFdBQUk7UUFDSCx1QkFBYztRQUNiLGVBQU07R0FOakIsaUJBQWlCLENBOEI3QjtBQTlCWSw4Q0FBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFdlYlZpZXcsIExvYWRFdmVudERhdGEgfSBmcm9tIFwidWkvd2ViLXZpZXdcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCB7IEFjdGl2YXRlZFJvdXRlLCBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJleGFtcGxlc1wiLFxyXG4gICAgdGVtcGxhdGVVcmw6IFwicGFnZXMvZWplbXBsb3MvZWplbXBsb3MuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wicGFnZXMvZWplbXBsb3MvZWplbXBsb3MuY29tcG9uZW50LmNzc1wiXVxyXG59KVxyXG5cclxuXHJcblxyXG5leHBvcnQgY2xhc3MgRXhhbXBsZXNDb21wb25lbnQge1xyXG4gICAgZXhhbXBsZVVybDogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgcGFnZTogUGFnZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcclxuICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7IH1cclxuXHJcbiAgICBuZ09uSW5pdCgpIHtcclxuICAgICAgICBsZXQgbmV4YW1wbGU6IHN0cmluZztcclxuICAgICAgICB0aGlzLnJvdXRlLnF1ZXJ5UGFyYW1zLnN1YnNjcmliZShwYXJhbXMgPT4ge1xyXG4gICAgICAgICAgICBuZXhhbXBsZSA9IHBhcmFtc1tcImV4YW1wbGVcIl07XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgdGhpcy5leGFtcGxlVXJsID0gXCJodHRwczovL29wdGltaXphY2luZXhhbXBsZXMtc2FuMTMwMi5yaGNsb3VkLmNvbS9FamVtcGxvXCIgKyBuZXhhbXBsZTtcclxuXHJcbiAgICAgICAgbGV0IHdlYnZpZXc6IFdlYlZpZXcgPSB0aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8V2ViVmlldz4oXCJ3dlwiKTtcclxuXHJcbiAgICAgICAgd2Vidmlldy5vbihXZWJWaWV3LmxvYWRTdGFydGVkRXZlbnQsIGZ1bmN0aW9uKGFyZ3M6IExvYWRFdmVudERhdGEpIHtcclxuICAgICAgICAgICAgaWYgKCFhcmdzLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAod2Vidmlldy5hbmRyb2lkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2Vidmlldy5hbmRyb2lkLmdldFNldHRpbmdzKCkuc2V0SmF2YVNjcmlwdEVuYWJsZWQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgd2Vidmlldy5hbmRyb2lkLmdldFNldHRpbmdzKCkuc2V0QnVpbHRJblpvb21Db250cm9scyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgnT29wcyEsIHNvbWV0aGluZyB3ZW50IHdyb25nISwgdHJ5IGFnYWluIGxhdGVyLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgIH1cclxufSJdfQ==