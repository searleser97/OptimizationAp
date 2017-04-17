import { Component, OnInit } from "@angular/core";
import { WebView, LoadEventData } from "ui/web-view";
import { Page } from "ui/page";
import * as fs from "file-system";

@Component({
    selector: "theory",
    templateUrl: "pages/teoria/teoria.component.html",
    styleUrls: ["pages/teoria/teoria.component.css"]
})

export class TheoryComponent implements OnInit {
    webViewSrc: string;
    constructor(private page: Page) {
    }

    ngOnInit() {
        let currentAppFolder = fs.knownFolders.currentApp();
        this.webViewSrc = currentAppFolder.path + "/pages/teoria/teoria.html";

        let webview: WebView = this.page.getViewById<WebView>("wv");

        webview.on(WebView.loadStartedEvent, function(args: LoadEventData) {
            if (!args.error) {
                if (webview.android) {
                    webview.android.getSettings().setBuiltInZoomControls(false);
                }
            } else {
                alert('Oops!, something went wrong!, try again later.');
            }
        });


    }
}