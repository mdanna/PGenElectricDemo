define({ 

	onViewCreated(){
      this.view.init = () => {
        this.view.btnChangeVehicle.onClick = () => {
          if(this.view.txtLicensePlateNumber.text === "" || this.view.txtMake.text === "" ||
            this.view.txtModel.text === "" || this.view.txtYear.text === "") {
            return callAlert("Please enter in all required fields");
          }
          
          this.generateUserObject();
          new voltmx.mvc.Navigation("frmManageVehicles").navigate();
        };
        
        this.view.btnDeleteVehicle.onClick = () => {
          var vehicleSelected = voltmx.store.getItem("vehicleSelected");
          var vehicles = voltmx.store.getItem("vehicles");
          
          vehicles.splice(vehicleSelected);
          voltmx.store.setItem("vehicles", vehicles);
          
          new voltmx.mvc.Navigation("frmManageVehicles").navigate();
        };
        
      };
      
      
      this.view.preShow = () => {
        var vehicleSelected = voltmx.store.getItem("vehicleSelected");
        var vehicles = voltmx.store.getItem("vehicles");
        
        this.view.txtLicensePlateNumber.text = vehicles[vehicleSelected].LicensePlate;
        this.view.txtMake.text = vehicles[vehicleSelected].make;
        this.view.txtModel.text = vehicles[vehicleSelected].model;
        this.view.txtYear.text = vehicles[vehicleSelected].year;
        this.view.lstStatus.selectedKey = vehicles[vehicleSelected].status;
      };
    },
  
    generateUserObject: function () {
      var vehicles = voltmx.store.getItem("vehicles");
      var vehicleSelected = voltmx.store.getItem("vehicleSelected");
      
      vehicles[vehicleSelected].LicensePlate = this.view.txtLicensePlateNumber.text;
      vehicles[vehicleSelected].make = this.view.txtMake.text;
      vehicles[vehicleSelected].model = this.view.txtModel.text;
      vehicles[vehicleSelected].year = this.view.txtYear.text;
      vehicles[vehicleSelected].status = this.view.lstStatus.selectedKey;
      
      voltmx.store.setItem("vehicles", vehicles);
    }

 });