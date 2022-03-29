define({ 

	onViewCreated(){
      this.view.preShow = () => this.view.lblPort.text = '#' + globals.reservedPort;
    }

});