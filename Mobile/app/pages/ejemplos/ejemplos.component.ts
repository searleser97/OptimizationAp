import { Component, OnInit } from "@angular/core";
import { WebView, LoadEventData } from "ui/web-view";
import { Page } from "ui/page";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: "examples",
    templateUrl: "pages/ejemplos/ejemplos.component.html",
    styleUrls: ["pages/ejemplos/ejemplos.component.css"]
})



export class ExamplesComponent {
    exampleUrl: string;

    constructor(
        private page: Page,
        private route: ActivatedRoute,
        private router: Router) { }

    ngOnInit() {
        let nexample: string;
        this.route.queryParams.subscribe(params => {
            nexample = params["example"];
        });
        this.exampleUrl = "https://optimizacinexamples-san1302.rhcloud.com/Ejemplo" + nexample;

        let webview: WebView = this.page.getViewById<WebView>("wv");

        webview.on(WebView.loadStartedEvent, function(args: LoadEventData) {
            if (!args.error) {
                if (webview.android) {
                    webview.android.getSettings().setJavaScriptEnabled(true);
                    webview.android.getSettings().setBuiltInZoomControls(false);
                }
            } else {
                alert('Oops!, something went wrong!, try again later.');
            }
        });


    }
}