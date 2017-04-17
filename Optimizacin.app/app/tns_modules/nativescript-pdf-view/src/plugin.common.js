"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var dependency_observable_1 = require("ui/core/dependency-observable");
var proxy = require("ui/core/proxy");
var view = require("ui/core/view");
var PDFView = (function (_super) {
    __extends(PDFView, _super);
    function PDFView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    PDFView.notifyOfEvent = function (eventName, pdfViewRef) {
        var viewer = pdfViewRef.get();
        if (viewer) {
            viewer.notify({ eventName: eventName, object: viewer });
        }
    };
    Object.defineProperty(PDFView.prototype, "src", {
        get: function () {
            return this._getValue(PDFView.srcProperty);
        },
        set: function (src) {
            this._setValue(PDFView.srcProperty, src);
            this.loadPDF(src);
        },
        enumerable: true,
        configurable: true
    });
    return PDFView;
}(view.View));
PDFView.srcProperty = new dependency_observable_1.Property('src', 'PdfView', new proxy.PropertyMetadata(''));
PDFView.loadEvent = 'load';
exports.PDFView = PDFView;
try {
    var registerElement = require('nativescript-angular/element-registry').registerElement;
    registerElement('PDFView', function () { return require('./plugin').PDFView; });
}
catch (e) {
}
//# sourceMappingURL=plugin.common.js.map