define({ 

	onViewCreated(){
      this.view.init = () => {
        this.view.flxReserve.onClick = () => {
          const reservedTime = this.view.radioButtonsTime.getSelection();
          const reservedPort = this.view.radioButtonsPort.getSelection();
          globals.reservedTime = reservedTime;
          globals.reservedPort = reservedPort;
          this.view.lblPopupAddress2.text = 'Charging Port ' + reservedPort + ' at ' + reservedTime;
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
      };
    }

});