define({ 

	onViewCreated(){
      this.view.init = () => {
        this.view.flxBack.onClick = () => {
          new voltmx.mvc.Navigation("frmEnterCode").navigate();
        };
        
        this.view.btnAddVehicle.onClick = () => {
          if(this.view.txtLicensePlateNumber.text === "" || this.view.txtMake.text === "" ||
            this.view.txtModel.text === "" || this.view.txtYear.text === "") {
            return callAlert("Please enter in all required fields");
          }
          
          this.generateUserObject();
          new voltmx.mvc.Navigation("frmVehicleAdded").navigate();
        };
        
      };
      
      this.view.preShow = () => {
        this.view.txtLicensePlateNumber.text = "";
        this.view.txtMake.text = "";
        this.view.txtModel.text = "";
        this.view.txtYear.text = "";
      };
    },
  
    generateUserObject: function () {
      var newVehicle = {
        "LicensePlate":this.view.txtLicensePlateNumber.text.trim(),
        "make": this.view.txtMake.text.trim(),
        "model": this.view.txtModel.text.trim(),
        "year": this.view.txtYear.text.trim(),
        "status": this.view.lstStatus.selectedKey
      };
      
      var vehicles;
      voltmx.store.setItem("newVehicles", newVehicle);
      vehicles = voltmx.store.getItem("vehicles");
      if(!vehicles) {
        vehicles = [];
      }
      vehicles.push(newVehicle);
      voltmx.store.setItem("vehicles", vehicles);
    }

 });