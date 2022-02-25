function callAlert(message) {
      function alertCallback() {}
      voltmx.ui.Alert({
        "alertType": constants.ALERT_TYPE_INFO,
        "alertTitle": null,
        "yesLabel": null,
        "noLabel": null,
        "alertIcon": null,
        "message": message,
        "alertHandler": alertCallback
      }, {
        "iconPosition": constants.ALERT_ICON_POSITION_LEFT
      });
}