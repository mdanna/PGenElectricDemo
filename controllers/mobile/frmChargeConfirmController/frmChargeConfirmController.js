define({ 

  onViewCreated(){
    this.view.preShow = () => {
      this.view.lblChargingStation.text = 'Charging Station ' + globals.reservedPort;
    };
    
    this.view.flxRescan.onClick = () => new voltmx.mvc.Navigation('frmScanBarcode').navigate();
    
    this.view.flxConfirm.onClick = () => {
      this.view.flxPopupBackground.isVisible = true;
      this.view.flxPopup.isVisible = true;
    };
    
    this.view.flxPopupBackground.onClick = () => {
      this.view.flxPopupBackground.isVisible = false;
      this.view.flxPopup.isVisible = false;
    };

    this.view.lblClose.onTouchEnd = () => {
      this.view.flxPopupBackground.isVisible = false;
      this.view.flxPopup.isVisible = false;
    };
    
    this.view.lblViewDetails.onTouchEnd = () => {
      this.view.flxPopupBackground.isVisible = false;
      this.view.flxPopup.isVisible = false;
      new voltmx.mvc.Navigation('frmBillingDetails').navigate();
    };
}
});