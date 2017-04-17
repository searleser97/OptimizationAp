"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var common = require("./plugin.common");
var PDFView = (function (_super) {
    __extends(PDFView, _super);
    function PDFView() {
        var _this = _super.call(this) || this;
        _this.init();
        _this.loadPDF(_this.src);
        return _this;
    }
    Object.defineProperty(PDFView.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        set: function (value) {
            this._ios = value;
        },
        enumerable: true,
        configurable: true
    });
    PDFView.prototype.loadPDF = function (src) {
        if (!src) {
            return;
        }
        var url;
        if (src.indexOf('://') === -1) {
            url = NSURL.fileURLWithPath(src);
        }
        else {
            url = NSURL.URLWithString(src);
        }
        var urlRequest = new NSURLRequest({ URL: url });
        this.ios.loadRequest(urlRequest);
    };
    PDFView.prototype.onLoaded = function () {
        _super.prototype.onLoaded.call(this);
        this._ios.delegate = this.delegate;
    };
    PDFView.prototype.onUnloaded = function () {
        this._ios.delegate = null;
        _super.prototype.onUnloaded.call(this);
    };
    PDFView.prototype.init = function () {
        this.ios = new UIWebView(this.mainScreen.bounds);
        this.delegate = PDFViewDelegate.initWithOwner(new WeakRef(this));
        this.ios.autoresizingMask =
            2 |
                16;
        this.ios.scalesPageToFit = true;
    };
    Object.defineProperty(PDFView.prototype, "mainScreen", {
        get: function () {
            return typeof UIScreen.mainScreen === 'function' ?
                UIScreen.mainScreen() :
                UIScreen.mainScreen;
        },
        enumerable: true,
        configurable: true
    });
    return PDFView;
}(common.PDFView));
exports.PDFView = PDFView;
var PDFViewDelegate = (function (_super) {
    __extends(PDFViewDelegate, _super);
    function PDFViewDelegate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PDFViewDelegate.initWithOwner = function (owner) {
        var delegate = PDFViewDelegate.new();
        delegate.owner = owner;
        return delegate;
    };
    PDFViewDelegate.prototype.webViewDidFinishLoad = function (webView) {
        return common.PDFView.notifyOfEvent(common.PDFView.loadEvent, this.owner);
    };
    return PDFViewDelegate;
}(NSObject));
PDFViewDelegate.ObjCProtocols = [UIWebViewDelegate];
//# sourceMappingURL=plugin.js.map