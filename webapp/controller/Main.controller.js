sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    function (Controller) {
        "use strict";

        return Controller.extend("com.sap.learning.secondapp.controller.Main", {
            onInit: function () {
                var oComponentData = this.getOwnerComponent().getComponentData();
                if (oComponentData && oComponentData.startupParameters &&
                    oComponentData.startupParameters.helloText) {
                    var sHelloText = oComponentData.startupParameters.helloText[0];
                    var oLabel = this.byId("idInfo");
                    oLabel.setText(sHelloText);
                }
            }
        });
    });


