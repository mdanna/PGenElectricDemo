define({ 

	onViewCreated(){
      this.view.init = () => {
        this.view.flxReserve.onClick = () => {
          this.view.lblPopupAddress2.text = 'Charging Port ' + 
            this.view.radioButtonsPort.getSelection() + ' at ' + this.view.radioButtonsTime.getSelection();
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