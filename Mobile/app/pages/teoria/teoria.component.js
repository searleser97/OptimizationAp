"use strict";
var core_1 = require("@angular/core");
var web_view_1 = require("ui/web-view");
var page_1 = require("ui/page");
var fs = require("file-system");
var TheoryComponent = (function () {
    function TheoryComponent(page) {
        this.page = page;
    }
    TheoryComponent.prototype.ngOnInit = function () {
        var currentAppFolder = fs.knownFolders.currentApp();
        this.webViewSrc = currentAppFolder.path + "/pages/teoria/teoria.html";
        var webview = this.page.getViewById("wv");
        webview.on(web_view_1.WebView.loadStartedEvent, function (args) {
            if (!args.error) {
                if (webview.android) {
                    webview.android.getSettings().setBuiltInZoomControls(false);
                }
            }
            else {
                alert('Oops!, something went wrong!, try again later.');
            }
        });
    };
    return TheoryComponent;
}());
TheoryComponent = __decorate([
    core_1.Component({
        selector: "theory",
        templateUrl: "pages/teoria/teoria.component.html",
        styleUrls: ["pages/teoria/teoria.component.css"]
    }),
    __metadata("design:paramtypes", [page_1.Page])
], TheoryComponent);
exports.TheoryComponent = TheoryComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGVvcmlhLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInRlb3JpYS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUFrRDtBQUNsRCx3Q0FBcUQ7QUFDckQsZ0NBQStCO0FBQy9CLGdDQUFrQztBQVFsQyxJQUFhLGVBQWU7SUFFeEIseUJBQW9CLElBQVU7UUFBVixTQUFJLEdBQUosSUFBSSxDQUFNO0lBQzlCLENBQUM7SUFFRCxrQ0FBUSxHQUFSO1FBQ0ksSUFBSSxnQkFBZ0IsR0FBRyxFQUFFLENBQUMsWUFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDO1FBQ3BELElBQUksQ0FBQyxVQUFVLEdBQUcsZ0JBQWdCLENBQUMsSUFBSSxHQUFHLDJCQUEyQixDQUFDO1FBRXRFLElBQUksT0FBTyxHQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFVLElBQUksQ0FBQyxDQUFDO1FBRTVELE9BQU8sQ0FBQyxFQUFFLENBQUMsa0JBQU8sQ0FBQyxnQkFBZ0IsRUFBRSxVQUFTLElBQW1CO1lBQzdELEVBQUUsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQ2QsRUFBRSxDQUFDLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7b0JBQ2xCLE9BQU8sQ0FBQyxPQUFPLENBQUMsV0FBVyxFQUFFLENBQUMsc0JBQXNCLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2hFLENBQUM7WUFDTCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osS0FBSyxDQUFDLGdEQUFnRCxDQUFDLENBQUM7WUFDNUQsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBR1AsQ0FBQztJQUNMLHNCQUFDO0FBQUQsQ0FBQyxBQXZCRCxJQXVCQztBQXZCWSxlQUFlO0lBTjNCLGdCQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsUUFBUTtRQUNsQixXQUFXLEVBQUUsb0NBQW9DO1FBQ2pELFNBQVMsRUFBRSxDQUFDLG1DQUFtQyxDQUFDO0tBQ25ELENBQUM7cUNBSTRCLFdBQUk7R0FGckIsZUFBZSxDQXVCM0I7QUF2QlksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XHJcbmltcG9ydCB7IFdlYlZpZXcsIExvYWRFdmVudERhdGEgfSBmcm9tIFwidWkvd2ViLXZpZXdcIjtcclxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XHJcbmltcG9ydCAqIGFzIGZzIGZyb20gXCJmaWxlLXN5c3RlbVwiO1xyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgICBzZWxlY3RvcjogXCJ0aGVvcnlcIixcclxuICAgIHRlbXBsYXRlVXJsOiBcInBhZ2VzL3Rlb3JpYS90ZW9yaWEuY29tcG9uZW50Lmh0bWxcIixcclxuICAgIHN0eWxlVXJsczogW1wicGFnZXMvdGVvcmlhL3Rlb3JpYS5jb21wb25lbnQuY3NzXCJdXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgVGhlb3J5Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcclxuICAgIHdlYlZpZXdTcmM6IHN0cmluZztcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgcGFnZTogUGFnZSkge1xyXG4gICAgfVxyXG5cclxuICAgIG5nT25Jbml0KCkge1xyXG4gICAgICAgIGxldCBjdXJyZW50QXBwRm9sZGVyID0gZnMua25vd25Gb2xkZXJzLmN1cnJlbnRBcHAoKTtcclxuICAgICAgICB0aGlzLndlYlZpZXdTcmMgPSBjdXJyZW50QXBwRm9sZGVyLnBhdGggKyBcIi9wYWdlcy90ZW9yaWEvdGVvcmlhLmh0bWxcIjtcclxuXHJcbiAgICAgICAgbGV0IHdlYnZpZXc6IFdlYlZpZXcgPSB0aGlzLnBhZ2UuZ2V0Vmlld0J5SWQ8V2ViVmlldz4oXCJ3dlwiKTtcclxuXHJcbiAgICAgICAgd2Vidmlldy5vbihXZWJWaWV3LmxvYWRTdGFydGVkRXZlbnQsIGZ1bmN0aW9uKGFyZ3M6IExvYWRFdmVudERhdGEpIHtcclxuICAgICAgICAgICAgaWYgKCFhcmdzLmVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAod2Vidmlldy5hbmRyb2lkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2Vidmlldy5hbmRyb2lkLmdldFNldHRpbmdzKCkuc2V0QnVpbHRJblpvb21Db250cm9scyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhbGVydCgnT29wcyEsIHNvbWV0aGluZyB3ZW50IHdyb25nISwgdHJ5IGFnYWluIGxhdGVyLicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG5cclxuICAgIH1cclxufSJdfQ==