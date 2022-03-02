define({ 

	onViewCreated(){
      this.view.preShow = () => {
        this.view.lblInfo.text = this.view.lblInfo.text.replace('12', globals.reservedPort);
        this.view.lblReservedPortInfo.text = globals.reservedPort;
        this.view.lblReservedTimeInfo.text = globals.reservedTime;
      };
    }

});